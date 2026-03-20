export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
        <p className="mt-4 text-slate-500">Last updated: March 2026</p>

        <div className="prose prose-slate mt-12 max-w-none text-slate-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Agreement to Terms</h2>
            <p className="mt-4">
              By accessing or using our job search platform, you agree to comply with and be bound by these terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">2. User Accounts</h2>
            <p className="mt-4">
              You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You must provide accurate and complete information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">3. Prohibited Activities</h2>
            <p className="mt-4">
              Users may not post false information, engage in fraudulent activities, or disrupt the platform's security. Automated scraping or use of robots is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. Intellectual Property</h2>
            <p className="mt-4">
              All content and designs on this platform are owned by us or our licensors. You may not reproduce, distribute, or modify any part without our prior written consent.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
