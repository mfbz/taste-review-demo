export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-10 text-small text-muted sm:px-8">
        <p className="font-serif text-body text-ink">Fernhill</p>
        <p>
          A fictional garden planner, built to demo{" "}
          <a href="https://github.com/mfbz/taste-review" className="text-ink underline">
            taste review
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
