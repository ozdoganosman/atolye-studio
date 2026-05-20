"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Bir proje ne kadar sürede teslim edilir?",
    a: "Süre, projenin kapsamına ve ölçeğine göre değişir. Tipik bir mağaza iç mimari uygulaması 6–10 hafta, endüstriyel mutfak projeleri 4–8 hafta, modüler fuar standı 2–4 haftada teslim edilir. Brief sonrası size net bir zaman çizelgesi sunarız."
  },
  {
    q: "Bütçe aralığı nedir? Asgari proje büyüklüğü var mı?",
    a: "Asgari proje büyüklüğümüz yoktur; küçük bir teşhir mobilyasından 1.000 m²'lik mağaza projesine kadar çalışıyoruz. Bütçe; ölçü, malzeme seçimleri ve teslim süresine göre netleşir. İlk görüşmede yaklaşık aralık paylaşırız, projelendirme sonrası kalem kalem teklif sunulur."
  },
  {
    q: "Türkiye dışındaki projeleri de üstleniyor musunuz?",
    a: "Evet. Üretim İstanbul'daki atölyemizde tamamlanır, parçalar konteyner/TIR ile sevk edilir ve sahada bizim ekibimiz kurulur. Avrupa fuar standları için düzenli olarak Milano, Berlin, Köln ve Paris'e çalışıyoruz."
  },
  {
    q: "Sadece tasarım hizmeti alabilir miyim, üretim olmadan?",
    a: "Evet. Konsept + 3D + teknik çizim seti ayrı paket olarak sunulabilir. Ancak deneyimlerimize göre tasarım ve üretimin aynı ekipte olması zaman ve kalite açısından ciddi fark yaratıyor — bu yüzden anahtar teslim önerimizdir."
  },
  {
    q: "Onaylanmış proje üzerinde değişiklik yapılabilir mi?",
    a: "Üretime girene kadar revizyon hakları sınırsızdır. Üretim başladıktan sonraki büyük değişiklikler ek maliyet ve süre yaratır; teklifte bu sınır net olarak belirtilir. Küçük saha düzenlemeleri normal süreç içinde değerlendirilir."
  },
  {
    q: "Teslim sonrası garanti veya destek var mı?",
    a: "Tüm uygulamalarımız 2 yıl konstrüksiyon garantili teslim edilir. Aydınlatma, mekanik aksam ve dekoratif öğeler için üretici garantileri ayrıca aktarılır. Garanti dışı bakım/tadilat ihtiyaçlarında öncelikli destek sağlarız."
  },
  {
    q: "Hangi sektörlerde çalışıyorsunuz?",
    a: "Perakende (mağaza, showroom), gastronomi (restoran, kafe, endüstriyel mutfak), ofis & co-working, otelcilik ve fuar/etkinlik alanları temel odak alanlarımız. Konut projelerini sadece tasarım+danışmanlık formatında alıyoruz."
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sss" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Sıkça sorulan sorular
            </p>
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05]">
              Genelde{" "}
              <span className="italic text-cream/60">merak edilen</span>{" "}
              sorular.
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed">
              Aradığınız yanıt burada yoksa{" "}
              <a href="#iletisim" className="text-accent underline-offset-4 hover:underline">
                doğrudan bize yazın
              </a>
              {" "}— 1 iş günü içinde dönüş yapıyoruz.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                    >
                      <span className="font-display text-lg lg:text-xl text-cream group-hover:text-accent transition-colors">
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 grid place-items-center w-10 h-10 rounded-full border border-border transition-all ${
                          isOpen
                            ? "bg-accent border-accent text-ink rotate-45"
                            : "text-cream group-hover:border-accent/50"
                        }`}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-cream/75 leading-relaxed pr-12 max-w-2xl">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
