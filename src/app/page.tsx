import JobsLandingPage from "@/features/Jobs/JobsLandingPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-[var(--page-bg)]" />}
    >
      <JobsLandingPage />
    </Suspense>
  );
}