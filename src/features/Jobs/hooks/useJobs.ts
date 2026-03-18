"use client";

import { getAllJobs, type JobModel } from "@/services/jobsService";
import { useEffect, useMemo, useState } from "react";

export type JobsQuery = {
  q?: string;
  loc?: string;
};

export function useJobs(query: JobsQuery) {
  const [jobs, setJobs] = useState<JobModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllJobs();
        console.log("Job data received:", data);
        if (!cancelled) {
          if (Array.isArray(data)) {
            setJobs(data);
          } else if (data && typeof data === "object" && Array.isArray((data as any).data)) {
            setJobs((data as any).data);
          } else {
            console.warn("getAllJobs returned non-array data:", data);
            setJobs([]);
          }
        }
      } catch (e) {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load jobs");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = (query.q ?? "").trim().toLowerCase();
    const loc = (query.loc ?? "").trim().toLowerCase();
    if (!q && !loc) return jobs;
    return jobs.filter((j) => {
      const haystack = [
        j.jobTittle,
        j.description,
        ...(j.skillsRequired ?? []),
      ]
        .join(" ")
        .toLowerCase();
      const qOk = q ? haystack.includes(q) : true;
      const locOk = loc ? haystack.includes(loc) : true;
      return qOk && locOk;
    });
  }, [jobs, query.q, query.loc]);

  return { jobs: filtered, rawJobs: jobs, loading, error };
}

