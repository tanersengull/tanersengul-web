"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { ArrowRight, Smartphone, Terminal, Sparkles, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { TiltCard } from "./TiltCard";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800/90 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700/80 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white animate-pulse" />
              <span>{personalInfo.title}</span>
            </div>

            {/* Headline: Dengeli & Şık Boyutta, Farklı Fontlu TANER ŞENGÜL */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-4 uppercase drop-shadow-2xs">
              TANER ŞENGÜL
            </h1>

            {/* Role Subtitle */}
            <p className="text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4 tracking-tight">
              {personalInfo.title}
            </p>

            <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-300 leading-relaxed mb-8 max-w-xl">
              {personalInfo.heroSubtitle}
            </p>

            {/* Quick Interest Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {personalInfo.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/70 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* CTAs (Projeleri İncele + CV İndir) */}
            <div className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-950 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Projelerimi İncele</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="/Taner_Sengul_CV.pdf"
                download="Taner_Sengul_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white hover:bg-neutral-100 text-neutral-950 border border-neutral-300 dark:bg-[#18181b] dark:hover:bg-[#222226] dark:text-white dark:border-neutral-700 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="tracking-tight text-neutral-950 dark:text-white">Özgeçmişimi İndir (CV)</span>
              </a>
            </div>

            {/* Social Links Row (Çizgisiz & Pürüzsüz) */}
            <div className="flex items-center gap-3 pt-2 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Bağlantılar
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profili"
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-150 hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profili"
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-150 hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Clean Monochrome Photo Card with Depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm group">
              {/* Subtle ambient navy glow behind photo card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-900/20 via-blue-800/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-3xl glass-panel p-3 border border-neutral-200 dark:border-neutral-800 shadow-md group-hover:border-blue-900/40 dark:group-hover:border-blue-900/50 transition-all duration-300">
                <div className="relative w-full h-[26rem] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating active badge on top of photo */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900/80 text-white backdrop-blur-md border border-white/10 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>Aktif Geliştirme &amp; Fikirler</span>
                    </span>
                  </div>

                  {/* Info pill on bottom of photo */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white z-10">
                    <div>
                      <p className="text-sm font-bold tracking-tight">{personalInfo.name}</p>
                      <p className="text-xs text-neutral-300 font-medium">Mobile AI Application Developer</p>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-md border border-white/20">
                      iOS / Android
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Strip - Elevated Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {personalInfo.stats.map((stat, i) => (
            <TiltCard
              key={i}
              maxTilt={7}
              className="p-4 sm:p-5 rounded-2xl glass-panel border border-neutral-200/80 dark:border-neutral-800/80 hover:border-blue-900/40 dark:hover:border-blue-900/60 transition-all duration-200 shadow-2xs group flex flex-col justify-between"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                {stat.label}
              </span>
            </TiltCard>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
