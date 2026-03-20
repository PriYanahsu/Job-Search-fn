"use client";

import { useMemo, useState } from "react";

type AppliedJobsHistoryProps = {
  appliedJobIds: number[];
  statusByJobId?: Record<number, string>;
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

const getStatusStyles = (status: string) => {
  const normalized = status.trim().toLowerCase();
  if (normalized.includes("reject")) {
    return "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-700/60 dark:bg-rose-500/20 dark:text-rose-300";
  }
  if (normalized.includes("review") || normalized.includes("shortlist")) {
    return "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-700/60 dark:bg-amber-500/20 dark:text-amber-300";
  }
  if (normalized.includes("hire") || normalized.includes("offer")) {
    return "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-500/20 dark:text-emerald-300";
  }
  return "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-700/60 dark:bg-blue-500/20 dark:text-blue-300";
};

export function AppliedJobsHistory({
  appliedJobIds,
  statusByJobId = {},
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
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
        <div>
          <div className="text-base font-bold text-slate-900 dark:text-slate-100">
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
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            History
          </button>
        )}
      </div>

      {(hideToggle || open) && (
        <div className="mt-4">
          {loading && (
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-20 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800"
                />
              ))}
            </div>
          )}

          {!loading && appliedJobs.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-800/60">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                No application history yet
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Apply to jobs and your status timeline will appear here.
              </p>
            </div>
          )}

          {!loading && appliedJobs.length > 0 && (
            <ul className="space-y-3">
              {appliedJobs.map((job) => {
                const statusLabel = statusByJobId[job.id] || "Applied";
                return (
                  <li
                    key={job.id}
                    className="rounded-xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-4 shadow-sm dark:border-slate-700 dark:from-slate-900 dark:to-slate-800"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {job.jobTittle}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span
                          className={[
                            "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                            getStatusStyles(statusLabel),
                          ].join(" ")}
                        >
                          {statusLabel}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-300">
                          Job ID: {job.id}
                        </span>
                      </div>
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
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
