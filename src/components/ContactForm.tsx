"use client";

import { useState } from "react";
import { DownloadCapabilityButton } from "@/components/DownloadCapabilityButton";
import { siteConfig } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: String(formData.get("firstName") ?? "").trim(),
      lastName: String(formData.get("lastName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      serviceLevel: String(formData.get("serviceLevel") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      companyWebsite: String(formData.get("companyWebsite") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send your message.");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "We couldn't submit your message right now. Please try again or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
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
          htmlFor="serviceLevel"
          className="block text-sm font-medium text-slate-700"
        >
          Interested Monthly Accounting Services level
        </label>
        <select
          id="serviceLevel"
          name="serviceLevel"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm focus:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-800"
        >
          <option value="">Not sure yet</option>
          <option value="starter">Starter — Starting at $700/month</option>
          <option value="growth">Growth — Starting at $1,000/month</option>
          <option value="controller">Controller — Starting at $1,500/month</option>
        </select>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input
          type="text"
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
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

      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-lg bg-navy-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : `Contact ${siteConfig.brandName}`}
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
            Location
          </p>
          <p className="mt-1 block font-medium text-navy-800">
            {siteConfig.location}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Capability Statement
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Review our one-page overview of services and qualifications.
          </p>
          <div className="mt-3">
            <DownloadCapabilityButton variant="outline" className="w-full sm:w-auto" />
          </div>
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
