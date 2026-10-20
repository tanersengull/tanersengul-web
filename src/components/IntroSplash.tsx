"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

export function IntroSplash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sayfa yenilendiğinde her zaman en tepeden başlasın (Request 3)
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }

    // 3.5 saniye sonra pürüzsüzce kapanır
    const timer = setTimeout(() => {
      setIsVisible(false);
      window.scrollTo(0, 0);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b] text-white cursor-pointer select-none overflow-hidden"
          title="Geçmek için tıklayın"
        >
          {/* Ambient Deep Midnight Navy Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_50%_50%,rgba(30,58,138,0.4)_0%,transparent_70%)] pointer-events-none" />

          {/* Architectural Background Grid Texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* Center Brand Identity */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl w-full">
            
            {/* TS Monogram Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-13 h-13 rounded-2xl bg-white text-neutral-950 flex items-center justify-center font-mono text-base font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-6"
            >
              TS
            </motion.div>

            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-950/70 text-blue-200 border border-blue-800/60 mb-5 backdrop-blur-md shadow-xs whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{personalInfo.title}</span>
            </motion.div>

            {/* Name: ASLA ALT ALTA GEÇMEZ, SADECE YAN YANA (whitespace-nowrap) */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase mb-4 drop-shadow-[0_4px_30px_rgba(30,58,138,0.7)] whitespace-nowrap select-none"
            >
              TANER ŞENGÜL
            </motion.h1>

            {/* Glowing Accent Shimmer Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "160px", opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" }}
              className="h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_14px_rgba(96,165,250,0.95)] mb-6"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="text-xs sm:text-sm text-neutral-300 font-medium tracking-wide max-w-sm leading-relaxed"
            >
              Yapay Zeka Destekli Mobil Uygulamalar &amp; Dijital Deneyimler
            </motion.p>

            {/* Subtle Progress / Skip Hint */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-[10px] uppercase tracking-widest text-neutral-500 mt-10 hover:opacity-100 transition-opacity"
            >
              Girişi Geçmek İçin Tıklayın
            </motion.span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
