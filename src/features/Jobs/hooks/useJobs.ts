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
        console.log(data, "data");
        if (!cancelled) setJobs(data ?? []);
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

