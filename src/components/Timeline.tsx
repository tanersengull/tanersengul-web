"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { experiencesData, certificationsData, Experience } from "@/data/portfolioData";
import { TiltCard } from "./TiltCard";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  Award, 
  Layers,
  ChevronDown
} from "lucide-react";

/**
 * Kademe Kademe Basamaklanan Katman Kartı (Stepped Cascading Deck)
 * Kartlar birbirini tamamen kapatmaz; ilk kart en üstte kalır, 2. kart biraz altta,
 * 3. kart onun bir tık altında kademe kademe basamaklanarak yerleşir.
 */
function StackedCardItem({
  item,
  index,
  total,
  progress,
  stepOffset,
}: {
  item: Experience;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stepOffset: number;
}) {
  const isWork = item.type === "experience";
  const totalSteps = total - 1;
  const targetRestY = index * stepOffset;

  // Matematiksel kademeli iniş ve basamaklanma noktaları
  const points = useMemo(() => {
    if (totalSteps <= 0) {
      return {
        inputs: [0, 1],
        y: [targetRestY, targetRestY],
        opacity: [1, 1],
      };
    }

    const stepSize = 1.0 / totalSteps;

    if (index === 0) {
      return {
        inputs: [0.0, 1.0],
        y: [0, 0],
        opacity: [1.0, 1.0],
      };
    }

    const enterStart = (index - 1) * stepSize + 0.01;
    const enterEnd = index * stepSize - 0.01;

    // Mobilde devasa piksel sıçramaları (520px) yerine pürüzsüz 150px süzülme mesafesi
    const travelDistance = 150;
    const startY = targetRestY + travelDistance;

    const inputs = [0.0, enterStart, enterEnd, 1.0];
    const yVals = [startY, startY, targetRestY, targetRestY];
    const opacityVals = [0.0, 0.0, 1.0, 1.0];

    return {
      inputs,
      y: yVals,
      opacity: opacityVals,
    };
  }, [index, totalSteps, targetRestY]);

  const y = useTransform(progress, points.inputs, points.y);
  const opacity = useTransform(progress, points.inputs, points.opacity);

  return (
    <motion.div
      style={{
        y,
        opacity,
        zIndex: 10 + index,
      }}
      className="absolute inset-x-0 top-0 will-change-transform [transform:translate3d(0,0,0)] [backface-visibility:hidden]"
    >
      <TiltCard
        maxTilt={3}
        className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-300 dark:border-neutral-800 shadow-md sm:shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.45)] sm:dark:shadow-[0_10px_35px_rgba(0,0,0,0.65)] hover:border-blue-700/50 transition-colors duration-200"
      >
        <TimelineCardContent item={item} />
      </TiltCard>
    </motion.div>
  );
}

/**
 * Reusable Card Content for both Mobile CSS Sticky and Desktop Framer Motion
 */
function TimelineCardContent({ item }: { item: Experience }) {
  const isWork = item.type === "experience";
  return (
    <>
      {/* Daima Görünen Kademe Başlık Şeridi */}
      <div className="flex items-center justify-between gap-2 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
          <span className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white truncate max-w-[200px] sm:max-w-xs">
            {item.company}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
              isWork
                ? "bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60"
                : "bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60"
            }`}
          >
            {isWork ? <Briefcase className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
            <span>{isWork ? "İş Deneyimi" : "Eğitim"}</span>
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-medium text-neutral-500">
            <Calendar className="w-3 h-3" />
            {item.period}
          </span>
        </div>
      </div>

      {/* Role & Period (Mobile) */}
      <div className="flex items-baseline justify-between gap-2 mb-1.5">
        <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
          {item.role}
        </h3>
        <span className="sm:hidden text-[11px] font-mono font-medium text-neutral-500 shrink-0">
          {item.period}
        </span>
      </div>

      {/* Short Description */}
      <p className="text-[13px] sm:text-sm font-normal text-neutral-800 dark:text-neutral-300 leading-relaxed mb-3 line-clamp-2">
        {item.description}
      </p>

      {/* Highlights */}
      {item.highlights && item.highlights.length > 0 && (
        <ul className="space-y-1 mb-3">
          {item.highlights.slice(0, 2).map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-1.5 text-xs sm:text-[13px] font-normal text-neutral-800 dark:text-neutral-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech Chips */}
      {item.technologies && (
        <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-neutral-200/80 dark:border-neutral-800/80">
          {item.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export function Timeline() {
  const [filter, setFilter] = useState<"all" | "experience" | "education" | "certificates">("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredItems = experiencesData.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const filterTabs = [
    { id: "all", label: "Tüm Yolculuk", count: experiencesData.length, icon: Layers },
    { id: "experience", label: "Deneyimler", count: experiencesData.filter(e => e.type === "experience").length, icon: Briefcase },
    { id: "education", label: "Eğitim", count: experiencesData.filter(e => e.type === "education").length, icon: GraduationCap },
    { id: "certificates", label: "Sertifikalar", count: certificationsData.length, icon: Award },
  ] as const;

  const isCertificates = filter === "certificates";
  const isStackActive = !isCertificates && filteredItems.length > 1;

  // Sayfa kilitliyken kartların kademe kademe inmesini sağlayan scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Tab değiştiğinde sayfanın aşağıya fırlatılması (layout shift/scroll jump) bug'ını önleyen akıllı çapa
  const handleTabChange = (newTab: "all" | "experience" | "education" | "certificates") => {
    if (newTab === filter) return;

    const timelineEl = document.getElementById("timeline");
    if (timelineEl) {
      const rect = timelineEl.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const targetScrollY = currentScrollY + rect.top - 70; // 70px navbar payı

      window.scrollTo({
        top: Math.max(0, targetScrollY),
        behavior: "instant",
      });
    }

    setFilter(newTab);
  };

  // Kart sayısına ve ekrana göre kademe aralığı (mobil ve masaüstünde mükemmel orantı)
  const stepOffset = filteredItems.length <= 3 ? 46 : filteredItems.length <= 4 ? 40 : 36;
  const maxStackHeight = (filteredItems.length - 1) * stepOffset + 300;
  const pinnedHeight = `${filteredItems.length * 55 + 20}vh`;

  return (
    <section id="timeline" className="relative">
      
      {/* Sertifikalar Grid Modu */}
      {isCertificates ? (
        <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader filter={filter} onTabChange={handleTabChange} filterTabs={filterTabs} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 animate-in fade-in duration-300">
            {certificationsData.map((cert, idx) => (
              <TiltCard
                key={idx}
                maxTilt={6}
                className="p-5 rounded-2xl glass-panel border border-neutral-200 dark:border-neutral-800 flex items-start gap-3.5 hover:border-blue-900/40 dark:hover:border-blue-900/60 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center shrink-0 border border-neutral-200/60 dark:border-neutral-700/60">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium mt-0.5">
                    {cert.issuer}
                  </p>
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mt-2.5 border border-neutral-200/80 dark:border-neutral-700/70">
                    {cert.year}
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      ) : isStackActive ? (
        <>
          {/* Mobil Görünüm: Saf Native GPU CSS Sticky Stepped Stack (Sıfır JS Scroll Olayı, 120 FPS Yağ Gibi Akıcı) */}
          <div className="md:hidden py-14 px-4 max-w-xl mx-auto">
            <SectionHeader filter={filter} onTabChange={handleTabChange} filterTabs={filterTabs} />

            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 px-2 mt-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="font-semibold uppercase tracking-wider text-[11px]">Kademeli Akış</span>
                <span className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-mono text-[10px]">
                  {filteredItems.length} Kayıt
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                <span>Aşağı kaydırın</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </div>

            <div className="flex flex-col gap-6 pb-16">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    top: `calc(4.75rem + ${index * 38}px)`,
                    zIndex: 10 + index,
                  }}
                  className="sticky"
                >
                  <div className="p-5 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-300 dark:border-neutral-800 shadow-md dark:shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
                    <TimelineCardContent item={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Masaüstü Görünüm: Pinned Scroll-Driven Kademe Kademe Katman Sahnesi */}
          <div
            ref={containerRef}
            style={{ height: pinnedHeight }}
            className="hidden md:block relative"
          >
            {/* Ekran Ortasında Kilitli Pinned Sahne */}
            <div className="sticky top-18 min-h-[calc(100dvh-3.5rem)] flex flex-col justify-between py-4 max-w-4xl mx-auto px-6 overflow-clip">
              
              {/* Header & Filtre Sekmeleri */}
              <div>
                <SectionHeader filter={filter} onTabChange={handleTabChange} filterTabs={filterTabs} />
                
                {/* Kademe Durum Bilgisi */}
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 px-2 mt-3 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold uppercase tracking-wider text-[11px]">Kademeli Görünüm</span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-mono text-[10px]">
                      {filteredItems.length} Kayıt
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                    <span>Kaydırdıkça kademe kademe basamaklanır</span>
                    <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                  </div>
                </div>
              </div>

              {/* Kademe Kademe Kart Sahnesi */}
              <div
                className="relative w-full max-w-3xl mx-auto my-auto"
                style={{ height: `${maxStackHeight}px` }}
              >
                {filteredItems.map((item, index) => (
                  <StackedCardItem
                    key={item.id}
                    item={item}
                    index={index}
                    total={filteredItems.length}
                    progress={scrollYProgress}
                    stepOffset={stepOffset}
                  />
                ))}
              </div>

              {/* Alt Nokta İlerleme Çubuğu */}
              <div className="flex items-center justify-center gap-1.5 py-1">
                {filteredItems.map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 transition-all duration-300"
                  />
                ))}
              </div>

            </div>
          </div>
        </>
      ) : (
        /* Tek Elemanlı Görünüm */
        <div className="py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader filter={filter} onTabChange={handleTabChange} filterTabs={filterTabs} />
          <div className="max-w-3xl mx-auto mt-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="relative">
                <TiltCard
                  maxTilt={4}
                  className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-300 dark:border-neutral-700/80 shadow-md"
                >
                  <TimelineCardContent item={item} />
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}

/**
 * Reusable Section Header with Tabs
 */
function SectionHeader({
  filter,
  onTabChange,
  filterTabs,
}: {
  filter: string;
  onTabChange: (id: "all" | "experience" | "education" | "certificates") => void;
  filterTabs: readonly { id: "all" | "experience" | "education" | "certificates"; label: string; count: number; icon: any }[];
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 mb-1.5 shadow-2xs">
        Yolculuğum
      </span>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
        Deneyim, Eğitim &amp; Sertifikalar
      </h2>

      {/* Interactive Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-neutral-200/50 dark:bg-neutral-900/80 rounded-full mt-3 backdrop-blur-md shadow-2xs">
        {filterTabs.map((tab) => {
          const isSelected = filter === tab.id;
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
                isSelected
                  ? "text-neutral-950 dark:text-white font-bold"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="timelineTabPill"
                  className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-xs -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <TabIcon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              <span className="text-[10px] opacity-70">({tab.count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
