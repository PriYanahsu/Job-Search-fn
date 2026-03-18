"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Get in touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Have questions about our platform or need help with your job search? We're here to help you every step of the way.
            </p>

            <dl className="mt-10 space-y-4 text-base leading-7 text-slate-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg className="h-7 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </dt>
                <dd>
                  <a className="hover:text-slate-900" href="mailto:support@jobsearch.demo">
                    support@jobsearch.demo
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <svg className="h-7 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </dt>
                <dd>123 Innovation Drive, Tech City, TC 94103</dd>
              </div>
            </dl>
          </div>

          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">Message Received!</h2>
                <p className="mt-2 text-slate-600">We'll get back to you as soon as possible, usually within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-semibold text-blue-600 hover:text-blue-500"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-slate-900">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      required
                      className="mt-2.5 block w-full rounded-xl border border-slate-200 px-3.5 py-2 text-slate-900 shadow-sm transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-slate-900">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      required
                      className="mt-2.5 block w-full rounded-xl border border-slate-200 px-3.5 py-2 text-slate-900 shadow-sm transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2.5 block w-full rounded-xl border border-slate-200 px-3.5 py-2 text-slate-900 shadow-sm transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="mt-2.5 block w-full rounded-xl border border-slate-200 px-3.5 py-2 text-slate-900 shadow-sm transition-all focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15 sm:text-sm sm:leading-6"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-600/20"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
