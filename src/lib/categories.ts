import type { CategorySlug } from "@/types/article";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short blurb used in the footer and category headers */
  tagline: string;
  /** Tailwind utility classes used for the category's accent badge */
  badgeClass: string;
}

/**
 * Order here is intentional and drives the homepage section order and nav.
 * Brass is the site's primary interactive color (buttons, links), so badges
 * draw on the remaining Indiana palette (Hoosier navy, limestone bronze,
 * harvest rust) plus rose for scannability across five sections.
 */
export const CATEGORIES: Category[] = [
  {
    slug: "education",
    name: "Education",
    tagline:
      "Indiana University, Purdue, and the schools shaping the Hoosier State's next generation.",
    badgeClass: "bg-[#1c2f52]/10 text-[#1c2f52]",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline:
      "IU Health, Ascension St. Vincent, and the systems keeping Indiana well.",
    badgeClass: "bg-[#7a2331]/10 text-[#7a2331]",
  },
  {
    slug: "business-leaders",
    name: "Business Leaders",
    tagline:
      "The entrepreneurs and executives driving Indiana forward, from Indianapolis to Fort Wayne.",
    badgeClass: "bg-[#6e6a5e]/15 text-[#4a473e]",
  },
  {
    slug: "finance-economy",
    name: "Finance & Economy",
    tagline:
      "Manufacturing, logistics, and the economic pulse of the Crossroads of America.",
    badgeClass: "bg-[#8a5a2a]/15 text-[#5f3d1c]",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    tagline:
      "Spas, self-care, and the wellness rituals trending from Carmel to Bloomington.",
    badgeClass: "bg-rose-500/10 text-rose-700",
  },
];

export function getCategoryName(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export function getCategoryBadgeClass(slug: string): string {
  return (
    CATEGORIES.find((c) => c.slug === slug)?.badgeClass ??
    "bg-slate-500/10 text-slate-700"
  );
}
