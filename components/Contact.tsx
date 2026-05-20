"use client";

import { Reveal } from "./Reveal";
import { useState } from "react";

const projectTypes = ["İç mimari uygulama", "Fuar standı", "3D görselleştirme", "Diğer"];

export function Contact() {
  const [type, setType] = useState(projectTypes[0]);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="iletisim" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent/8 blur-[180px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
              İletişim
            </p>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05]">
              Bir{" "}
              <span className="italic text-cream/60">brief</span> gönderin —
              48 saat içinde dönüyoruz.
            </h2>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
                  Stüdyo
                </p>
                <p>Maslak Mahallesi, Atölye Sk. No: 12 / Sarıyer, İstanbul</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
                  E-posta & telefon
                </p>
                <p>
                  <a className="hover:text-accent" href="mailto:hello@furnuovo.com">
                    hello@furnuovo.com
                  </a>
                  <br />
                  <a className="hover:text-accent" href="tel:+902120000000">
                    +90 212 000 00 00
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
                  Çalışma saatleri
                </p>
                <p>Pzt – Cum, 09:00 – 18:00</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="relative p-6 lg:p-10 rounded-3xl bg-surface border border-border"
            >
              {sent ? (
                <div className="py-16 text-center">
                  <span className="inline-grid place-items-center w-16 h-16 rounded-full bg-accent text-ink text-2xl mb-6">
                    ✓
                  </span>
                  <h3 className="font-display text-3xl mb-3">Teşekkürler.</h3>
                  <p className="text-cream/70 max-w-md mx-auto">
                    Mesajınız bize ulaştı. 48 saat içinde ön çerçeve raporuyla
                    döneceğiz.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
                      Proje türü
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setType(t)}
                          className={`px-4 py-2 rounded-full text-sm border transition-all ${
                            type === t
                              ? "bg-accent text-ink border-accent"
                              : "border-border text-cream/80 hover:border-cream/40"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Field name="name" label="İsim Soyisim" placeholder="Adınız" />
                    <Field name="company" label="Şirket" placeholder="Şirket adı (opsiyonel)" required={false} />
                    <Field name="email" label="E-posta" type="email" placeholder="ornek@firma.com" />
                    <Field name="phone" label="Telefon" type="tel" placeholder="+90" required={false} />
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
                      Projenizden bahsedin
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Mekân, ölçek, hedef tarih, bütçe aralığı vb."
                      className="w-full bg-ink border border-border rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                      Gönder'e basarak{" "}
                      <a className="underline hover:text-accent" href="#">
                        KVKK metnini
                      </a>{" "}
                      kabul etmiş olursunuz.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-accent text-ink font-medium hover:bg-accent-2 transition-colors"
                    >
                      Brief'i gönder
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = true
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-ink border border-border rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
