import { Reveal } from "./Reveal";

const services = [
  {
    title: "İç Mimari Uygulamaları",
    desc: "Konut, ofis, mağaza ve restoran projelerinde konsept tasarımdan anahtar teslim uygulamaya kadar tüm süreç tek ekip tarafından yürütülür.",
    bullets: ["Konsept & moodboard", "3D render & VR tur", "Sahada uygulama", "Mobilya & dekor üretimi"]
  },
  {
    title: "Fuar Standı Tasarımı",
    desc: "Yurt içi ve yurt dışı fuarlarda markanızı en güçlü şekilde temsil edecek stand tasarımı, üretimi ve kurulumu — sökümüyle birlikte.",
    bullets: ["Modüler & özel stand", "Görsel teşhir tasarımı", "Lojistik & kurulum", "Söküm & depolama"]
  }
];

export function Services() {
  return (
    <section id="hizmetler" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Hizmetler
          </p>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
            İki uzmanlık,{" "}
            <span className="italic text-cream/60">tek atölye.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 120}
              className="group relative p-8 lg:p-10 rounded-3xl bg-surface border border-border hover-tilt overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-5xl text-accent">
                  0{i + 1}
                </span>
                <span className="grid place-items-center w-12 h-12 rounded-full border border-border group-hover:bg-accent group-hover:border-accent group-hover:text-ink transition-all">
                  →
                </span>
              </div>

              <h3 className="font-display text-2xl lg:text-3xl mb-4">
                {s.title}
              </h3>
              <p className="text-cream/70 leading-relaxed">{s.desc}</p>

              <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-cream/80"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
