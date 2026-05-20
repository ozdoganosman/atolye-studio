import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full bg-accent/20 blur-[160px]" />
        <div className="absolute top-1/2 -right-40 w-[520px] h-[520px] rounded-full bg-clay/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-muted mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            İç mimari & fuar standı stüdyosu — 2014'ten beri
          </div>

          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight">
            Mekânı bir{" "}
            <span className="italic text-accent">deneyime</span>
            <br />
            dönüştürüyoruz.
          </h1>

          <p className="mt-8 text-lg text-cream/75 max-w-xl leading-relaxed">
            Konsept'ten anahtar teslime — iç mimari uygulamaları ve fuar standı
            kurulumlarını tek bir ekipten yürütüyoruz. Çizdiğimiz her detayı
            kendi atölyemizde üretiyoruz.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#portfolyo"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-accent text-ink font-medium hover:bg-accent-2 transition-colors"
            >
              Portfolyoyu gör
              <span className="grid place-items-center w-6 h-6 rounded-full bg-ink text-cream group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#sureç"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-cream hover:border-cream/50 transition-colors"
            >
              Süreci incele
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "180+", v: "Tamamlanan proje" },
              { k: "42", v: "Uluslararası fuar" },
              { k: "12 yıl", v: "Atölye tecrübesi" }
            ].map((s) => (
              <div key={s.v} className="border-l border-border pl-4">
                <dt className="font-display text-3xl text-cream">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted leading-snug">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface">
            <Image
              src="/process/step-4-kitchen.jpg"
              alt="Endüstriyel mutfak — anahtar teslim uygulama"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 scrim-bottom" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cream/70">
                  Son teslim
                </p>
                <p className="font-display text-xl mt-1">Restoran Mutfak Hattı</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-ink/70 backdrop-blur text-xs border border-border">
                2025
              </span>
            </div>
          </div>

          <div className="hidden lg:block absolute -left-16 top-12 w-44 aspect-square rounded-2xl overflow-hidden border-4 border-ink shadow-2xl rotate-[-4deg]">
            <Image
              src="/process/step-2-store.jpg"
              alt="Konsept aşaması 3D render"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>

          <div className="hidden lg:flex absolute -right-4 -bottom-6 items-center gap-3 px-4 py-3 rounded-full bg-ink border border-border shadow-2xl">
            <span className="font-display text-2xl text-accent leading-none">4</span>
            <span className="text-xs text-muted">aşamada teslim</span>
          </div>
        </div>
      </div>
    </section>
  );
}
