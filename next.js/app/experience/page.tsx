export const metadata = {
  title: "Experience",
  description: "Work experience and timeline",
};

const timeline = [
  {
    period: "Now",
    title: "Your Current Role",
    org: "Company Name",
    description: "Brief description of what you do and key outcomes.",
  },
  {
    period: "2024",
    title: "Previous Role",
    org: "Previous Company",
    description: "What you built or led here.",
  },
  {
    period: "2022",
    title: "Earlier Role",
    org: "Earlier Company",
    description: "Highlights and learnings.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="page-content mx-auto max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <div className="mb-8 inline-block rounded-2xl bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
        The journey so far
      </div>
      <h1 className="font-serif text-4xl font-normal tracking-tight text-[var(--foreground)] md:text-5xl">
        Where I&apos;ve Been
      </h1>
      <div className="mt-12 space-y-0">
        {timeline.map((item, i) => (
          <article
            key={i}
            className="group relative border-l-2 border-[var(--sidebar-border)] py-8 pl-8 pr-4 transition-colors first:pt-0 last:pb-0 hover:border-[var(--accent)]/40"
          >
            <span
              className="absolute -left-[9px] top-8 h-4 w-4 rounded-full border-2 border-[var(--background)] bg-[var(--timeline-dot)] shadow-sm transition-transform group-hover:scale-125 first:top-0"
              aria-hidden
            />
            <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
              {item.period}
            </p>
            <h2 className="mt-1 font-serif text-xl font-normal text-[var(--foreground)]">
              {item.title}
            </h2>
            <p className="text-sm font-medium text-[var(--muted)]">@{item.org}</p>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
