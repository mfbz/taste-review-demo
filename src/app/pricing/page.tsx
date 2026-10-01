import type { Metadata } from "next";
import Link from "next/link";

import { PLANS, PRICING_FAQ } from "@/data/fernhill";

export const metadata: Metadata = {
  title: "Pricing · Fernhill",
  description: "Free for one garden, then sized to your plot.",
};

export default function Pricing() {
  return (
    <div className="mx-auto flex max-w-page flex-col gap-16 px-5 py-20 sm:px-8">
      <header className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <span className="rounded-full bg-[#ede9fe] px-4 py-1 text-[13px] font-semibold text-[#6d28d9]">
          🌱 New plans
        </span>
        <h1 className="font-sans text-[44px] leading-tight font-extrabold tracking-tight">
          Simple, transparent pricing
        </h1>
        <p className="text-[18px] text-[#6b7280]">Free for one garden, then sized to your plot.</p>
      </header>

      <ul className="grid gap-8 md:grid-cols-3">
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className={`flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-xl ${
              plan.featured ? "ring-2 ring-[#8b5cf6] md:-translate-y-3" : ""
            }`}
          >
            <div className="flex flex-col gap-2">
              <h2 className="font-sans text-[22px] font-bold">{plan.name}</h2>
              <p className="text-[14px] text-[#6b7280]">{plan.blurb}</p>
            </div>
            <p className="flex items-baseline gap-2">
              <span className="font-sans text-[40px] font-extrabold">{plan.price}</span>
              <span className="text-[14px] text-[#6b7280]">{plan.cadence}</span>
            </p>
            <ul className="flex flex-1 flex-col gap-3 text-[15px]">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
            <Link
              href="/"
              className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#db2777] px-6 py-3 text-center font-semibold text-white shadow-lg hover:opacity-90"
            >
              Get {plan.name}
            </Link>
          </li>
        ))}
      </ul>

      <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <h2 className="text-center font-sans text-[32px] font-extrabold">FAQ</h2>
        <dl className="flex flex-col gap-4">
          {PRICING_FAQ.map((item) => (
            <div key={item.question} className="rounded-2xl bg-white p-6 shadow-md">
              <dt className="font-semibold">{item.question}</dt>
              <dd className="mt-2 text-[#6b7280]">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
