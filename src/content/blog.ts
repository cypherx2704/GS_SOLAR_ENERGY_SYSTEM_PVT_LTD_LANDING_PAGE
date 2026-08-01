/**
 * Blog articles — [PLACEHOLDER]. Titles reflect the blueprint's topic list;
 * bodies are sample/outline content marked `placeholder: true` (PLAN §16).
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingMinutes: number;
  date: string; // ISO
  cover: string | null;
  body: string;
  placeholder?: boolean;
};

const draft = (
  slug: string,
  title: string,
  category: string,
  excerpt: string,
): Post => ({
  slug,
  title,
  excerpt,
  category,
  readingMinutes: 5,
  date: "2025-01-01",
  cover: null,
  body: "This is placeholder article content. The full article will be written and published here.",
  placeholder: true,
});

export const posts: Post[] = [
  draft("solar-subsidy-guide", "A Simple Guide to Solar Subsidy in India", "Guides", "How PM Surya Ghar works and how to claim it — explained step by step."),
  draft("how-solar-works", "How Solar Energy Actually Works", "Basics", "From sunlight to the socket — the journey of a solar electron, minus the jargon."),
  draft("residential-vs-commercial", "Residential vs Commercial Solar", "Basics", "How sizing, tariffs and payback differ between homes and businesses."),
  draft("maintenance-tips", "5 Maintenance Tips to Keep Solar Performing", "Tips", "Small habits that protect your generation for decades."),
  draft("government-schemes", "Government Solar Schemes You Should Know", "Guides", "Beyond PM Surya Ghar — the incentives worth understanding."),
  draft("solar-myths", "Solar Myths, Busted", "Basics", "\"It doesn't work in monsoon\" and other things people get wrong."),
];

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
