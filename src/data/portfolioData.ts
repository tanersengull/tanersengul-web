export interface Project {
  id: string;
  title: string;
  roleTitle?: string;
  category: "Mobile AI" | "Mobil & Oyun";
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  date?: string;
}

export interface Experience {
  id: string;
  type: "experience" | "education";
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: number;
    status: string;
  }[];
}

export const personalInfo = {
  name: "Taner Şengül",
  title: "Mobile AI Application Developer | iOS Android",
  roleSub: "Yapay zeka modelleriyle akıllı mobil deneyimler ve yenilikçi uygulamalar geliştiren bir yazılımcı.",
  avatarUrl: "/images/taner-sengul.jpg",
  secondaryAvatarUrl: "/images/taner-sengul.jpg",
  statusBadge: "Yeni Projeler & Fikirler İçin Açık",
  statusAvailable: true,
  email: "tanersengulll@hotmail.com",
  birthDate: "10 Ekim 1998",
  heroHeadline: "TANER ŞENGÜL",
  heroSubtitle:
    "10 Ekim 1998 İstanbul doğumluyum. Haliç Üniversitesi Elektronik Teknolojisi mezunuyum. Donanım ve elektronik temellerimi modern mobil yazılım dünyasıyla birleştiriyor; iOS ve Android ekosistemlerinde yapay zeka destekli yenilikçi uygulamalar ve sürükleyici deneyimler inşa ediyorum.",
  about: [
    "10 Ekim 1998'de İstanbul'da dünyaya geldim. Haliç Üniversitesi'nde Elektronik Teknolojisi eğitimi alarak donanım, devre mantığı ve sistem mimarisi temellerini sağlam bir zemin üzerine inşa ettim.",
    "Yazılımla uğraşmak, sıfırdan fikirler üretmek ve bu fikirleri telefon ekranında çalışan akıcı ürünlere dönüştürmek en büyük tutkum. Güncel yapay zeka asistanlarını ve LLM API'lerini mobil dünyayla birleştirerek kullanıcıların günlük hayatına değer katan mobil yapay zeka uygulamaları geliştiriyorum.",
    "Ekran başından kalktığımda ise iyi müzikler eşliğinde uzun yürüyüşler yapmayı, düzenli sporla zihnimi dinç tutmayı ve yeni teknoloji trendleri üzerine düşünmeyi çok seviyorum. Üretmek ve sürekli öğrenmek benim için bir işten öte bir yaşam tarzı.",
  ],
  interests: [
    "📱 Mobile AI (iOS & Android)",
    "💡 Fikir Üretimi & Prototipleme",
    "🎧 Müzik & Odaklanma",
    "🏃 Doğa Yürüyüşleri & Spor",
    "⚡ Haliç Üni. Elektronik Teknolojisi",
    "🔍 Mobil Kalite & Test",
  ],
  stats: [
    { label: "Mobil & Test Tecrübesi", value: "4+ Yıl" },
    { label: "Canlı AI & Oyun Projesi", value: "2+" },
    { label: "Yayın Ekosistemi", value: "iOS & Android" },
    { label: "Sürekli Öğrenme & Fikir", value: "%100" },
  ],
  socials: {
    github: "https://github.com/tanersengull",
    linkedin: "https://www.linkedin.com/in/taner-%C5%9Feng%C3%BCl-196349223",
  },
};

export const skillsData: SkillCategory[] = [
  {
    title: "Mobil & Yapay Zeka (AI)",
    description: "iOS ve Android platformları için akıllı mobil uygulama mimarisi",
    iconName: "Smartphone",
    skills: [
      { name: "Mobile AI Entegrasyonu & LLM APIs", level: 95, status: "Aktif" },
      { name: "iOS & Android Mobil Mimarisi", level: 92, status: "İleri Seviye" },
      { name: "Kotlin & Android Mobil Geliştirme", level: 82, status: "Aktif" },
      { name: "Hızlı Prototipleme & Fikir Üretimi", level: 96, status: "Uzman" },
    ],
  },
  {
    title: "Mobil Test & Mağaza Yayını",
    description: "Fonksiyonel, regresyon, UI/UX testleri ve mağaza onay süreçleri",
    iconName: "CheckCircle2",
    skills: [
      { name: "App Store Connect & Google Play Console", level: 94, status: "Uzman" },
      { name: "Mobil Uygulama Testi (iOS & Android)", level: 95, status: "Uzman" },
      { name: "UI/UX & Çoklu Ekran Uyumluluğu", level: 92, status: "Uzman" },
      { name: "Kök Neden Analizi & Edge Case Testleri", level: 96, status: "Uzman" },
    ],
  },
  {
    title: "Elektronik & Donanım Temelleri",
    description: "Haliç Üniversitesi Elektronik Teknolojisi altyapısı ve akıllı cihaz QC",
    iconName: "Cpu",
    skills: [
      { name: "Elektronik Devre & Donanım Mantığı", level: 90, status: "Akademik" },
      { name: "Akıllı Cihaz Donanım/Yazılım QC", level: 98, status: "Uzman" },
      { name: "Ağ ve Donanım Sorun Giderme", level: 94, status: "Uzman" },
      { name: "VMware & Sanallaştırma", level: 88, status: "Yetkin" },
    ],
  },
  {
    title: "Yazılım & Araçlar",
    description: "Versiyon kontrolü, veri yönetimi ve geliştirici araçları",
    iconName: "Layout",
    skills: [
      { name: "Git & GitHub İş Akışları", level: 90, status: "Aktif" },
      { name: "SQL & Veri Modelleri", level: 82, status: "Yetkin" },
      { name: "Modern Web Standartları (HTML/CSS/JS)", level: 85, status: "Yetkin" },
      { name: "Prompt Mühendisliği & AI Asistanları", level: 95, status: "Uzman" },
    ],
  },
];

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    type: "experience",
    period: "Temmuz 2024 — Mayıs 2026",
    role: "Kalite Kontrol Uzmanı",
    company: "Getmobil A.Ş",
    description:
      "Akıllı cihazların yazılımsal ve donanımsal fonksiyon testlerini kalite standartlarında yürüttüm. Tespit edilen sistemsel ve fiziksel hataları raporlayarak kök neden analizlerini gerçekleştirdim.",
    highlights: [
      "Akıllı cihaz fonksiyon ve kararlılık testleri",
      "Kök neden analizi ve sistemik hata raporlama",
      "Kullanıcıya ulaşacak ürünlerde kalite güvencesi",
    ],
    technologies: ["Donanım QC", "Fonksiyonel Test", "Kök Neden Analizi"],
  },
  {
    id: "exp-2",
    type: "experience",
    period: "Kasım 2022 — Haziran 2024",
    role: "Teknisyen — Kalite Kontrol Sorumlusu",
    company: "KVK Teknik Servis",
    description:
      "Servis ve onarım süreçlerinden çıkan cihazların son kullanıcıya ulaşmadan önceki son fonksiyonel ve UI/UX kontrol testlerini yönettim. Üretici ve distribütör firmaların kalite standartlarına uyumluluk denetimlerini gerçekleştirdim.",
    highlights: [
      "UI/UX ve fonksiyon kontrol süreçleri",
      "Katı kalite prosedürlerine uyumluluk denetimi",
    ],
    technologies: ["UI/UX Kontrol", "Teknik Servis", "KVK Kalite Standartları"],
  },
  {
    id: "exp-3",
    type: "experience",
    period: "Haziran 2021 — Kasım 2022",
    role: "Stajyer — Tekniker",
    company: "Esse Grup",
    description: "Teknik servis ve donanım kontrol süreçlerinde stajyer teknikerlik.",
    highlights: ["Donanım montaj ve ilk kontroller"],
    technologies: ["Donanım Montaj", "Teknik Servis"],
  },
  {
    id: "exp-4",
    type: "experience",
    period: "Eylül 2016 — Haziran 2017",
    role: "Stajyer",
    company: "Turkish Technic",
    description: "Havacılık sektöründe teknik sistemler ve bakım operasyonları stajı.",
    highlights: ["Yüksek disiplinli kalite yaklaşımı"],
    technologies: ["Teknik Bakım", "Havacılık QC"],
  },
  {
    id: "edu-2",
    type: "education",
    period: "2022 — Halen",
    role: "İşletme (Lisans)",
    company: "İstanbul Üniversitesi",
    description: "İş yönetimi, stratejik planlama, organizasyon ve dijital ürün operasyonları.",
    highlights: ["İşletme, ekonomi ve ürün yönetimi temelleri"],
    technologies: ["Ürün Yönetimi", "İşletme Stratejisi"],
  },
  {
    id: "edu-1",
    type: "education",
    period: "2019 — 2021",
    role: "Elektronik Teknolojisi (Ön Lisans)",
    company: "T.C. Haliç Üniversitesi",
    description: "Elektronik devreler, mikrodenetleyiciler, donanım mimarisi ve teknik arıza giderme temelleri.",
    highlights: ["Elektronik ve donanım mühendislik temelleri"],
    technologies: ["Elektronik Devreler", "Mikrodenetleyiciler", "Donanım Mimarisi"],
  },
];

export const certificationsData = [
  {
    title: "KOSGEB İleri Girişimcilik Sertifikası",
    issuer: "KOSGEB",
    year: "Girişimcilik",
  },
  {
    title: "MEB Bilgisayar Teknik Servis Ustalık Belgesi",
    issuer: "Milli Eğitim Bakanlığı",
    year: "Teknik Servis",
  },
  {
    title: "TalentCoders TechCamp Katılım Sertifikası",
    issuer: "TalentCoders",
    year: "2026",
  },
  {
    title: "TalentCoders Code Hub Katılım Sertifikası",
    issuer: "TalentCoders",
    year: "Yazılım",
  },
  {
    title: "Udemy Kotlin Android Mobil Uygulama Geliştirme",
    issuer: "Udemy",
    year: "Mobil Geliştirme",
  },
  {
    title: "BİLGEİŞ Kişisel Stres Yönetimi",
    issuer: "ODTÜ / BİLGEİŞ",
    year: "Kişisel Gelişim",
  },
];

export const projectsData: Project[] = [
  {
    id: "notegenius-ai-app",
    title: "NoteGenius — AI-Powered Productivity App",
    roleTitle: "Mobile AI Application Developer & QA",
    category: "Mobile AI",
    date: "Mart 2026",
    description:
      "Uzun dokümanları saniyeler içinde özetleyen, akıllı çıkarımlar sunan yapay zeka destekli mobil verimlilik uygulaması.",
    longDescription:
      "NoteGenius, kullanıcıların yoğun metin ve dokümanları saniyeler içinde analiz ederek net özetler ve aksiyon maddeleri elde etmesini sağlayan modern bir mobil yapay zeka uygulamasıdır. LLM API entegrasyonlarının fonksiyonel testleri titizlikle yürütülmüş, uç senaryolarda (edge cases) sistemin stabil kalması için prompt optimizasyonları yapılmış; Apple App Store ve Google Play Store onay süreçleri başarıyla yönetilerek canlıya alınmıştır.",
    image: "/images/notegenius.png",
    tags: [
      "iOS & Android",
      "Mobile AI",
      "LLM API",
      "Prompt Optimization",
      "App Store Connect",
      "Google Play Console",
      "QA Test",
    ],
    features: [
      "Mobil cihazlar için optimize edilmiş akıllı doküman özetleme motoru",
      "LLM API entegrasyonları ve edge case fonksiyonel testleri",
      "Kararlı yanıtlar ve sistem stabilitesi için prompt optimizasyonu",
      "App Store Connect ve Google Play Console canlıya alma yönetimi",
    ],
    metrics: "App Store & Play Store onaylı, kararlı LLM pipeline",
    githubUrl: "https://github.com/tanersengull",
    liveUrl: "https://github.com/tanersengull",
    featured: true,
  },
  {
    id: "iksir-atolyesi-game",
    title: "İksir Atölyesi — AI-Assisted Casual / Simulation Game",
    roleTitle: "Mobile Game Developer & QA",
    category: "Mobil & Oyun",
    date: "Şubat 2026",
    description:
      "Gizemli formüller, bulmaca ve simülasyon mekaniklerine sahip, yapay zeka destekli casual mobil oyun projesi.",
    longDescription:
      "İksir Atölyesi, oyuncuların sihirli iksirler üreterek bulmacaları çözdüğü ve atölyelerini genişlettiği eğlenceli bir casual mobil simülasyon oyunudur. Oyun mekaniklerinin, kullanıcı arayüzünün (UI/UX) ve animasyon akışlarının kapsamlı fonksiyonel ve regresyon testleri yürütülmüş; farklı cihaz çözünürlükleri için performans optimizasyonu testleri yapılmış ve mağaza politikalarına tam uyum sağlanarak canlıya alınmıştır.",
    image: "/images/iksir-atolyesi.jpg",
    tags: [
      "iOS & Android",
      "Mobile Game",
      "Casual Simulation",
      "UI/UX Regresyon",
      "App Store",
      "Google Play",
    ],
    features: [
      "Simülasyon ve bulmaca mekaniklerinin AI destekli kodlanması",
      "UI/UX ve animasyon akışlarının fonksiyonel ve regresyon testleri",
      "Farklı cihaz ve çözünürlükler için performans optimizasyonu",
      "Mağaza yayınlama politikaları uyum denetimleri ve onay süreci",
    ],
    metrics: "Çapraz cihaz uyumluluğu, sıfır kritik regresyon hatası",
    githubUrl: "https://github.com/tanersengull",
    liveUrl: "https://github.com/tanersengull",
    featured: true,
  },
];
