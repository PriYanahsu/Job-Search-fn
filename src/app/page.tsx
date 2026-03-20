import JobsLandingPage from "@/features/Jobs/JobsLandingPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        <Suspense fallback={<div className="min-h-screen bg-(--page-bg)" />}>
          <JobsLandingPage />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}