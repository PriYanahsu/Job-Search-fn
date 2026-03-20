export type JobCardModel = {
  id: number;
  jobTittle: string;
  description: string;
  skillsRequired: string[];
};

export function JobCard({
  job,
  onApply,
  applying,
}: {
  job: JobCardModel;
  onApply: (jobId: number) => void;
  applying?: boolean;
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {job.jobTittle}
            </h3>
            <span className="hidden rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700 sm:inline">
              Actively hiring
            </span>
          </div>
          <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {job.description}
          </div>
        </div>

        <div className="hidden h-10 w-10 shrink-0 rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800 sm:grid sm:place-items-center">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            JS
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {(job.skillsRequired ?? []).slice(0, 8).map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="text-xs text-slate-500 dark:text-slate-400">Job ID: {job.id}</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 sm:inline-flex"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => onApply(job.id)}
            disabled={applying}
            className="inline-flex rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {applying ? "Applying..." : "Apply"}
          </button>
        </div>
      </div>
    </article>
  );
}

