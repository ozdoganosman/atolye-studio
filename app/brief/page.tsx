import type { Metadata } from "next";
import { BriefForm } from "@/components/BriefForm";

export const metadata: Metadata = {
  title: "Brief Gönder — Furnuovo",
  description:
    "Projenizi adım adım anlatın; 48 saat içinde ön çerçeve raporu ve takvim önerisiyle dönüyoruz."
};

export default function BriefPage() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Proje brief'i
          </p>
          <h1 className="font-display text-4xl lg:text-6xl leading-[1.05]">
            Projenizi{" "}
            <span className="italic text-cream/60">adım adım</span> anlatın.
          </h1>
          <p className="mt-6 text-cream/70 leading-relaxed">
            Ne kadar net olursanız, dönüşümüz o kadar isabetli olur.
            Hassas bilgileri henüz paylaşmak istemiyorsanız sonradan da
            ekleyebilirsiniz — formu mutlaka eksiksiz doldurmak zorunda
            değilsiniz.
          </p>

          <div className="mt-8 inline-flex items-center gap-6 text-xs text-muted">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              48 saat yanıt
            </span>
            <span>·</span>
            <span>İlk görüşme ücretsiz</span>
            <span>·</span>
            <span>NDA imzalanabilir</span>
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          <BriefForm />
        </div>
      </div>
    </section>
  );
}
