"use client";

import { getUserId } from "@/lib/authStorage";
import { getAppliedJobs, type AppliedJobModel } from "@/services/jobsService";
import { useCallback, useEffect, useState } from "react";

function readJobId(item: unknown): number | null {
  if (!item || typeof item !== "object") return null;
  const candidate = item as Record<string, unknown>;
  const rawId =
    candidate.jobId ?? null;
  return typeof rawId === "number" && Number.isFinite(rawId) ? rawId : null;
}

function readStatus(item: unknown): string | null {
  if (!item || typeof item !== "object") return null;
  const candidate = item as Record<string, unknown>;
  const rawStatus = candidate.status || null;
  return typeof rawStatus === "string" && rawStatus.trim() ? rawStatus.trim() : null;
}

export function useAppliedJobs() {
  const [appliedJobIds, setAppliedJobIds] = useState<number[]>([]);
  const [statusByJobId, setStatusByJobId] = useState<Record<number, string>>({});
  const [loadingApplied, setLoadingApplied] = useState(false);
  const [appliedError, setAppliedError] = useState<string | null>(null);

  const refreshApplied = useCallback(async () => {
    const userId = getUserId();
    if (!userId) {
      setAppliedJobIds([]);
      setStatusByJobId({});
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
        .map((item: AppliedJobModel) => readJobId(item))
        .filter((id): id is number => id !== null);
      setAppliedJobIds(Array.from(new Set(ids)));
      const nextStatusByJobId = list.reduce<Record<number, string>>((acc, item) => {
        const jobId = readJobId(item);
        const status = readStatus(item);
        if (jobId !== null && status!=null) {
          acc[jobId] = status;
        }
        return acc;
      }, {});
      setStatusByJobId(nextStatusByJobId);
    } catch (e) {
      setAppliedError(e instanceof Error ? e.message : "Failed to load applied jobs");
    } finally {
      setLoadingApplied(false);
    }
  }, []);

  useEffect(() => {
    void refreshApplied();
  }, [refreshApplied]);

  return { appliedJobIds, statusByJobId, loadingApplied, appliedError, refreshApplied };
}
