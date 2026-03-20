"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAccessToken, getRole, type AuthRole, clearAccessToken, clearUserId, clearRole } from "@/lib/authStorage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "text-sm font-medium transition-colors",
        active
          ? "text-slate-900 dark:text-slate-100"
          : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100",
      ].join(" ")}
    >
      {label}
    </Link>
  );
};

export function SiteHeader() {
  const [authed, setAuthed] = useState(() =>
    typeof window !== "undefined" ? !!getAccessToken() : false,
  );
  const [role, setRole] = useState<AuthRole | null>(() =>
    typeof window !== "undefined" ? getRole() : null,
  );

  const router = useRouter();

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "token") setAuthed(!!e.newValue);
      if (e.key === "role") setRole(getRole());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    clearAccessToken();
    clearUserId();
    clearRole();
    setAuthed(false);
    setRole(null);
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-600 text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 7h12a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13h6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              JobSearch
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/" label="Jobs" />
            <NavLink href="/companies" label="Companies" />
            <NavLink href="/services" label="Services" />
            {authed && role === "owner" && <NavLink href="/add-job" label="Post a job" />}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {!authed && (
            <>
              <Link
                href="/login"
                className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 md:inline-flex"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
          {authed && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-2 dark:border-slate-800 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto">
          <NavLink href="/" label="Jobs" />
          <NavLink href="/companies" label="Companies" />
          <NavLink href="/services" label="Services" />
          {authed && role === "owner" && <NavLink href="/add-job" label="Post a job" />}
          <NavLink href="/contact" label="Contact" />
        </div>
      </div>
    </header>
  );
}

