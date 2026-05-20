import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — Atölye",
  description:
    "İç mimari ve fuar standı projelerini konsept'ten teslime kendi atölyesinde üreten bir stüdyo. 2014'ten beri."
};

const team = [
  { name: "S. Ç.", role: "Kurucu & Tasarım Direktörü", initials: "SÇ" },
  { name: "M. K.", role: "Üretim Sorumlusu", initials: "MK" },
  { name: "Z. A.", role: "Proje Koordinatörü", initials: "ZA" },
  { name: "E. Y.", role: "3D & Görselleştirme", initials: "EY" }
];

const machines = [
  { name: "CNC Lazer Kesim", spec: "4 x 2 m, 6 mm çelik" },
  { name: "Abkant Pres", spec: "100 ton, 3 m" },
  { name: "MIG/MAG Kaynak", spec: "4 istasyon" },
  { name: "CNC Router", spec: "3 x 1.5 m" },
  { name: "Boya Kabini", spec: "Toz boya + ıslak" },
  { name: "Hidrolik Makas", spec: "3.05 m, 6 mm" }
];

const timeline = [
  { year: "2014", event: "Atölye kuruldu; 80 m² mağaza teşhir mobilyasıyla başlandı." },
  { year: "2017", event: "İlk uluslararası fuar projesi: Milano." },
  { year: "2019", event: "1.000 m² atölyeye taşınıldı; CNC lazer eklendi." },
  { year: "2022", event: "Endüstriyel mutfak hattı uzmanlığı portföye katıldı." },
  { year: "2024", event: "100'üncü tamamlanmış proje teslim edildi." },
  { year: "2026", event: "Tasarım ekibi 12 kişiye ulaştı." }
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-accent/15 blur-[180px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-muted mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Hakkımızda
          </div>

          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight max-w-5xl">
            Çizdiğimiz her detayı{" "}
            <span className="italic text-accent">kendi atölyemizde</span>{" "}
            üretiyoruz.
          </h1>

          <p className="mt-10 text-lg text-cream/75 max-w-2xl leading-relaxed">
            2014'ten beri iç mimari uygulamaları ve fuar standı tasarımında —
            briefin ilk dakikasından son vidanın sıkıldığı saate kadar —
            aynı ekiple çalışan bir stüdyoyuz. Bilgi başka bir tedarikçiye
            geçmediği için detay kaybolmuyor; karar zincirinde kayıp yaşanmıyor.
          </p>
        </div>
      </section>

      <section className="py-12 border-y border-border bg-ink-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {[
            { k: "12 yıl", v: "Atölye tecrübesi" },
            { k: "180+", v: "Tamamlanan proje" },
            { k: "42", v: "Uluslararası fuar" },
            { k: "12", v: "Kişilik ekip" }
          ].map((s) => (
            <div key={s.v}>
              <p className="font-display text-4xl lg:text-5xl text-cream">{s.k}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Felsefemiz
            </p>
            <h2 className="font-display text-3xl lg:text-5xl leading-[1.05]">
              Tasarım ile üretim,{" "}
              <span className="italic text-cream/60">aynı çatı altında.</span>
            </h2>
            <p className="mt-6 text-cream/75 leading-relaxed">
              Bir mekanı tasarlayan ekibin onu üreten ellerden uzak olması,
              gerçek hayatta her zaman uzlaşmayla biten bir gerilime yol açar.
              Biz baştan beri buna inanmadık. Tasarımcılarımız hafta içi 2 gün
              atölyede; üretim ekibimiz her toplantıda masada. Çizimin
              kağıttan vidayla doğacağı yere kadar olan yol, aynı ekibin
              omzunda taşınıyor.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface border border-border">
              <Image
                src="/process/step-3-frame.jpg"
                alt="Atölyede üretim aşaması"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface border border-border mt-12">
              <Image
                src="/process/step-3-grinding.webp"
                alt="Metal işleme detayı"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ink-2 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
                Ekip
              </p>
              <h2 className="font-display text-3xl lg:text-5xl leading-[1.05]">
                Aynı kişilerle{" "}
                <span className="italic text-cream/60">baştan sona.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-cream/70 leading-relaxed">
              Projenizde bir tasarımcı, bir koordinatör ve bir üretim sorumlusu
              ile çalışırsınız. Bu üçü süreç boyunca değişmez — telefonu açan,
              cevap veren, hatırlayan hep aynı insanlar.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((m) => (
              <div
                key={m.name}
                className="group relative aspect-[3/4] rounded-2xl bg-surface border border-border p-6 flex flex-col justify-between hover-tilt overflow-hidden"
              >
                <span className="font-display text-[8rem] leading-none text-accent/15 absolute top-2 right-2 select-none">
                  {m.initials}
                </span>
                <span className="relative text-xs uppercase tracking-[0.2em] text-muted">
                  Ekip
                </span>
                <div className="relative">
                  <p className="font-display text-2xl lg:text-3xl text-cream">
                    {m.name}
                  </p>
                  <p className="mt-2 text-xs text-cream/70">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Makine parkuru
            </p>
            <h2 className="font-display text-3xl lg:text-5xl leading-[1.05]">
              Üretimin her safhası{" "}
              <span className="italic text-cream/60">bizim kontrolümüzde.</span>
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed">
              Lazer kesimden boyaya, kaynaktan ahşap işlemeye — temel
              üretimi dışarı vermiyoruz. Bu bize hem zaman avantajı sağlıyor
              hem de kalite kontrol döngüsünü hızlandırıyor.
            </p>
          </div>

          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {machines.map((m) => (
              <li
                key={m.name}
                className="p-5 rounded-2xl bg-surface border border-border flex items-start gap-4"
              >
                <span className="grid place-items-center w-10 h-10 rounded-full border border-border bg-ink shrink-0 text-accent">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1L14 4V8C14 11 11.5 13.5 8 15C4.5 13.5 2 11 2 8V4L8 1Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-lg text-cream">{m.name}</p>
                  <p className="text-xs text-muted mt-1">{m.spec}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
                Atölyeden
              </p>
              <h2 className="font-display text-3xl lg:text-5xl leading-[1.05]">
                Üretim hattından{" "}
                <span className="italic text-cream/60">an'lar.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-cream/70 leading-relaxed">
              Tasarımı çizenler, üretimi yapanlar, sahada kuranlar — hepsi
              aynı çatı altında. Bu, web sitesinde gördüğünüz mağazaların
              kurulduğu yer.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-3 lg:gap-4">
            {[
              { src: "/workshop/counter-build.jpg", span: "col-span-6 lg:col-span-5 aspect-[4/5]", alt: "Atölyede beyaz tezgah üretimi" },
              { src: "/process/step-3-frame.jpg", span: "col-span-6 lg:col-span-4 aspect-[4/5]", alt: "Metal konstrüksiyon iskeleti" },
              { src: "/workshop/cabinet-build.jpg", span: "col-span-12 lg:col-span-3 aspect-[4/5]", alt: "Kasa üretim aşaması" },
              { src: "/process/step-3-grinding.webp", span: "col-span-6 lg:col-span-4 aspect-[4/3]", alt: "Metal işleme ve taşlama" },
              { src: "/portfolio/boyner-display-construction.jpg", span: "col-span-6 lg:col-span-4 aspect-[4/3]", alt: "Sahada metal stand kurulumu" },
              { src: "/process/step-3-metal.jpg", span: "col-span-12 lg:col-span-4 aspect-[4/3]", alt: "Atölyede özel metal şekillendirme" }
            ].map((img) => (
              <div
                key={img.src}
                className={`${img.span} relative rounded-2xl overflow-hidden bg-surface border border-border group`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ink-2 border-y border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Zaman çizelgesi
          </p>
          <h2 className="font-display text-3xl lg:text-5xl leading-[1.05] mb-14">
            Bir atölyenin{" "}
            <span className="italic text-cream/60">12 yıllık hikayesi.</span>
          </h2>

          <ol className="relative space-y-10 border-l border-border pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[42px] top-1 grid place-items-center w-5 h-5 rounded-full bg-ink border-2 border-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </span>
                <p className="font-display text-3xl text-accent">{t.year}</p>
                <p className="mt-2 text-cream/85 leading-relaxed max-w-xl">
                  {t.event}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-surface border border-border p-10 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[140px] -z-0" />
            <p className="relative font-display text-3xl lg:text-5xl leading-tight">
              Birlikte çalışmak{" "}
              <span className="italic text-cream/60">ister misiniz?</span>
            </p>
            <p className="relative mt-5 text-cream/70 max-w-md mx-auto">
              Projenizi ilk görüşmede dinleyelim. 48 saat içinde ön çerçeve
              raporuyla dönüyoruz.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/brief"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-accent text-ink font-medium hover:bg-accent-2 transition-colors"
              >
                Brief gönder
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/#portfolyo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border text-cream hover:border-cream/50 transition-colors"
              >
                Önce projelere bakalım
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
