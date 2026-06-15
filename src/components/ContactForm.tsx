"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-navy-900">
          Thank you for reaching out
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          We&apos;ve received your message and will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-navy-900">
        Schedule a Consultation
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Fill out the form below and we&apos;ll be in touch shortly.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-slate-700"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm focus:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-800"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-slate-700"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm focus:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-800"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm focus:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-800"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-slate-700"
        >
          Company name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm focus:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-800"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="plan"
          className="block text-sm font-medium text-slate-700"
        >
          Interested plan
        </label>
        <select
          id="plan"
          name="plan"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm focus:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-800"
        >
          <option value="">Not sure yet</option>
          <option value="essential">Essential — $700/mo</option>
          <option value="plus">Plus — $1,000/mo</option>
          <option value="controller">Controller — $1,500/mo</option>
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700"
        >
          Tell us about your business
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What accounting challenges are you facing? What does your current setup look like?"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm focus:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-800"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-700 sm:w-auto"
      >
        Contact Crux CPA
      </button>
    </form>
  );
}

export function ContactSidebar() {
  return (
    <div className="lg:col-span-2">
      <h2 className="font-serif text-2xl font-semibold text-navy-900">
        Get in touch
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        Whether you&apos;re ready to get started or just exploring options,
        we&apos;re happy to answer your questions. No pressure, no sales pitch
        — just a straightforward conversation about your business.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Email
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-1 block font-medium text-navy-800 hover:text-navy-700"
          >
            {siteConfig.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Phone
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="mt-1 block font-medium text-navy-800 hover:text-navy-700"
          >
            {siteConfig.phone}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            What to expect
          </p>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              30-minute discovery call
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Review of your current accounting setup
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Custom recommendation and pricing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
