export const metadata = {
  title: "Projects",
  description: "Projects and work",
};

const projects = [
  {
    title: "Project One",
    description: "A short description of the project and what it does.",
    tags: ["Next.js", "TypeScript", "Design"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "Another project with tech stack and impact.",
    tags: ["React", "API", "Open Source"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "Brief summary and link to live or repo.",
    tags: ["Web3", "Smart Contracts", "Rust"],
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="page-content mx-auto max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <div className="mb-8 inline-block rounded-2xl bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
        Selected work
      </div>
      <h1 className="font-serif text-4xl font-normal tracking-tight text-[var(--foreground)] md:text-5xl">
        Projects
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)]">
        Side projects and things I&apos;ve shipped.
      </p>
      <ul className="mt-12 grid gap-6">
        {projects.map((project, i) => (
          <li key={i}>
            <a
              href={project.href}
              className="group block rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-lg md:p-8"
            >
              <h2 className="font-serif text-xl font-normal text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                {project.title}
              </h2>
              <p className="mt-2 leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
