import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-slate-500">Last updated: March 2026</p>

        <div className="prose prose-slate mt-12 max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p className="mt-4">
              We collect information that you provide directly to us when you create an account, search for jobs, or apply for positions. This may include your name, email address, resume details, and job preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. How We Use Information</h2>
            <p className="mt-4">
              We use the information we collect to operate and maintain our job search platform, connect you with potential employers, and communicate with you about your account and our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. Information Sharing</h2>
            <p className="mt-4">
              We do not sell your personal information. We may share your information with employers whose jobs you apply for, or as required by law to protect our rights and the safety of our users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Data Security</h2>
            <p className="mt-4">
              We implement industry-standard security measures to protect your data from unauthorized access, loss, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
