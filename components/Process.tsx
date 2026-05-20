import Image from "next/image";
import { Reveal } from "./Reveal";
import { StepIndicator } from "./StepIndicator";

const steps = [
  {
    n: "01",
    tag: "Brief & analiz",
    title: "Analiz ve Ön Değerlendirme",
    body:
      "Talebiniz uzman ekiplerimiz tarafından detaylı olarak analiz edilir; projenin teknik gereksinimleri ve genel çerçevesi hızlı bir şekilde tarafınıza raporlanır.",
    bullets: ["İhtiyaç görüşmesi", "Yerinde keşif", "Teknik fizibilite", "Ön çerçeve raporu"],
    eta: "1–3 gün",
    image: "/process/step-1-bench.jpg",
    imageAlt: "Ölçü çıkarılmış 3D ön model"
  },
  {
    n: "02",
    tag: "Konsept & görsel",
    title: "Projelendirme ve Görselleştirme",
    body:
      "Bütçenize uygun şekilde hazırlanan proje, 3D render ekibimiz tarafından modellenerek teslim aşamasındaki nihai görünümü tarafınızla paylaşılır. Onayınızın ardından detaylı maliyet tablosu sunulur.",
    bullets: ["Konsept & moodboard", "3D modelleme & render", "Malzeme paleti", "Detaylı maliyet tablosu"],
    eta: "1–3 hafta",
    image: "/process/step-2-store.jpg",
    imageAlt: "Mağaza iç mekan 3D render çalışması"
  },
  {
    n: "03",
    tag: "Atölye & saha",
    title: "Üretim ve Süreç Yönetimi",
    body:
      "Onaylanan proje, planlanan zaman çizelgesi doğrultusunda titizlikle uygulanır. Üretim sürecinin her aşamasında düzenli bilgilendirme sağlanarak şeffaf bir iş takibi sunulur.",
    bullets: ["Atölye üretimi", "Saha koordinasyonu", "Haftalık ilerleme raporu", "Kalite kontrol"],
    eta: "Plana göre",
    image: "/process/step-3-frame.jpg",
    imageAlt: "Atölyede metal konstrüksiyon üretimi"
  },
  {
    n: "04",
    tag: "Teslim",
    title: "Teslimat",
    body:
      "Tamamlanan iş, ön aşamada sunulan görsellere ve teknik şartnameye birebir uyumlu şekilde tarafınıza teslim edilir.",
    bullets: ["Final kontrol & temizlik", "Görselle birebir kıyas", "Teknik dosya teslimi", "Garanti & destek"],
    eta: "Anahtar teslim",
    image: "/process/step-4-kitchen.jpg",
    imageAlt: "Anahtar teslim endüstriyel mutfak uygulaması"
  }
];

export function Process() {
  return (
    <section id="sureç" className="relative py-24 lg:py-36 bg-ink-2 border-y border-border overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[140px] -z-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 lg:mb-24">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Çalışma süreci
            </p>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
              Briefden{" "}
              <span className="italic text-cream/60">teslime,</span>
              <br />
              dört net adımda.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <p className="text-cream/70 leading-relaxed">
              Her proje aynı disiplinle yürütülür: bir tek müşteri temsilcisi,
              bir tek tasarımcı, bir tek üretim sorumlusu. Süreç boyunca aynı
              kişilere ulaşırsınız; bilgi kaybolmaz.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-[200px_1fr] gap-12 items-start">
          <StepIndicator
            steps={steps.map((s) => ({ id: `step-${s.n}`, label: s.tag }))}
          />

          <ol className="space-y-16 lg:space-y-28 min-w-0">
            {steps.map((s, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal
                  key={s.n}
                  as="li"
                  id={`step-${s.n}`}
                  delay={i * 60}
                  className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-32"
                >
                <div
                  className={`lg:col-span-6 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[5/4] rounded-3xl overflow-hidden bg-surface border border-border group">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur border border-border text-[10px] uppercase tracking-[0.2em] text-cream/80">
                      Adım {s.n}
                    </span>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 ${
                    reverse ? "lg:order-1 lg:pr-6" : "lg:pl-6"
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display text-[4.5rem] lg:text-[6rem] leading-none text-accent">
                      {s.n}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-ink text-xs text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl lg:text-4xl mb-5 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-cream/75 text-lg leading-relaxed">
                    {s.body}
                  </p>

                  <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {s.bullets.map((b) => (
                      <div
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-cream/85"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink border border-border text-xs">
                    <span className="text-muted">Süre</span>
                    <span className="text-cream">{s.eta}</span>
                  </p>
                </div>
              </Reveal>
            );
          })}
          </ol>
        </div>

        <Reveal className="mt-20 lg:mt-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 rounded-3xl bg-surface border border-border">
          <div>
            <p className="font-display text-2xl lg:text-3xl">
              Aklınızda bir proje mi var?
            </p>
            <p className="mt-2 text-cream/70 max-w-md text-sm">
              İlk görüşme ücretsizdir. 48 saat içinde ön çerçeve raporuyla
              dönüyoruz.
            </p>
          </div>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-accent text-ink font-medium hover:bg-accent-2 transition-colors"
          >
            Görüşme başlat
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
