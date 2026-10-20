"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/portfolioData";
import { 
  Layout, 
  Server, 
  CheckCircle2, 
  Cpu, 
  Smartphone,
  Check, 
  Layers
} from "lucide-react";
import { TiltCard } from "./TiltCard";

export function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const iconMap: Record<string, React.ElementType> = {
    Smartphone,
    Layout,
    Server,
    CheckCircle2,
    Cpu,
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
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
            Yetenekler
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Araçlar &amp; Yetkinliklerim
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
            Mobil yapay zeka, iOS &amp; Android mimarisi, test ve donanım altyapısı araçları.
          </p>
        </motion.div>

        {/* Category Selector Tabs with 3D Tilt */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {skillsData.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Layers;
            const isSelected = activeCategoryIndex === idx;

            return (
              <TiltCard
                key={idx}
                maxTilt={8}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border-neutral-950 dark:border-white shadow-xs scale-[1.01]"
                    : "glass-panel border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:border-blue-900/40 dark:hover:border-blue-900/60"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                  isSelected
                    ? "bg-neutral-800 text-white dark:bg-neutral-200 dark:text-neutral-900"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">
                    {category.title}
                  </h3>
                  <p className={`text-[11px] mt-0.5 line-clamp-1 ${
                    isSelected ? "text-neutral-300 dark:text-neutral-600" : "text-neutral-500 dark:text-neutral-400"
                  }`}>
                    {category.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Active Category Skills Detail Card */}
        <motion.div
          key={activeCategoryIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-neutral-200 dark:border-neutral-800 gap-3">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                {skillsData[activeCategoryIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                {skillsData[activeCategoryIndex].description}
              </p>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">
              {skillsData[activeCategoryIndex].skills.length} Yetkinlik
            </span>
          </div>

          {/* Clean Skill items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skillsData[activeCategoryIndex].skills.map((skill, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-150 hover:-translate-y-0.5"
              >
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  {skill.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shrink-0 ml-2">
                  {skill.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
