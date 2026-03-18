"use client";

import { InputBox } from "@/components/InputBox";
import { SiteHeader } from "@/components/SiteHeader";
import { getAccessToken, isOwner } from "@/lib/authStorage";
import { addJob } from "@/services/jobsService";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const router = useRouter();
  const [jobTittle, setJobTittle] = useState("");
  const [description, setDescription] = useState("");
  const [skillsRaw, setSkillsRaw] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      router.replace("/login?next=/add-job");
      return;
    }
    if (!isOwner()) {
      toast.error("Only owner can post jobs.");
      router.replace("/");
    }
  }, [router]);

  const skillsRequired = useMemo(
    () =>
      skillsRaw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    [skillsRaw],
  );

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Post a job
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            This calls your backend endpoint: <code>/api/jobs/addJobs</code>
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                setLoading(true);
                await addJob({
                  jobTittle,
                  description,
                  skillsRequired,
                });
                toast.success("Job posted successfully.");
                router.push("/");
              } catch (err) {
                toast.error(
                  err instanceof Error ? err.message : "Failed to post job.",
                );
              } finally {
                setLoading(false);
              }
            }}
          >
            <InputBox
              name="jobTittle"
              label="Job title"
              value={jobTittle}
              onChange={(e) => setJobTittle(e.target.value)}
              placeholder="e.g. Java Developer"
              required
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Role overview, responsibilities, etc."
                className="min-h-32 w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-base text-slate-900 shadow-sm placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
                required
              />
            </div>

            <InputBox
              name="skillsRequired"
              label="Skills required (comma separated)"
              value={skillsRaw}
              onChange={(e) => setSkillsRaw(e.target.value)}
              placeholder="e.g. Spring Boot, MySQL, Docker"
            />

            {skillsRequired.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {skillsRequired.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Posting..." : "Post job"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

