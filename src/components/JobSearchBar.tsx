export function JobSearchBar() {
  return (
    <form className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1.2fr_1fr_auto] md:items-end md:gap-4">
      <div>
        <label className="text-xs font-semibold text-slate-700">
          Skills / Designation / Companies
        </label>
        <input
          name="q"
          placeholder="e.g. frontend developer, react, google"
          className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-700">Location</label>
        <input
          name="loc"
          placeholder="e.g. Bengaluru, Remote"
          className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
        />
      </div>

      <button
        type="submit"
        className="h-11 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

