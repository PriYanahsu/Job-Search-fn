"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const services = [
  {
    id: 1,
    title: "Resume Review",
    price: "$49",
    tag: "Most Popular",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: "Get professional feedback on your resume from industry experts to stand out from the crowd.",
    features: ["AATS optimization", "Keyword targeting", "Personalized feedback", "2-day turnaround"],
  },
  {
    id: 2,
    title: "Interview Prep",
    price: "$99",
    tag: "Essential",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    description: "Mock interviews tailored to your role, helping you build confidence and master common questions.",
    features: ["1-on-1 session", "Role-specific mocks", "Behavioral questions", "Confidence tips"],
  },
  {
    id: 3,
    title: "Career Coaching",
    price: "$149",
    tag: "Premium",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Long-term career guidance to help you navigate transitions, promotions, and industry shifts.",
    features: ["Personalized roadmap", "Monthly check-ins", "Networking strategies", "Salary negotiation"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
            Level Up Your Career
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Professional services designed to give you a competitive edge in your job search and beyond.
          </p>
        </div>

        <section className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="relative flex flex-col rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              {service.tag && (
                <div className="absolute -top-3 left-8 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  {service.tag}
                </div>
              )}
              
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                {service.icon}
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-slate-100">{service.title}</h2>
              <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-slate-100">{service.price}</p>
              
              <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {service.description}
              </p>

              <ul className="mt-8 grow space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-10 h-12 w-full rounded-xl bg-slate-900 text-sm font-bold text-white transition-all hover:bg-slate-800 focus:ring-4 focus:ring-slate-900/15 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
                Get Started
              </button>
            </div>
          ))}
        </section>

        <section className="mt-24 rounded-3xl bg-blue-600 p-8 text-center text-white md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">Not sure which service you need?</h2>
          <p className="mt-3 text-blue-100">Schedule a free 15-minute consultation with one of our career experts.</p>
          <button className="mt-8 rounded-xl bg-white px-8 py-3 text-sm font-bold text-blue-600 shadow-lg shadow-blue-700/20 transition-all hover:bg-blue-50">
            Book Free Call
          </button>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
