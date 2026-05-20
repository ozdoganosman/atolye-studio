import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getRelatedProjects, projects } from "@/lib/projects";
import { BeforeAfter } from "@/components/BeforeAfter";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Proje bulunamadı — Furnuovo" };
  return {
    title: `${p.title} — Furnuovo`,
    description: p.summary,
    openGraph: {
      title: p.title,
      description: p.summary,
      images: [{ url: p.image }]
    }
  };
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const related = getRelatedProjects(slug);

  return (
    <article>
      <section className="relative pt-24 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/#portfolyo"
            className="inline-flex items-center gap-2 text-xs text-muted hover:text-cream transition-colors mb-8"
          >
            <span aria-hidden>←</span> Tüm projeler
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-ink text-[10px] uppercase tracking-[0.2em] font-medium mb-5">
                {p.category}
              </span>
              <h1 className="font-display text-4xl lg:text-6xl leading-[1.02]">
                {p.title}
              </h1>
              <p className="mt-6 text-lg text-cream/75 max-w-xl leading-relaxed">
                {p.summary}
              </p>
            </div>

            <dl className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 lg:pl-8 lg:border-l lg:border-border">
              <Meta label="Müşteri" value={p.client} />
              <Meta label="Konum" value={p.location} />
              <Meta label="Yıl" value={String(p.year)} />
              {p.area && <Meta label="Alan" value={p.area} />}
              {p.duration && <Meta label="Süre" value={p.duration} />}
              <Meta label="Etiket" value={p.tags.join(", ")} />
            </dl>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-12">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-surface border border-border">
            <Image
              src={p.image}
              alt={p.title}
              fill
              priority
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Brief
            </p>
            <p className="text-cream/85 leading-relaxed text-lg">{p.brief}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Yaklaşım
            </p>
            <p className="text-cream/85 leading-relaxed text-lg">{p.approach}</p>
          </div>
        </div>

        {p.services && p.services.length > 0 && (
          <div className="mt-16 lg:mt-20 mx-auto max-w-5xl px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-5">
              Bu projede üstlenilen iş
            </p>
            <div className="flex flex-wrap gap-2">
              {p.services.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full border border-border bg-surface text-sm text-cream/85"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {p.beforeAfter && (
        <section className="py-12 lg:py-16 bg-ink-2 border-y border-border">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="text-center mb-8 lg:mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                Önce / sonra
              </p>
              <h2 className="font-display text-3xl lg:text-4xl">
                Sürükleyin — dönüşümü görün
              </h2>
            </div>
            <BeforeAfter
              before={p.beforeAfter.before}
              after={p.beforeAfter.after}
              labelBefore={p.beforeAfter.labelBefore}
              labelAfter={p.beforeAfter.labelAfter}
              alt={`${p.title} — önce/sonra`}
            />
          </div>
        </section>
      )}

      {p.gallery.length > 1 && (
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Galeri
            </p>
            <h2 className="font-display text-3xl lg:text-4xl mb-10 lg:mb-14">
              Konsept'ten teslime{" "}
              <span className="italic text-cream/60">tüm aşamalar.</span>
            </h2>

            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              {p.gallery.map((src, i) => {
                const colSpan = i === 0 ? "col-span-12 lg:col-span-8" : "col-span-6 lg:col-span-4";
                const aspect = i === 0 ? "aspect-[16/10]" : "aspect-[4/3]";
                return (
                  <div
                    key={src}
                    className={`relative ${colSpan} ${aspect} rounded-2xl overflow-hidden bg-surface border border-border group`}
                  >
                    <Image
                      src={src}
                      alt={`${p.title} — görsel ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {p.testimonial && (
        <section className="py-20 lg:py-28 bg-ink-2 border-y border-border">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <svg
              aria-hidden
              width="48"
              height="40"
              viewBox="0 0 36 28"
              className="text-accent mx-auto mb-8"
              fill="currentColor"
            >
              <path d="M0 28V18C0 8 5 1.5 14 0L15 5C9 6 6 9 6 14H14V28H0ZM22 28V18C22 8 27 1.5 36 0L37 5C31 6 28 9 28 14H36V28H22Z" />
            </svg>
            <p className="font-display text-2xl lg:text-3xl text-cream leading-relaxed">
              "{p.testimonial.quote}"
            </p>
            <div className="mt-8 text-sm">
              <p className="text-cream font-medium">{p.testimonial.name}</p>
              <p className="text-muted text-xs mt-1">{p.testimonial.role}</p>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 mb-10 lg:mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                Benzer projeler
              </p>
              <h2 className="font-display text-3xl lg:text-4xl">
                Beraber çalıştığımız diğer markalar.
              </h2>
            </div>
            <Link
              href="/#portfolyo"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors"
            >
              Tümü <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/projeler/${r.slug}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border hover-tilt"
              >
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full bg-ink/70 backdrop-blur border border-border text-[10px] uppercase tracking-[0.15em] text-cream/80">
                    {r.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs text-cream/60">{r.client} · {r.year}</p>
                  <h3 className="font-display text-xl lg:text-2xl mt-1 leading-tight">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-surface border border-border p-10 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] -z-0" />
            <p className="relative font-display text-3xl lg:text-4xl">
              Benzer bir proje{" "}
              <span className="italic text-cream/60">aklınızda mı?</span>
            </p>
            <p className="relative mt-4 text-cream/70 max-w-md mx-auto">
              48 saat içinde ön çerçeve raporuyla dönüyoruz. İlk görüşme
              ücretsizdir.
            </p>
            <Link
              href="/brief"
              className="relative mt-8 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-accent text-ink font-medium hover:bg-accent-2 transition-colors"
            >
              Brief gönder
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-cream">{value}</dd>
    </div>
  );
}
