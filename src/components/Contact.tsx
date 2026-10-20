"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Clock 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { TiltCard } from "./TiltCard";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 mb-3 shadow-2xs">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            İletişim &amp; İş Birlikleri
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-lg">
            Mobil yapay zeka projeleri, yeni uygulama fikirleri veya iş birlikleri için bana doğrudan ulaşabilirsiniz.
          </p>
        </motion.div>

        {/* Centered Direct Contact Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* E-posta Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="h-full"
          >
            <TiltCard
              maxTilt={8}
              className="p-6 rounded-3xl glass-panel border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:border-blue-900/40 dark:hover:border-blue-900/60 transition-all duration-200 shadow-2xs hover:shadow-md h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mb-4 border border-neutral-200/60 dark:border-neutral-700/60">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
                  E-posta
                </h4>
                <p className="text-sm font-bold text-neutral-900 dark:text-white mt-1 break-all">
                  {personalInfo.email}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-center bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-neutral-950 transition-all shadow-2xs active:scale-98"
                >
                  Mail At
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="py-2 px-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-all flex items-center gap-1.5 text-xs font-medium active:scale-98 border border-neutral-200/60 dark:border-neutral-700/60"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopyala</span>
                    </>
                  )}
                </button>
              </div>
            </TiltCard>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="h-full"
          >
            <TiltCard
              maxTilt={8}
              className="p-6 rounded-3xl glass-panel border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:border-blue-900/40 dark:hover:border-blue-900/60 transition-all duration-200 shadow-2xs hover:shadow-md group cursor-pointer h-full"
            >
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-neutral-200/60 dark:border-neutral-700/60">
                    <LinkedinIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
                    LinkedIn
                  </h4>
                  <p className="text-sm font-bold text-neutral-900 dark:text-white mt-1">
                    Taner Şengül
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">
                    in/taner-şengül-196349223
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-neutral-900 dark:text-white mt-6 group-hover:underline">
                  <span>Profili Görüntüle</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </TiltCard>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="h-full"
          >
            <TiltCard
              maxTilt={8}
              className="p-6 rounded-3xl glass-panel border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:border-blue-900/40 dark:hover:border-blue-900/60 transition-all duration-200 shadow-2xs hover:shadow-md group cursor-pointer h-full"
            >
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-neutral-200/60 dark:border-neutral-700/60">
                    <GithubIcon className="w-5 h-5 text-neutral-900 dark:text-white" />
                  </div>
                  <h4 className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
                    GitHub
                  </h4>
                  <p className="text-sm font-bold text-neutral-900 dark:text-white mt-1">
                    tanersengull
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Açık kaynak depolar &amp; kodlar
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-neutral-900 dark:text-white mt-6 group-hover:underline">
                  <span>Projeleri İncele</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </TiltCard>
          </motion.div>

        </div>

        {/* Subtle Response Note */}
        <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center gap-2 text-center">
          <Clock className="w-4 h-4 text-neutral-500" />
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            E-posta ve LinkedIn üzerinden gelen tüm mesajlara özenle ve hızla geri dönüş yapıyorum.
          </p>
        </div>

        {/* E-posta Kopyalandı Toast Bildirimi (Madde 2) */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-2xl border border-neutral-800 dark:border-neutral-200"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold">
                E-posta panoya kopyalandı!
              </span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
