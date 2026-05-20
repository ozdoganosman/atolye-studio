import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Markanın global standartlarını koruyacak ama hızlı kurulup açılacak bir mağazaya ihtiyacımız vardı. Furnuovo, 7 haftalık takvime tek günlük sapma olmadan teslim etti.",
    name: "B. K.",
    title: "Operasyon Müdürü",
    company: "Pierre Cardin Türkiye"
  },
  {
    quote:
      "Mutfak hattını 5 hafta gibi sıkı bir takvime sığdırdılar ve hiçbir detay aksamadı. Davlumbazların paslanmaz çelik bağlantı kalitesi farkımızı sektörde konuşturuyor.",
    name: "Şef Aybüke D.",
    title: "Mutfak Şefi",
    company: "Atrium Restaurant Group"
  },
  {
    quote:
      "Milano fuarındaki standımız geçen yılki rakibimizin standına göre çok daha modern ve etkileyici oldu. Lojistik ve kurulumu da bizim adımıza yönettiler — biz sadece misafirlerimizle ilgilendik.",
    name: "Ece T.",
    title: "Marketing Lead",
    company: "Texintro Tekstil"
  }
];

const logos = [
  "PIERRE CARDIN",
  "BOYNER GRUP",
  "ATRIUM",
  "TEXINTRO",
  "VECTOR",
  "YUMI",
  "LUMEN",
  "NORTHWAVE"
];

export function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Referanslar
          </p>
          <h2 className="font-display text-3xl lg:text-5xl leading-[1.05]">
            Birlikte çalıştığımız{" "}
            <span className="italic text-cream/60">markalar ne diyor?</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 120}
              className="relative p-7 lg:p-8 rounded-3xl bg-surface border border-border flex flex-col"
            >
              <svg
                aria-hidden
                width="36"
                height="28"
                viewBox="0 0 36 28"
                className="text-accent/40 mb-5"
                fill="currentColor"
              >
                <path d="M0 28V18C0 8 5 1.5 14 0L15 5C9 6 6 9 6 14H14V28H0ZM22 28V18C22 8 27 1.5 36 0L37 5C31 6 28 9 28 14H36V28H22Z" />
              </svg>

              <p className="text-cream/90 leading-relaxed flex-1">
                "{t.quote}"
              </p>

              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid place-items-center w-11 h-11 rounded-full bg-ink-2 border border-border font-display text-accent text-base"
                >
                  {t.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <div className="text-sm">
                  <p className="text-cream font-medium">{t.name}</p>
                  <p className="text-muted text-xs">
                    {t.title} · {t.company}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 lg:mt-20 pt-10 border-t border-border">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted mb-6">
            Birlikte çalıştığımız markalardan
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:gap-x-14">
            {logos.map((l) => (
              <span
                key={l}
                className="font-display text-cream/40 hover:text-cream transition-colors text-lg lg:text-xl tracking-[0.15em]"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
