import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { PLANS, PRICING_FAQ } from "@/data/fernhill";

export const metadata: Metadata = {
  title: "Pricing · Fernhill",
  description: "Free for one garden, then sized to your plot.",
};

export default function Pricing() {
  return (
    <div className="mx-auto flex max-w-page flex-col gap-16 px-5 py-20 sm:px-8">
      <header className="flex max-w-2xl flex-col gap-4">
        <h1 className="text-display">Pricing</h1>
        <p className="text-muted">Free for one garden, then sized to your plot.</p>
      </header>

      <ul className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className={`flex flex-col gap-6 rounded-sm border bg-paper p-6 ${
              plan.featured ? "border-moss" : "border-line"
            }`}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-subtitle">{plan.name}</h2>
              <p className="text-small text-muted">{plan.blurb}</p>
            </div>
            <p className="flex items-baseline gap-2">
              <span className="font-serif text-title">{plan.price}</span>
              <span className="text-small text-muted">{plan.cadence}</span>
            </p>
            <ul className="flex flex-1 flex-col gap-2 border-t border-line pt-4 text-small">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <ButtonLink href="/" variant={plan.featured ? "primary" : "secondary"}>
              Choose {plan.name}
            </ButtonLink>
          </li>
        ))}
      </ul>

      <section className="flex max-w-3xl flex-col gap-6">
        <h2 className="text-title">Questions</h2>
        <dl className="flex flex-col">
          {PRICING_FAQ.map((item) => (
            <div key={item.question} className="flex flex-col gap-2 border-t border-line py-5">
              <dt className="font-medium">{item.question}</dt>
              <dd className="text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
