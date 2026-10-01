import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const BASE =
  "inline-flex h-11 items-center justify-center rounded-sm border px-6 text-small font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

// Flat moss fill or an ink outline: Fernhill's only two actions, with no shadow or gradient.
const VARIANTS = {
  primary: "border-moss bg-moss text-paper hover:border-moss-dark hover:bg-moss-dark active:bg-ink",
  secondary: "border-ink text-ink hover:bg-paper-2 active:bg-line",
} as const;

export function ButtonLink({ href, variant = "primary", children }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTS[variant]}`}>
      {children}
    </Link>
  );
}
