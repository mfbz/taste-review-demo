import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { NAV } from "@/data/fernhill";

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="font-serif text-subtitle font-semibold">
          Fernhill
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-small text-muted hover:text-ink sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/pricing">Start planning</ButtonLink>
        </nav>
      </div>
    </header>
  );
}
