export type Category = "Hepsi" | "İç Mimari" | "Fuar & Stand";

export type Project = {
  slug: string;
  title: string;
  category: Exclude<Category, "Hepsi">;
  client: string;
  location: string;
  year: number;
  image: string;
  span?: "wide" | "tall" | "default";
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "dogal-market",
    title: "Doğal Ürünler Mağazası",
    category: "İç Mimari",
    client: "Özel müşteri",
    location: "İstanbul",
    year: 2025,
    image: "/portfolio/store-shelves.jpg",
    span: "wide",
    tags: ["Mağaza", "Teşhir sistemi"]
  },
  {
    slug: "endustriyel-mutfak",
    title: "Endüstriyel Mutfak Uygulaması",
    category: "İç Mimari",
    client: "Restoran Grubu",
    location: "İstanbul",
    year: 2025,
    image: "/portfolio/kitchen-hood.jpg",
    tags: ["Mutfak", "Anahtar teslim"]
  },
  {
    slug: "restoran-mutfak-hatti",
    title: "Restoran Mutfak Hattı",
    category: "İç Mimari",
    client: "Şef A.",
    location: "Ankara",
    year: 2025,
    image: "/process/step-4-kitchen.jpg",
    span: "tall",
    tags: ["Endüstriyel", "Yeşil duvar"]
  },
  {
    slug: "kitchen-build",
    title: "Davlumbaz & Pişirme Hattı",
    category: "İç Mimari",
    client: "Otel projesi",
    location: "İstanbul",
    year: 2024,
    image: "/portfolio/kitchen-build.jpg",
    tags: ["Davlumbaz", "Paslanmaz çelik"]
  },
  {
    slug: "magaza-teshir",
    title: "Mağaza Teşhir Sistemleri",
    category: "İç Mimari",
    client: "Konsept mağaza",
    location: "Bursa",
    year: 2024,
    image: "/process/step-4-display.jpg",
    tags: ["Teşhir", "Metal & ahşap"]
  },
  {
    slug: "fuar-stand-iskelet",
    title: "Modüler Fuar Standı İskeleti",
    category: "Fuar & Stand",
    client: "Marka X",
    location: "Atölye üretim",
    year: 2024,
    image: "/process/step-3-frame.jpg",
    span: "wide",
    tags: ["Fuar standı", "Çelik konstrüksiyon"]
  },
  {
    slug: "konsept-magaza",
    title: "Konsept Mağaza Projesi",
    category: "Fuar & Stand",
    client: "Perakende markası",
    location: "Konsept çalışma",
    year: 2024,
    image: "/process/step-2-store.jpg",
    tags: ["3D konsept", "Showroom"]
  },
  {
    slug: "konsept-kafe",
    title: "Standalone Kafe Konsepti",
    category: "Fuar & Stand",
    client: "Kafe markası",
    location: "Konsept çalışma",
    year: 2024,
    image: "/process/step-2-cafe.jpg",
    tags: ["Modüler yapı", "F&B"]
  }
];
