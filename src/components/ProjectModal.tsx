"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, TrendingUp } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl max-h-[88dvh] overflow-y-auto glass-panel rounded-2xl shadow-xl border border-neutral-300 dark:border-neutral-800 z-10 [webkit-overflow-scrolling:touch]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-neutral-900/80 hover:bg-neutral-900 text-white flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-56 sm:h-64 bg-neutral-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-4 left-5 right-5">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-white text-black mb-1.5 inline-block">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {/* Store Badges (Madde 5) */}
          <div className="flex flex-wrap items-center gap-2 pb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-2xs">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.58.67-.99 1.74-.85 2.78 1 .08 2.02-.53 2.57-1.28z"/>
              </svg>
              <span>Apple App Store</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.027 2.027 0 0 1-.61-.954V2.768c.117-.37.332-.705.61-.954zm11.238 11.24l2.585 2.585-12.395 7.156 9.81-9.741zm0-2.108l-9.81-9.741 12.395 7.156-2.585 2.585zm1.484 1.054l4.63-2.674c.665-.384 1.039-.993 1.039-1.326s-.374-.942-1.039-1.326l-4.63-2.674-1.748 1.748 1.748 6.252z"/>
              </svg>
              <span>Google Play Store</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Mağaza Politikalarına Uyumlu &amp; Canlı</span>
            </span>
          </div>

          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1.5">
              Proje Özeti &amp; Çözüm
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Impact & Metrics */}
          {project.metrics && (
            <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-neutral-700 dark:text-neutral-300 shrink-0" />
              <div>
                <p className="text-xs font-bold text-neutral-900 dark:text-white">Öne Çıkan Başarı</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-300">{project.metrics}</p>
              </div>
            </div>
          )}

          {/* Features list */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5">
                Öne Çıkan Süreçler &amp; Testler
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
              Kullanılan Araçlar &amp; Teknolojiler
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-950 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub İncele</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
