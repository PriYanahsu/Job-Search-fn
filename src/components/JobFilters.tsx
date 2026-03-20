const Pill = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
    {label}
  </span>
);

export function JobFilters() {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">All filters</div>
        <button
          type="button"
          className="text-xs font-semibold text-blue-700 hover:text-blue-800"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 space-y-5">
        <section>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Work mode</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Pill label="Work from office" />
            <Pill label="Hybrid" />
            <Pill label="Remote" />
          </div>
        </section>

        <section>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Experience</div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <select className="h-10 rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-800 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
              <option>Min</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>5</option>
              <option>8</option>
            </select>
            <select className="h-10 rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-800 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
              <option>Max</option>
              <option>2</option>
              <option>4</option>
              <option>6</option>
              <option>8</option>
              <option>10+</option>
            </select>
          </div>
        </section>

        <section>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Salary</div>
          <div className="mt-2">
            <select className="h-10 w-full rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-800 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
              <option>Any</option>
              <option>3-6 LPA</option>
              <option>6-10 LPA</option>
              <option>10-20 LPA</option>
              <option>20+ LPA</option>
            </select>
          </div>
        </section>

        <section>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">Company type</div>
          <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" /> Product
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" /> Service
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" /> Startup
            </label>
          </div>
        </section>
      </div>
    </aside>
  );
}

