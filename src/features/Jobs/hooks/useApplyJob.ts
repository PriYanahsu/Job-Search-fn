"use client";

import { getUserId } from "@/lib/authStorage";
import { applyJob } from "@/services/applicationService";
import { useState } from "react";
import { toast } from "sonner";

export function useApplyJob() {
  const [loadingJobId, setLoadingJobId] = useState<number | null>(null);

  const apply = async (jobId: number) => {
    const userId = getUserId();
    if (!userId) {
      toast.error("Please login first to apply.");
      return { ok: false as const, reason: "NO_USER" as const };
    }

    try {
      setLoadingJobId(jobId);
      await applyJob({ userId, jobId });
      toast.success("Applied successfully.");
      return { ok: true as const };
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Failed to apply.");
      return { ok: false as const, reason: "ERROR" as const };
    } finally {
      setLoadingJobId(null);
    }
  };

  return { apply, loadingJobId };
}

