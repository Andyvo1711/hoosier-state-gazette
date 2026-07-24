import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 border-b border-border py-5 sm:py-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="block">
            <span className="font-display block text-3xl font-black uppercase leading-none tracking-widest text-foreground sm:text-4xl lg:text-[2.75rem]">
              Hoosier State Gazette
            </span>
            <span className="mt-1.5 block h-[3px] w-24 bg-accent" />
          </Link>

          <form
            action="/search"
            method="GET"
            className="flex w-full max-w-xs items-center gap-2 md:w-auto"
          >
            <input
              type="search"
              name="q"
              placeholder="Search articles…"
              aria-label="Search articles"
              className="w-full rounded-sm border border-border bg-surface px-4 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
            >
              Search
            </button>
          </form>
        </div>

        <nav className="flex items-center gap-2 overflow-x-auto py-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="shrink-0 rounded-sm px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
