"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects, type Category } from "@/lib/projects";

const categories: Category[] = ["Hepsi", "İç Mimari", "Fuar & Stand"];

export function Portfolio() {
  const [active, setActive] = useState<Category>("Hepsi");

  const filtered = useMemo(
    () => (active === "Hepsi" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="portfolyo" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Seçili işler
            </p>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
              Bazıları yerinde,{" "}
              <span className="italic text-cream/60">bazıları sökülmüş.</span>
              <br />
              Hepsi atölyemizden çıktı.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  active === c
                    ? "bg-accent text-ink border-accent"
                    : "border-border text-cream/80 hover:border-cream/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[320px] lg:auto-rows-[380px]">
          {filtered.map((p, i) => (
            <a
              key={p.slug}
              href="#"
              className={`group relative overflow-hidden rounded-2xl bg-surface border border-border hover-tilt ${
                p.span === "wide" ? "md:col-span-2" : ""
              } ${p.span === "tall" ? "lg:row-span-2" : ""}`}
              style={{
                animation: `rise 0.7s cubic-bezier(0.2,0.65,0.2,1) ${i * 60}ms both`
              }}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90" />

              <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                <span className="px-2.5 py-1 rounded-full bg-ink/70 backdrop-blur border border-border text-[10px] uppercase tracking-[0.15em] text-cream/80">
                  {p.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-ink/70 backdrop-blur border border-border text-[10px] text-cream/80">
                  {p.year}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <p className="text-xs text-cream/60 mb-1">
                  {p.client} · {p.location}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl leading-tight">
                  {p.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.15em] text-cream/70 px-2 py-0.5 border border-border rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 lg:top-auto lg:bottom-6 lg:right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-accent text-ink">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-cream/80 hover:border-cream/50 hover:text-cream transition-colors text-sm"
          >
            Tüm projeleri gör
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
