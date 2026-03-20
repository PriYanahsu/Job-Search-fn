"use client";

import { InputBox } from "@/components/InputBox";
import { SiteHeader } from "@/components/SiteHeader";
import { useRegistration } from "./hooks/useRegistration";
import Link from "next/link";

const Registration = () => {
  const { registerForm, registerData, handleChange, loading } =
    useRegistration();

  return (
    <>
      <div className="min-h-screen">
        <SiteHeader />

        <main className="mx-auto grid max-w-6xl gap-5 px-4 py-8 md:grid-cols-[420px_1fr] md:items-start">
          <aside className="order-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Create profile once
            </div>
            <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Get discovered by recruiters
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Build your profile and let top companies reach out. Apply to jobs
              with fewer clicks.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              {[
                "Personalised job recommendations",
                "One-click apply with your profile",
                "Save & track applications",
              ].map((t) => (
                <div key={t} className="flex gap-2">
                  <span className="mt-0.5 text-blue-700">✓</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Tip: faster shortlisting
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Add your top skills and preferred location to improve matches.
              </p>
            </div>
          </aside>

          <section className="order-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:order-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Create your account
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Start searching and applying in under a minute.
            </p>

            <form onSubmit={registerForm} className="mt-6 space-y-4">
              <InputBox
                type="text"
                name="name"
                label="Full name"
                size="md"
                value={registerData.name}
                onChange={handleChange}
                required
              />
              <InputBox
                type="email"
                name="email"
                label="Email address"
                size="md"
                value={registerData.email}
                onChange={handleChange}
                required
              />
              <InputBox
                type="password"
                name="password"
                label="Password"
                size="md"
                value={registerData.password}
                onChange={handleChange}
                required
              />
              <InputBox
                type="password"
                name="confirmPassword"
                label="Confirm password"
                size="md"
                value={registerData.confirmPassword}
                onChange={handleChange}
                required
              />

              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                By creating an account you agree to our{" "}
                <Link href="#" className="font-semibold text-blue-700">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-semibold text-blue-700">
                  Privacy Policy
                </Link>
                .
              </p>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>

              <p className="text-center text-sm text-slate-600 dark:text-slate-300">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-blue-700 hover:text-blue-800"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default Registration;