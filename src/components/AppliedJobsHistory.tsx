"use client";

import { useMemo, useState } from "react";

type AppliedJobsHistoryProps = {
  appliedJobIds: number[];
  jobs: Array<{
    id: number;
    jobTittle: string;
    description: string;
    skillsRequired: string[];
  }>;
  loading?: boolean;
  defaultOpen?: boolean;
  hideToggle?: boolean;
};

export function AppliedJobsHistory({
  appliedJobIds,
  jobs,
  loading = false,
  defaultOpen = false,
  hideToggle = false,
}: AppliedJobsHistoryProps) {
  const [open, setOpen] = useState(defaultOpen);

  const appliedJobs = useMemo(() => {
    const idSet = new Set(appliedJobIds);
    return jobs.filter((job) => idSet.has(job.id));
  }, [appliedJobIds, jobs]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Application history
          </div>
          <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            {loading ? "Loading history..." : `${appliedJobIds.length} applied jobs`}
          </div>
        </div>

        {!hideToggle && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            History
          </button>
        )}
      </div>

      {(hideToggle || open) && (
        <div className="mt-3">
          {loading && (
            <p className="text-sm text-slate-600 dark:text-slate-400">Fetching applied jobs...</p>
          )}

          {!loading && appliedJobs.length === 0 && (
            <p className="text-sm text-slate-600 dark:text-slate-400">No applied jobs yet.</p>
          )}

          {!loading && appliedJobs.length > 0 && (
            <ul className="space-y-3">
              {appliedJobs.map((job) => (
                <li
                  key={job.id}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {job.jobTittle}
                    </h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Job ID: {job.id}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {job.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(job.skillsRequired ?? []).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
