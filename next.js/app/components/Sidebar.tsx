"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

type SidebarProps = { open: boolean; onToggle: () => void };

export function Sidebar({ open: isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="sidebar-toggle fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] text-[var(--foreground)] shadow-sm transition-all hover:scale-105 hover:border-[var(--accent)] hover:shadow-md md:left-6 md:top-6"
      >
        <span className="text-xs font-semibold tracking-wide">{isOpen ? "Close" : "Menu"}</span>
      </button>

      <aside
        className="portfolio-sidebar fixed left-0 top-0 z-40 flex h-full w-[280px] flex-col border-r-2 border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] transition-transform duration-300 ease-out md:w-[320px]"
        data-open={isOpen}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="flex flex-1 flex-col px-6 pt-20 pb-6 md:pt-24">
          <Link
            href="/"
            className="mb-2 font-serif text-xl font-medium tracking-tight text-[var(--foreground)] hover:opacity-80 md:text-2xl"
          >
            Portfolio
          </Link>
          <p className="mb-6 text-sm font-medium text-[var(--accent)]">
            Let&apos;s work together!
          </p>

          <nav className="flex flex-col gap-1" aria-label="Main">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href || (href === "/about" && pathname === "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[var(--sidebar-active)] text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:bg-[var(--sidebar-hover)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-[var(--accent)]"
                      aria-hidden
                    />
                  )}
                  <span className={isActive ? "pl-1" : ""}>{label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-xl border-2 border-dashed border-[var(--sidebar-border)] bg-[var(--background)]/50 px-4 py-3 text-xs text-[var(--muted)]">
            <p className="font-semibold text-[var(--foreground)]">Version</p>
            <p className="mt-0.5">2025 © Edition</p>
          </div>
        </div>
      </aside>
    </>
  );
}
