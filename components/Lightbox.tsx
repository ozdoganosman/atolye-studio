"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onNavigate: (project: Project) => void;
};

export function Lightbox({ project, projects, onClose, onNavigate }: Props) {
  const index = project ? projects.findIndex((p) => p.slug === project.slug) : -1;

  const goPrev = useCallback(() => {
    if (index < 0) return;
    const next = projects[(index - 1 + projects.length) % projects.length];
    onNavigate(next);
  }, [index, projects, onNavigate]);

  const goNext = useCallback(() => {
    if (index < 0) return;
    const next = projects[(index + 1) % projects.length];
    onNavigate(next);
  }, [index, projects, onNavigate]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose, goPrev, goNext]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <button
        aria-label="Kapat"
        onClick={onClose}
        className="absolute top-5 right-5 lg:top-8 lg:right-8 w-12 h-12 grid place-items-center rounded-full border border-border bg-ink/70 text-cream hover:bg-accent hover:border-accent hover:text-ink transition-colors z-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      <button
        aria-label="Önceki"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full border border-border bg-ink/70 text-cream hover:bg-accent hover:border-accent hover:text-ink transition-colors z-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 1L3 7L9 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        aria-label="Sonraki"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center rounded-full border border-border bg-ink/70 text-cream hover:bg-accent hover:border-accent hover:text-ink transition-colors z-10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 1L11 7L5 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className="absolute inset-0 flex flex-col lg:flex-row items-stretch p-4 lg:p-16 gap-6 lg:gap-12 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 min-h-[50vh] lg:min-h-0 rounded-2xl overflow-hidden bg-surface">
          <Image
            key={project.slug}
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-contain animate-fade-in"
            priority
          />
        </div>

        <aside className="lg:w-80 shrink-0 flex flex-col text-cream/90">
          <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-accent text-ink text-[10px] uppercase tracking-[0.2em] mb-5">
            {project.category}
          </span>
          <h3 className="font-display text-3xl lg:text-4xl leading-tight">
            {project.title}
          </h3>

          <dl className="mt-8 space-y-4 text-sm">
            <Row label="Müşteri" value={project.client} />
            <Row label="Konum" value={project.location} />
            <Row label="Yıl" value={String(project.year)} />
            <Row label="Etiketler" value={project.tags.join(", ")} />
          </dl>

          <p className="mt-8 text-sm text-cream/80 leading-relaxed">
            {project.summary ?? "Bu proje hakkında ayrıntılı bilgi, görsel galerisi ve süreç hikayesi için detay sayfasını ziyaret edin."}
          </p>

          <a
            href={`/projeler/${project.slug}`}
            className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-ink font-medium hover:bg-accent-2 transition-colors text-sm"
          >
            Proje detayını gör
            <span aria-hidden>→</span>
          </a>

          <div className="mt-auto pt-8 flex items-center justify-between text-xs text-muted">
            <span>{index + 1} / {projects.length}</span>
            <span className="hidden lg:inline">← → tuşlarıyla gezinin · Esc ile kapatın</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-border">
      <dt className="text-muted uppercase tracking-[0.15em] text-[10px]">{label}</dt>
      <dd className="text-cream text-right">{value}</dd>
    </div>
  );
}
