"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/#sureç", label: "Süreç" },
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#portfolyo", label: "Portfolyo" },
  { href: "/#sss", label: "SSS" },
  { href: "/#iletisim", label: "İletişim" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-ink/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-accent text-ink font-display font-semibold text-lg">
            A
            <span className="absolute -right-0.5 -bottom-0.5 w-2 h-2 rounded-full bg-cream" />
          </span>
          <span className="font-display text-xl tracking-tight">atölye</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-cream/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-cream transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="/brief"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream text-ink text-sm font-medium hover:bg-accent transition-colors"
        >
          Brief gönder
          <span aria-hidden>→</span>
        </a>

        <button
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-border"
        >
          <span className="relative w-4 h-3">
            <span
              className={`absolute left-0 right-0 top-0 h-px bg-cream transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 right-0 bottom-0 h-px bg-cream transition-transform ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-ink/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg font-display"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/brief"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-accent text-ink font-medium"
            >
              Brief gönder →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
