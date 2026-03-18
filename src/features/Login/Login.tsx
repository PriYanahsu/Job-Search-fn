"use client";

import { InputBox } from "@/components/InputBox";
import { SiteHeader } from "@/components/SiteHeader";
import { useLogin } from "./hooks/useLogin";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const { loginForm, loginData, handleChange, loading } = useLogin();
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/";

  return (
    <>
      <div className="min-h-screen">
        <SiteHeader />

        <main className="mx-auto grid max-w-6xl gap-5 px-4 py-8 md:grid-cols-[1fr_420px] md:items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Login to apply faster
            </div>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Access your dashboard, saved jobs, and application tracker.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <span className="grid h-6 w-6 place-items-center rounded-md bg-slate-100">
                  G
                </span>
                Google
              </button>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <span className="grid h-6 w-6 place-items-center rounded-md bg-slate-100">
                  in
                </span>
                LinkedIn
              </button>
            </div>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-500">
                or sign in with email
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <form
              onSubmit={async (e) => {
                const ok = await loginForm(e);
                if (ok) router.push(next);
              }}
              className="space-y-4"
            >
              <InputBox
                type="text"
                name="email"
                label="Email (or Owner name)"
                size="md"
                value={loginData.email}
                onChange={handleChange}
                required
                autoComplete="username"
              />
              <InputBox
                type="password"
                name="password"
                label="Password"
                size="md"
                value={loginData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="h-4 w-4" /> Keep me signed in
                </label>
                <Link
                  href="#"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <p className="text-center text-sm text-slate-600">
                New here?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-blue-700 hover:text-blue-800"
                >
                  Create a free account
                </Link>
              </p>
            </form>
          </section>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              Why create an account?
            </div>
            <ul className="mt-3 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-0.5 text-blue-700">✓</span>
                Save jobs and track applications
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-blue-700">✓</span>
                Get curated recommendations
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-blue-700">✓</span>
                One-click apply with your profile
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">
                Trusted by job seekers
              </div>
              <div className="mt-2 text-sm text-slate-600">
                2M+ candidates use JobSearch to discover roles and apply.
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
};

export default Login;