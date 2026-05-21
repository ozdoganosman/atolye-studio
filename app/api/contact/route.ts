import { NextResponse } from "next/server";

type ContactPayload = {
  source?: string;
  projectType?: string;
  [key: string]: FormDataEntryValue | string | undefined;
};

const requiredFieldsBySource: Record<string, string[]> = {
  contact: ["name", "email", "message"],
  brief: ["isim", "email"]
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries()) as ContactPayload;
  const source = String(payload.source || "contact");
  const requiredFields = requiredFieldsBySource[source] || requiredFieldsBySource.contact;

  const missingFields = requiredFields.filter((field) => !String(payload[field] || "").trim());
  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: "Lütfen zorunlu alanları doldurun.", missingFields },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "info@furnuovo.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Furnuovo <brief@furnuovo.com>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Form gönderimi henüz yapılandırılmamış." },
      { status: 503 }
    );
  }

  const title = source === "brief" ? "Yeni proje brief'i" : "Yeni iletişim mesajı";
  const text = formatPayload(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      subject: `${title} - Furnuovo`,
      text,
      reply_to: String(payload.email || "")
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function formatPayload(payload: ContactPayload) {
  return Object.entries(payload)
    .filter(([, value]) => String(value || "").trim())
    .map(([key, value]) => `${labelFor(key)}: ${value}`)
    .join("\n");
}

function labelFor(key: string) {
  const labels: Record<string, string> = {
    source: "Form",
    projectType: "Proje türü",
    name: "İsim",
    isim: "İsim",
    company: "Şirket",
    sirket: "Şirket",
    email: "E-posta",
    phone: "Telefon",
    telefon: "Telefon",
    message: "Mesaj",
    alan: "Alan",
    lokasyon: "Lokasyon",
    amac: "Kullanım amacı",
    teslim: "Hedef teslim",
    durum: "Mevcut durum",
    butce: "Bütçe",
    zaman: "Zaman planı",
    ilham: "Ilham / referans",
    aciklama: "Aciklama"
  };

  return labels[key] || key;
}
