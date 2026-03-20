import JobsLandingPage from "@/features/Jobs/JobsLandingPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <Suspense fallback={<div className="min-h-screen bg-(--page-bg)" />}>
          <JobsLandingPage />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}