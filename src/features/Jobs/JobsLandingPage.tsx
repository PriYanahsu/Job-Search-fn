"use client";

import { JobCard } from "@/components/JobCard";
import { JobFilters } from "@/components/JobFilters";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useApplyJob } from "@/features/Jobs/hooks/useApplyJob";
import { useJobs } from "@/features/Jobs/hooks/useJobs";
import { getAccessToken } from "@/lib/authStorage";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function JobsLandingPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const initialQ = sp.get("q") ?? "";
  const initialLoc = sp.get("loc") ?? "";
  const [q, setQ] = useState(initialQ);
  const [loc, setLoc] = useState(initialLoc);

  const query = useMemo(() => ({ q, loc }), [q, loc]);
  const { jobs, loading, error } = useJobs(query);
  const { apply, loadingJobId } = useApplyJob();

  const onApply = async (jobId: number) => {
    const token = getAccessToken();
    if (!token) {
      router.push(`/login?next=${encodeURIComponent("/")}`);
      return;
    }
    const res = await apply(jobId);
    if (!res.ok && res.reason === "NO_USER") {
      router.push(`/login?next=${encodeURIComponent("/")}`);
    }
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Jobs · Updated daily
              </div>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Find your next job
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Real jobs from your backend. Search by title, description, or
                skills.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">
                Quick tips
              </div>
              <div className="mt-2 text-xs text-slate-600">
                Add skills in your profile for better matching.
              </div>
            </div>
          </div>

          <div className="mt-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const params = new URLSearchParams();
                if (q) params.set("q", q);
                if (loc) params.set("loc", loc);
                router.replace(params.toString() ? `/?${params}` : "/");
              }}
              className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1.2fr_1fr_auto] md:items-end md:gap-4"
            >
              <div>
                <label className="text-xs font-semibold text-slate-700">
                  Job title / Skills
                </label>
                <input
                  name="q"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="e.g. spring boot, react"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">
                  Location (optional)
                </label>
                <input
                  name="loc"
                  value={loc}
                  onChange={(e) => setLoc(e.target.value)}
                  placeholder="(optional)"
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
          </div>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-[320px_1fr]">
          <JobFilters />

          <div className="space-y-4">
            <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Jobs
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {loading ? "Loading..." : `Showing ${jobs.length} jobs`}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {error && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
                  {error}
                </div>
              )}

              {loading &&
                Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[132px] animate-pulse rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="h-4 w-2/3 rounded bg-slate-200" />
                    <div className="mt-3 h-3 w-full rounded bg-slate-200" />
                    <div className="mt-2 h-3 w-5/6 rounded bg-slate-200" />
                    <div className="mt-4 flex gap-2">
                      <div className="h-6 w-16 rounded-full bg-slate-200" />
                      <div className="h-6 w-20 rounded-full bg-slate-200" />
                      <div className="h-6 w-24 rounded-full bg-slate-200" />
                    </div>
                  </div>
                ))}

              {!loading && jobs.length === 0 && !error && (
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
                  No jobs found.
                </div>
              )}

              {!loading &&
                jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onApply={onApply}
                    applying={loadingJobId === job.id}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

