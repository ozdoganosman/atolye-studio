"use client";

import { useState } from "react";

const projectTypes = [
  { id: "ic-mimari", label: "İç Mimari Uygulaması", desc: "Mağaza, ofis, restoran" },
  { id: "endustriyel-mutfak", label: "Endüstriyel Mutfak", desc: "Restoran/otel mutfağı" },
  { id: "magaza-teshir", label: "Mağaza Teşhir", desc: "Raf, vitrin, podium" },
  { id: "fuar-stand", label: "Fuar / Stand", desc: "Yurt içi-yurt dışı" },
  { id: "diger", label: "Diğer / Henüz emin değilim", desc: "Bize anlat, birlikte tanımlayalım" }
];

const budgetRanges = [
  "150.000 ₺ altı",
  "150 – 500 bin ₺",
  "500 bin – 1.5 M ₺",
  "1.5 – 5 M ₺",
  "5 M ₺ üzeri",
  "Henüz belirsiz"
];

const timelines = [
  "Olabildiğince hızlı",
  "1–2 ay içinde",
  "3–6 ay içinde",
  "Henüz belirsiz"
];

const currentStates = [
  "Kaba inşaat aşamasında",
  "Boş mekan, hazır teslim alındı",
  "Mevcut mekan yenilenecek",
  "Henüz mekan kesinleşmedi"
];

export function BriefForm() {
  const [type, setType] = useState(projectTypes[0].id);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [state, setState] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.set("source", "brief");
    formData.set("projectType", type);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Brief gönderilemedi.");
      }

      setSent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Brief gönderilemedi.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="p-10 lg:p-16 rounded-3xl bg-surface border border-border text-center">
        <span className="inline-grid place-items-center w-20 h-20 rounded-full bg-accent text-ink text-3xl mb-6">
          ✓
        </span>
        <h2 className="font-display text-3xl lg:text-4xl mb-4">
          Brief'iniz bize ulaştı.
        </h2>
        <p className="text-cream/70 max-w-xl mx-auto leading-relaxed">
          En geç 48 saat içinde ön çerçeve raporu ve önerilen takvimle
          dönüyoruz. Acil iletişim için{" "}
          <a className="text-accent hover:underline" href="tel:+905392920144">
            +90 539 292 01 44
          </a>{" "}
          numaralı hattımız aktif.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-cream hover:border-cream/50 transition-colors text-sm"
        >
          ← Anasayfaya dön
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      <Section
        index="01"
        title="Projenizin türü"
        desc="Birden fazlasıysa en önemlisini seçin; serbest metinde ayrıntı verirsiniz."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projectTypes.map((t) => {
            const active = type === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setType(t.id)}
                className={`relative p-5 rounded-2xl border text-left transition-all ${
                  active
                    ? "border-accent bg-accent/5"
                    : "border-border bg-surface hover:border-cream/30"
                }`}
              >
                <span
                  className={`absolute top-4 right-4 w-4 h-4 rounded-full border-2 transition-all ${
                    active ? "bg-accent border-accent" : "border-border"
                  }`}
                />
                <p className="font-display text-lg pr-6">{t.label}</p>
                <p className="text-xs text-muted mt-1">{t.desc}</p>
              </button>
            );
          })}
        </div>
      </Section>

      <Section
        index="02"
        title="Proje detayları"
        desc="Boş bırakabilirsiniz; doldurursanız teklifimiz çok daha net olur."
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Yaklaşık alan (m²)" name="alan" placeholder="örn. 180" />
          <Field label="Şehir / lokasyon" name="lokasyon" placeholder="örn. İstanbul, Bağdat Cd." />
          <Field label="Kullanım amacı" name="amac" placeholder="örn. Konsept mağaza, ofis vb." />
          <Field label="Hedef teslim tarihi" name="teslim" placeholder="örn. Eylül 2026" />
        </div>
      </Section>

      <Section
        index="03"
        title="Mekânın mevcut durumu"
        desc="Hangi aşamada bulduk, oradan başlıyoruz."
      >
        <PillGroup options={currentStates} value={state} onChange={setState} name="durum" />
      </Section>

      <Section
        index="04"
        title="Bütçe aralığı"
        desc="Sadece teklifimizi doğru şekillendirmek için soruyoruz."
      >
        <PillGroup options={budgetRanges} value={budget} onChange={setBudget} name="butce" />
      </Section>

      <Section
        index="05"
        title="Zaman planı"
        desc=""
      >
        <PillGroup options={timelines} value={timeline} onChange={setTimeline} name="zaman" />
      </Section>

      <Section
        index="06"
        title="İlham / referans"
        desc="Görsel paylaşmanın en hızlı yolu — Pinterest, Instagram, dosya linki ya da kısa açıklama."
      >
        <textarea
          name="ilham"
          rows={3}
          placeholder="Bağlantılar, marka isimleri veya 'kontrast koyu tonlar, sıcak ahşap dokular' gibi anahtar kelimeler..."
          className="w-full bg-surface border border-border rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </Section>

      <Section
        index="07"
        title="Sizden biraz daha duymak istiyoruz"
        desc="Hedef, hikaye, kısıtlar — aklınızda ne varsa."
      >
        <textarea
          name="aciklama"
          rows={5}
          placeholder="Projenizin amacı, kullanıcı profili, özel istekler, mevcut sorunlar..."
          className="w-full bg-surface border border-border rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </Section>

      <Section
        index="08"
        title="İletişim bilgileriniz"
        desc="48 saat içinde size buradan dönüyoruz."
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="İsim Soyisim" name="isim" placeholder="Adınız" required />
          <Field label="Şirket" name="sirket" placeholder="Şirket adı (opsiyonel)" required={false} />
          <Field label="E-posta" name="email" type="email" placeholder="ornek@firma.com" required />
          <Field label="Telefon / WhatsApp" name="telefon" type="tel" placeholder="+90" />
        </div>
      </Section>

      <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 pt-4">
        <div className="text-xs text-muted max-w-md">
          <p>
            Gönder'e basarak{" "}
            <a className="underline hover:text-accent" href="#">
              KVKK aydınlatma metnini
            </a>{" "}
            ve verilerinizin proje teklifi sürecinde kullanılmasını kabul etmiş
            olursunuz.
          </p>
          {error && <p className="mt-2 text-accent">{error}</p>}
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent text-ink font-medium hover:bg-accent-2 transition-colors text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Gönderiliyor..." : "Brief'i gönder"}
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

function Section({
  index,
  title,
  desc,
  children
}: {
  index: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="grid lg:grid-cols-12 gap-6 lg:gap-10 pb-12 border-b border-border last:border-b-0">
      <div className="lg:col-span-4">
        <p className="font-display text-accent text-2xl">{index}</p>
        <h3 className="font-display text-xl lg:text-2xl mt-2 leading-tight">
          {title}
        </h3>
        {desc && (
          <p className="mt-2 text-xs text-muted leading-relaxed max-w-xs">
            {desc}
          </p>
        )}
      </div>
      <div className="lg:col-span-8">{children}</div>
    </fieldset>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false
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
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-surface border border-border rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}

function PillGroup({
  options,
  value,
  onChange,
  name
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`px-4 py-2.5 rounded-full text-sm border transition-all ${
            value === o
              ? "bg-accent text-ink border-accent"
              : "border-border text-cream/80 hover:border-cream/40"
          }`}
        >
          {o}
        </button>
      ))}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
