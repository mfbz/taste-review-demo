import { ButtonLink } from "@/components/button-link";
import { FEATURES } from "@/data/fernhill";

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-page flex-col gap-8 px-5 py-20 sm:px-8 sm:py-28">
        <h1 className="max-w-3xl text-display">Plan the garden before you dig</h1>
        <p className="max-w-xl text-muted">
          Draw your plot to scale, plant what grows well together, and sow on dates that match your
          own frost. One plan, every season.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/pricing">Start planning</ButtonLink>
          <ButtonLink href="/pricing" variant="secondary">
            See pricing
          </ButtonLink>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2">
        <ul className="mx-auto grid max-w-page gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <li key={feature.title} className="flex flex-col gap-3">
              <h2 className="text-subtitle">{feature.title}</h2>
              <p className="text-muted">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-page px-5 py-20 sm:px-8">
        <figure className="max-w-3xl border-l-2 border-moss pl-6">
          <blockquote className="font-serif text-title">
            “The first year I didn’t plant the tomatoes in the shade.”
          </blockquote>
          <figcaption className="mt-4 text-small text-muted">Ines, allotment 14B</figcaption>
        </figure>
      </section>
    </>
  );
}
