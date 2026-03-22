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
      const data =await applyJob({ userId, jobId });
      if(data as string === "Application Successfully applied"){
        toast.success("Applied successfully.");
        return { ok: true as const };
      }else if(data as string === "You have already applied to this job!"){
        toast.error("You have already applied to this job!");
        return {ok: false as const, reason: "ALREADY_APPLIED" as const}
      }

    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Failed to apply.");
      return { ok: false as const, reason: "ERROR" as const };
    } finally {
      setLoadingJobId(null);
    }
  };

  return { apply, loadingJobId };
}

