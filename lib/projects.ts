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
  area?: string;
  duration?: string;
  services?: string[];
  summary: string;
  brief: string;
  approach: string;
  gallery: string[];
  beforeAfter?: { before: string; after: string; labelBefore?: string; labelAfter?: string };
  testimonial?: { quote: string; name: string; role: string };
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
    tags: ["Mağaza", "Teşhir sistemi"],
    area: "210 m²",
    duration: "8 hafta",
    services: ["Konsept tasarım", "3D görselleştirme", "Metal & ahşap üretim", "Anahtar teslim kurulum"],
    summary:
      "Doğal ürünler perakendesinde sıcak, davetkâr ve ürünü ön plana çıkaran bir mağaza atmosferi.",
    brief:
      "Marka, ana caddedeki yeni şubesi için ürün çeşitliliğini bozmadan göz yormayan, ışıkla ve raf düzenlemesiyle ürünleri öne çıkaran bir konsept istedi. Hedef; müşterinin mağazaya girer girmez 'doğal' kelimesini hissedebileceği, ürünün arkadaki ambalajı bile okuyabileceği bir aydınlatma seviyesi.",
    approach:
      "Tavanı serbest bıraktık, ışık tasarımını rafların alt kenarlarına yedirilen LED şeritlerle yerelleştirdik. Metal+ahşap karkas raflar, geçmeli modüler bağlantılarla üretildi — gelecekte düzen değişikliği için söküm/montaj saatler içinde mümkün.",
    gallery: [
      "/portfolio/store-shelves.jpg",
      "/process/step-2-store.jpg",
      "/process/step-4-display.jpg",
      "/process/step-2-display.jpg"
    ],
    testimonial: {
      quote:
        "Aydınlatma raporundaki simülasyon ile sonuç bire bir aynı çıktı. Müşterilerden ilk gün gelen yorum: 'burası başka bir mağaza gibi'.",
      name: "M. T.",
      role: "İşletme sahibi"
    }
  },
  {
    slug: "endustriyel-mutfak",
    title: "Endüstriyel Mutfak Uygulaması",
    category: "İç Mimari",
    client: "Restoran Grubu",
    location: "İstanbul",
    year: 2025,
    image: "/portfolio/kitchen-hood.jpg",
    tags: ["Mutfak", "Anahtar teslim"],
    area: "85 m² (üretim alanı)",
    duration: "5 hafta",
    services: ["Mutfak hattı tasarımı", "Davlumbaz konstrüksiyonu", "Paslanmaz çelik imalat", "Tesisat koordinasyonu"],
    summary:
      "Yüksek hacimli servis için tasarlanmış endüstriyel mutfak — özel davlumbaz konstrüksiyonu ile.",
    brief:
      "Otelin yeni restoran katı için günde 400+ kuver kapasitesinde mutfak hattı; mevcut tavandaki kısıtlı yüksekliği aşacak özel bir davlumbaz çözümü gerekiyordu.",
    approach:
      "Davlumbazı, mevcut tavan kotuna oturacak şekilde 'geri çekik' geometride tasarladık — hava emiş hacmini koruyarak. Pişirme hattı modüler olarak konumlandırıldı; gelecekteki menü değişikliklerinde ekipman değiştirmek vidaların açılması kadar kolay.",
    gallery: [
      "/portfolio/kitchen-hood.jpg",
      "/portfolio/kitchen-build.jpg",
      "/process/step-4-kitchen.jpg",
      "/process/step-3-frame.jpg"
    ],
    beforeAfter: {
      before: "/portfolio/kitchen-build.jpg",
      after: "/process/step-4-kitchen.jpg",
      labelBefore: "Kaba inşaat",
      labelAfter: "Teslim"
    }
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
    tags: ["Endüstriyel", "Yeşil duvar"],
    area: "120 m²",
    duration: "6 hafta",
    services: ["Konsept tasarım", "Davlumbaz üretim", "Metal teşhir paneli", "Yeşil duvar uygulama"],
    summary:
      "Açık mutfak konseptiyle servise dahil olan, dekoratif metal paravan ve doğal yeşil duvar ile karakterli bir alan.",
    brief:
      "Şef-müşteri etkileşimini koruyan açık mutfak; konuk alanından görüldüğünde sanat eseri etkisi yaratacak bir mimari karakter beklendi.",
    approach:
      "Pişirme hattını gizlemek yerine, hattan konuk alanına geçişi karakterize eden lazer-kesim metal panel tasarladık. Yarım daire desenleri marka kimliğinden türetildi. Yeşil duvar, gürültü emici özelliği sayesinde fonksiyonel; yan etkisi atmosfer.",
    gallery: [
      "/process/step-4-kitchen.jpg",
      "/portfolio/kitchen-hood.jpg",
      "/portfolio/kitchen-build.jpg",
      "/process/step-3-metal.jpg"
    ]
  },
  {
    slug: "kitchen-build",
    title: "Davlumbaz & Pişirme Hattı",
    category: "İç Mimari",
    client: "Otel projesi",
    location: "İstanbul",
    year: 2024,
    image: "/portfolio/kitchen-build.jpg",
    tags: ["Davlumbaz", "Paslanmaz çelik"],
    area: "65 m²",
    duration: "4 hafta",
    services: ["Davlumbaz imalat", "Pişirme hattı kurulum", "Egzoz koordinasyonu"],
    summary:
      "Otel mutfağı için özel ölçü paslanmaz davlumbaz ve pişirme hattı entegrasyonu.",
    brief:
      "Mevcut yapı kısıtları içinde, otel restoranının pik saat kapasitesini karşılayacak hava emiş ve pişirme hattı sistemi.",
    approach:
      "Davlumbaz, atölyede üç parça halinde üretilip sahada birleştirildi — asansöre sığacak şekilde. Tüm pişirme hattı, mevcut elektrik/su tesisatına minimum müdahale ile entegre edildi.",
    gallery: [
      "/portfolio/kitchen-build.jpg",
      "/portfolio/kitchen-hood.jpg",
      "/process/step-4-kitchen.jpg"
    ]
  },
  {
    slug: "magaza-teshir",
    title: "Mağaza Teşhir Sistemleri",
    category: "İç Mimari",
    client: "Konsept mağaza",
    location: "Bursa",
    year: 2024,
    image: "/process/step-4-display.jpg",
    tags: ["Teşhir", "Metal & ahşap"],
    area: "180 m²",
    duration: "5 hafta",
    services: ["Teşhir mobilyası tasarımı", "Metal+ahşap üretim", "Mermer dokulu duvar"],
    summary:
      "Mermer dokulu duvarlar ile karakter kazanan, modüler metal+ahşap teşhir sistemleri.",
    brief:
      "Premium konsept mağazada, ürünü ön plana çıkaran ama nötr kalmayan; sezon değişikliklerinde kolayca yeniden kurgulanabilen bir teşhir sistemi.",
    approach:
      "Karkas siyah metal, raflar açık doğal ahşap — kontrast ürün rengini ne olursa olsun çerçeveliyor. Modüller geçmeli olduğundan personel raf yüksekliklerini saatler içinde değiştirebiliyor.",
    gallery: [
      "/process/step-4-display.jpg",
      "/process/step-2-display.jpg",
      "/process/step-2-store.jpg"
    ]
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
    tags: ["Fuar standı", "Çelik konstrüksiyon"],
    area: "48 m² (2 katlı)",
    duration: "3 hafta (üretim) + 2 gün (kurulum)",
    services: ["Konstrüksiyon tasarım", "Çelik üretim", "Söküm/kurulum", "Depolama"],
    summary:
      "Birden fazla fuarda yeniden kullanılabilen modüler iki katlı stand iskeleti.",
    brief:
      "Marka, yılda 3-4 farklı fuara katılacak; her seferinde tasarım maliyetini sıfırdan ödememesi için yeniden kurulabilen modüler bir sistem istedi.",
    approach:
      "Tüm bağlantıları cıvatalı yaptık, kaynak minimumda tutuldu. Standın üst katı sökülüp aynı parçalarla farklı bir planda yeniden kurgulanabiliyor. Depolama hacmini düşürmek için kolonlar içiçe geçen iki parçadan üretildi.",
    gallery: [
      "/process/step-3-frame.jpg",
      "/process/step-3-metal.jpg",
      "/process/step-3-grinding.webp"
    ]
  },
  {
    slug: "konsept-magaza",
    title: "Konsept Mağaza Projesi",
    category: "Fuar & Stand",
    client: "Perakende markası",
    location: "Konsept çalışma",
    year: 2024,
    image: "/process/step-2-store.jpg",
    tags: ["3D konsept", "Showroom"],
    duration: "2 hafta (konsept)",
    services: ["Konsept tasarım", "3D modelleme", "Malzeme paleti"],
    summary:
      "Sürdürülebilir malzemeler odaklı, modüler mağaza konsept çalışması.",
    brief:
      "Marka, gelecek dönem mağazalarına şablon oluşturacak bir konsept seti istedi. Doğal malzemeler + modüler raflama + esnek aydınlatma temel kriterler.",
    approach:
      "Tek bir 'usta' konsept tasarladık; farklı m² oturumlarına uyarlanabilen modüller. Vitrini cam yerine geri çekilebilir ahşap panellerle çözdük — gece kapalı, gündüz açık.",
    gallery: [
      "/process/step-2-store.jpg",
      "/process/step-2-display.jpg",
      "/portfolio/store-shelves.jpg"
    ]
  },
  {
    slug: "konsept-kafe",
    title: "Standalone Kafe Konsepti",
    category: "Fuar & Stand",
    client: "Kafe markası",
    location: "Konsept çalışma",
    year: 2024,
    image: "/process/step-2-cafe.jpg",
    tags: ["Modüler yapı", "F&B"],
    duration: "3 hafta (konsept + teknik dosya)",
    services: ["Konsept", "3D modelleme", "Teknik dosya"],
    summary:
      "Şehir meydanlarına ve park girişlerine kurulabilen, taşınabilir modüler kafe.",
    brief:
      "Marka, sezonluk lokasyonlara hızlı kurulup kaldırılabilen standalone bir kafe yapısı istedi.",
    approach:
      "Container ölçülerine sığacak şekilde kurgulanmış prefabrik panel sistemi tasarladık. Mutfak ve müşteri alanı tek bir modül; iki ayrı kullanım. 1 gün içinde kuruluyor, 4 saat içinde sökülüyor.",
    gallery: [
      "/process/step-2-cafe.jpg",
      "/process/step-2-grill.jpg"
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProject(slug);
  if (!current) return projects.slice(0, limit);
  const sameCategory = projects.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = projects.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
