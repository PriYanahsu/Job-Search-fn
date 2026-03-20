"use client";

import { getUserId } from "@/lib/authStorage";
import { getAppliedJobs, type AppliedJobModel } from "@/services/jobsService";
import { useCallback, useEffect, useState } from "react";

export function useAppliedJobs() {
  const [appliedJobIds, setAppliedJobIds] = useState<number[]>([]);
  const [loadingApplied, setLoadingApplied] = useState(false);
  const [appliedError, setAppliedError] = useState<string | null>(null);

  const refreshApplied = useCallback(async () => {
    const userId = getUserId();
    if (!userId) {
      setAppliedJobIds([]);
      setAppliedError(null);
      setLoadingApplied(false);
      return;
    }

    try {
      setLoadingApplied(true);
      setAppliedError(null);
      const data = await getAppliedJobs(userId);
      const list = Array.isArray(data)
        ? data
        : data && typeof data === "object" && Array.isArray(data.data)
          ? data.data
          : [];
      const ids = list
        .map((item: AppliedJobModel) => item.jobId)
        .filter((id): id is number => Number.isFinite(id));
      setAppliedJobIds(Array.from(new Set(ids)));
    } catch (e) {
      setAppliedError(e instanceof Error ? e.message : "Failed to load applied jobs");
    } finally {
      setLoadingApplied(false);
    }
  }, []);

  useEffect(() => {
    void refreshApplied();
  }, [refreshApplied]);

  return { appliedJobIds, loadingApplied, appliedError, refreshApplied };
}
