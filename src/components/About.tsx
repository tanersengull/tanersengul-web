"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { TiltCard } from "./TiltCard";
import { 
  Smartphone, 
  Lightbulb, 
  Music, 
  Activity, 
  GraduationCap, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: Smartphone,
      title: "Mobile AI Uygulamaları",
      description: "iOS ve Android ekosistemlerinde çalışan, LLM API'leri ve akıllı modellerle zenginleştirilmiş kullanıcı odaklı mobil deneyimler geliştiriyorum.",
    },
    {
      icon: Lightbulb,
      title: "Fikir Üretimi & Prototipleme",
      description: "Yeni bir fikir zihnimde canlandığında bunu hızla projelendirip telefon ekranında çalışan akıcı bir dijital ürüne dönüştürmeyi çok seviyorum.",
    },
    {
      icon: GraduationCap,
      title: "Elektronik & Donanım Temeli",
      description: "Haliç Üniversitesi Elektronik Teknolojisi mezuniyetiyle donanım, devreler ve sistem mantığının sağlam zeminine sahibim.",
    },
    {
      icon: Activity,
      title: "Spor, Müzik & Yaşam Dengesi",
      description: "Müzik eşliğinde odaklanmak, düzenli spor yapmak ve uzun yürüyüşlerle zihnimi tazelemek üretkenliğimin en büyük kaynağı.",
    },
  ];

  const quickDetails = [
    { icon: GraduationCap, label: "Eğitim", value: "Haliç Üni. — Elektronik Teknolojisi" },
    { icon: Music, label: "Müzik & Yürüyüş", value: "Odaklanma, Doğa Yürüyüşleri & Spor" },
    { icon: Sparkles, label: "Odak Alanlarım", value: "Mobile AI (iOS/Android) & Fikir Geliştirme" },
    { icon: Smartphone, label: "Platformlar", value: "Apple App Store & Google Play Console" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 mb-3 shadow-2xs">
            Hakkımda
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Elektronikten Mobil Yazılıma, Fikirden Üretime
          </h2>
          <p className="mt-3 text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200 max-w-xl">
            10 Ekim 1998 İstanbul doğumluyum. Elektronik altyapısı, yazılım merakı ve üretme heyecanı.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl overflow-hidden glass-panel p-3 border border-neutral-200 dark:border-neutral-800 shadow-md">
              <div className="relative h-[25rem] w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={personalInfo.secondaryAvatarUrl}
                  alt="Taner Şengül"
                  fill
                  className="object-cover object-top hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Story & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white mb-4 tracking-tight">
              Yazılım Tutkusu, Fikirler &amp; İlgi Alanlarım
            </h3>

            <div className="space-y-4 text-neutral-900 dark:text-neutral-200 text-base sm:text-[17px] font-normal leading-relaxed mb-8">
              {personalInfo.about.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {quickDetails.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/90 dark:border-neutral-800 flex items-center gap-3 transition-colors hover:border-neutral-400 dark:hover:border-neutral-600"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-950 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Geliştirdiğim Projeler</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars with smooth 3D Tilt & hover elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={8}
                  className="p-6 rounded-2xl glass-panel border border-neutral-200 dark:border-neutral-800 hover:border-blue-900/40 dark:hover:border-blue-900/60 transition-all duration-250 shadow-2xs hover:shadow-sm group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mb-4 transition-transform group-hover:scale-105 border border-neutral-200/60 dark:border-neutral-700/60">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-sm font-normal text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
