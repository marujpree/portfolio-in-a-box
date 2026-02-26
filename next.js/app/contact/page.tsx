export const metadata = {
  title: "Contact",
  description: "Get in touch",
};

export default function ContactPage() {
  return (
    <div className="page-content mx-auto max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <div className="mb-8 inline-block rounded-2xl bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
        Say hi
      </div>
      <h1 className="font-serif text-4xl font-normal tracking-tight text-[var(--foreground)] md:text-5xl">
        Contact
      </h1>
      <p className="mt-6 text-lg text-[var(--muted)]">
        We&apos;ll work on this later. Get in touch when the section is ready.
      </p>
      <div className="mt-12 rounded-2xl border-2 border-dashed border-[var(--accent)]/40 bg-[var(--accent-soft)]/30 p-10 text-center">
        <p className="font-serif text-xl font-normal text-[var(--foreground)]">
          Coming soon
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Form or contact details will go here.
        </p>
      </div>
    </div>
  );
}
