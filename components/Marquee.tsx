const items = [
  "İç mimari projelendirme",
  "Anahtar teslim uygulama",
  "Fuar standı tasarımı",
  "3D görselleştirme",
  "Mağaza konsepti",
  "Showroom kurulumu",
  "Mobilya imalatı",
  "Aydınlatma tasarımı"
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative py-6 border-y border-border bg-ink-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 font-display text-2xl lg:text-3xl text-cream/80"
          >
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-2 to-transparent" />
    </div>
  );
}
