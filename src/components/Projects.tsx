"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData, Project } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import { TiltCard } from "./TiltCard";
import { 
  ArrowUpRight, 
  Eye,
  Calendar,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export function Projects() {
  const [filter, setFilter] = useState<string>("Tümü");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["Tümü", "Mobile AI", "Mobil & Oyun"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "Tümü") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 mb-3 shadow-2xs">
            Projelerim
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Geliştirdiğim &amp; Test Ettiğim Ürünler
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-lg">
            Google Antigravity ve Claude Code asistanlarıyla geliştirilmiş, App Store ve Google Play onaylı projeler.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-neutral-100/90 dark:bg-neutral-900/90 rounded-full mt-8 border border-neutral-200/90 dark:border-neutral-800/90 backdrop-blur-md">
            {categories.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                    isSelected
                      ? "text-white dark:text-neutral-950"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="projectCategoryPill"
                      className="absolute inset-0 bg-neutral-950 dark:bg-white rounded-full shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard
                maxTilt={6}
                className="group rounded-3xl glass-panel overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xs hover:shadow-md hover:border-blue-900/40 dark:hover:border-blue-900/60 dark:hover:shadow-[0_0_30px_-5px_rgba(30,58,138,0.35)] transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Image Preview with Zoom */}
                <div className="relative w-full h-64 bg-neutral-950 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Badges in Image */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-neutral-950 shadow-xs">
                      {project.category}
                    </span>
                    {project.date && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white backdrop-blur-md border border-white/10">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </span>
                    )}
                  </div>

                  {/* Hover overlay action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 bg-black/30 backdrop-blur-[2px]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-neutral-950 shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detayları İncele</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {project.roleTitle && (
                      <p className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1.5">
                        {project.roleTitle}
                      </p>
                    )}
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 cursor-pointer group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors tracking-tight"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Store Badges (Madde 5) */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-2xs">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.58.67-.99 1.74-.85 2.78 1 .08 2.02-.53 2.57-1.28z"/>
                      </svg>
                      <span>App Store</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 shadow-2xs">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.027 2.027 0 0 1-.61-.954V2.768c.117-.37.332-.705.61-.954zm11.238 11.24l2.585 2.585-12.395 7.156 9.81-9.741zm0-2.108l-9.81-9.741 12.395 7.156-2.585 2.585zm1.484 1.054l4.63-2.674c.665-.384 1.039-.993 1.039-1.326s-.374-.942-1.039-1.326l-4.63-2.674-1.748 1.748 1.748 6.252z"/>
                      </svg>
                      <span>Google Play</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Onaylı &amp; Canlı</span>
                    </span>
                  </div>

                  {/* Tech Chips */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action row (Çizgisiz & Temiz) */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-bold text-neutral-900 dark:text-white hover:underline flex items-center gap-1 transition-all"
                      >
                        <span>Vaka Raporu &amp; Testler</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repo"
                        className="w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-150 hover:-translate-y-0.5"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
