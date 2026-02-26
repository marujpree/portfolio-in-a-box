export const metadata = {
  title: "About",
  description: "About me",
};

export default function AboutPage() {
  return (
    <div className="page-content mx-auto max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <div className="mb-8 inline-block rounded-2xl bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
        Hello, I&apos;m here
      </div>
      <h1 className="font-serif text-4xl font-normal tracking-tight text-[var(--foreground)] md:text-5xl">
        About Me
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
        A short intro about you. You can describe your background, what you do,
        and what you care about—similar to the clean, editorial style of
        Bettina&apos;s portfolio.
      </p>
      <section className="mt-12 rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm md:p-8">
        <h2 className="font-serif text-2xl font-normal text-[var(--foreground)]">
          My Superpower
        </h2>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          Taking abstract ideas and turning them into tangible, scalable
          products that people actually want to use.
        </p>
      </section>
      <section className="mt-6 rounded-2xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm md:p-8">
        <h2 className="font-serif text-2xl font-normal text-[var(--foreground)]">
          Outside the IDE
        </h2>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">
          A few lines about your life outside work—hobbies, talks, community,
          or whatever you want to share.
        </p>
      </section>
    </div>
  );
}
