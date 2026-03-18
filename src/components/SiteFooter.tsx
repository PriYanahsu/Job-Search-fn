import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-sm font-semibold text-slate-900">JobSearch</div>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            A clean job search experience: search smarter, compare roles faster,
            and apply with less friction.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Explore</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-slate-600 hover:text-slate-900" href="/">
                Search jobs
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 hover:text-slate-900"
                href="/#companies"
              >
                Companies
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 hover:text-slate-900"
                href="/#services"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Account</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="text-slate-600 hover:text-slate-900" href="/login">
                Login
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 hover:text-slate-900"
                href="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} JobSearch. All rights reserved.</span>
          <div className="flex gap-4">
            <Link className="hover:text-slate-700" href="#">
              Privacy
            </Link>
            <Link className="hover:text-slate-700" href="#">
              Terms
            </Link>
            <Link className="hover:text-slate-700" href="#">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

