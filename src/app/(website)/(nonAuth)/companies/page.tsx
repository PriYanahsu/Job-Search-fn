"use client";

import Link from "next/link";
import { useState } from "react";

const companies = [
  {
    id: 1,
    name: "TechGiant",
    logo: "TG",
    color: "bg-blue-600",
    industry: "Cloud & Software",
    hq: "San Francisco, CA",
    openJobs: 42,
    employees: "10,000+",
    description: "Empowering the world through scalable cloud solutions and innovative software engineering.",
  },
  {
    id: 2,
    name: "FinFlow",
    logo: "FF",
    color: "bg-emerald-600",
    industry: "Fintech",
    hq: "New York, NY",
    openJobs: 15,
    employees: "500-1,000+",
    description: "Revolutionizing digital banking and investment platforms for a more accessible financial future.",
  },
  {
    id: 3,
    name: "PureData",
    logo: "PD",
    color: "bg-indigo-600",
    industry: "Data Analytics",
    hq: "Austin, TX",
    openJobs: 28,
    employees: "1,000-5,000",
    description: "Leveraging AI and machine learning to turn vast data into actionable business intelligence.",
  },
  {
    id: 4,
    name: "GreenWave",
    logo: "GW",
    color: "bg-teal-600",
    industry: "Climate Tech",
    hq: "Denver, CO",
    openJobs: 12,
    employees: "200-500",
    description: "Developing sustainable energy solutions to combat climate change and build a greener world.",
  },
];

export default function CompaniesPage() {
  const [search, setSearch] = useState("");

  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.industry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <main className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-4xl">
              Explore Top Companies
            </h1>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
              Discover industry leaders and find your next workplace culture that fits.
            </p>
          </div>
          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Search companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm shadow-sm transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCompanies.map((company) => (
            <div key={company.id} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className={`${company.color} flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold text-white`}>
                  {company.logo}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100">
                    {company.name}
                  </h2>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{company.industry}</p>
                </div>
              </div>
              
              <div className="mt-6 grow">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {company.description}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 dark:border-slate-800">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">HQ</p>
                  <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">{company.hq}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Employees</p>
                  <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">{company.employees}</p>
                </div>
              </div>

              <Link 
                href={`/?q=${encodeURIComponent(company.name)}`}
                className="mt-6 flex items-center justify-center rounded-lg bg-blue-50 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
              >
                View {company.openJobs} Open Jobs
              </Link>
            </div>
          ))}
        </section>

        {filteredCompanies.length === 0 && (
          <div className="py-20 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">No companies found</h3>
            <p className="mt-2 text-slate-500 dark:text-slate-400">Try searching for a different name or industry.</p>
          </div>
        )}
      </main>
    </div>
  );
}
