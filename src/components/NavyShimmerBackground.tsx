"use client";

import React, { useMemo } from "react";

export function NavyShimmerBackground() {
  // 52 adet sıklaştırılmış, defter çizgisi gibi düzenli aralıklarla dizilmiş kıvrımlı çizgiler (Static Memoized)
  const lines = useMemo(() => {
    const lineCount = 52;
    return Array.from({ length: lineCount }, (_, i) => {
      const y = (i / (lineCount - 1)) * 1140 - 30;
      const phase = i * 0.16;
      const amp = 46 + Math.sin(i * 0.22) * 14;

      const d = `M -30 ${y}
                 C 240 ${y - amp * Math.cos(phase)}, 
                   500 ${y + amp * Math.sin(phase + 0.6)}, 
                   780 ${y - amp * Math.cos(phase + 1.2)}
                 C 1060 ${y + amp * Math.sin(phase + 1.8)}, 
                   1340 ${y - amp * Math.cos(phase + 2.4)}, 
                   1620 ${y + amp * Math.sin(phase + 3.0)}
                 C 1760 ${y - amp * Math.cos(phase + 3.6)}, 
                   1860 ${y + amp * Math.sin(phase + 4.0)}, 
                   1950 ${y}`;

      const isMajor = i % 4 === 0;
      const isMedium = i % 2 === 0;
      const motionGroup = i % 2 === 0 ? "wave-motion-1" : "wave-motion-2";
      const beamClass = `wave-beam-${(i % 5) + 1}`;

      return {
        id: i,
        d,
        isMajor,
        isMedium,
        motionGroup,
        beamClass,
      };
    });
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none [contain:strict] [backface-visibility:hidden]"
    >
      {/* 1. Koyu Lacivert Arka Işık Alanları (Sabit & Titremesiz, Dark Modda Yoğun) */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-95 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(ellipse 1100px 700px at 50% 0%, rgba(23, 37, 84, 0.5) 0%, transparent 75%),
            radial-gradient(circle 750px at 70% 35%, rgba(30, 58, 138, 0.25) 0%, transparent 60%),
            radial-gradient(ellipse 950px 650px at 90% 65%, rgba(15, 23, 42, 0.65) 0%, transparent 75%),
            radial-gradient(ellipse 900px 650px at 10% 85%, rgba(23, 37, 84, 0.5) 0%, transparent 75%)
          `,
        }}
      />

      {/* Açık mod için zengin, derin ve lüks safir/lacivert ambient aydınlatma */}
      <div
        className="absolute inset-0 opacity-85 dark:opacity-0 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(ellipse 1200px 750px at 50% 0%, rgba(219, 234, 254, 0.75) 0%, transparent 70%),
            radial-gradient(circle 850px at 85% 35%, rgba(199, 210, 254, 0.55) 0%, transparent 65%),
            radial-gradient(ellipse 1000px 700px at 10% 70%, rgba(224, 231, 255, 0.65) 0%, transparent 70%),
            radial-gradient(circle 750px at 50% 55%, rgba(219, 234, 254, 0.45) 0%, transparent 65%)
          `,
        }}
      />

      {/* 2. Sık, Kıvrımlı Dalgalı Hatlar (Beyaz modda okunaklılığı bozmayan yumuşak safir, koyu modda derin lacivert) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 dark:opacity-85 transition-opacity duration-300 overflow-hidden [contain:paint]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0px, transparent 65px, black 115px)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0px, transparent 65px, black 115px)",
        }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ana Belirgin Koyu Lacivert Gradyan */}
          <linearGradient id="distinctNavyGradMajor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.65" />
            <stop offset="20%" stopColor="#1e40af" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="1" />
            <stop offset="80%" stopColor="#1e40af" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.65" />
          </linearGradient>

          {/* Standart Defter Çizgisi Koyu Lacivert */}
          <linearGradient id="distinctNavyGradMedium" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#172554" stopOpacity="0.45" />
            <stop offset="25%" stopColor="#1e3a8a" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#1e3a8a" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#172554" stopOpacity="0.45" />
          </linearGradient>

          {/* İnce Ara Çizgiler */}
          <linearGradient id="distinctNavyGradMinor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.3" />
          </linearGradient>

          {/* Hareket Eden Işıltılı Demet Gradyanı */}
          <linearGradient id="radiantShimmerBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0" />
            <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </linearGradient>

          {/* Işıma Hale Gradyanı (Filtresiz Donanım Hızlandırmalı) */}
          <linearGradient id="radiantHaloBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0" />
            <stop offset="45%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 52 Kıvrımlı Dalgalı Hat (Sıfır Titreme, Temiz Kenar Sınırları) */}
        {lines.map((line) => {
          let strokeUrl = "url(#distinctNavyGradMinor)";
          let strokeWidth = 1.3;

          if (line.isMajor) {
            strokeUrl = "url(#distinctNavyGradMajor)";
            strokeWidth = 2.0;
          } else if (line.isMedium) {
            strokeUrl = "url(#distinctNavyGradMedium)";
            strokeWidth = 1.6;
          }

          return (
            <g key={line.id} className={line.motionGroup}>
              {/* Sabit Koyu Lacivert Hat */}
              <path
                d={line.d}
                stroke={strokeUrl}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />

              {/* Dual-Stroke Vektör Işıltısı (Filtresiz, GPU ile Süper Akıcı) */}
              {line.isMajor && (
                <>
                  {/* Yumuşak Dış Işıma (Halo) */}
                  <path
                    d={line.d}
                    stroke="url(#radiantHaloBeam)"
                    strokeWidth={strokeWidth + 3.5}
                    strokeLinecap="round"
                    className={line.beamClass}
                  />
                  {/* Parlak İç Işık */}
                  <path
                    d={line.d}
                    stroke="url(#radiantShimmerBeam)"
                    strokeWidth={strokeWidth + 0.8}
                    strokeLinecap="round"
                    className={line.beamClass}
                  />
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
