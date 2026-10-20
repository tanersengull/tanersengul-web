"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { personalInfo } from "@/data/portfolioData";
import { 
  Sun, 
  Moon, 
  Menu, 
  X
} from "lucide-react";

export function Navbar() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ["about", "timeline", "skills", "projects", "contact"];
      let current = "hero";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Ekranın üst çeyreğinde aktif olma eşiği
          if (rect.top <= 240 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımda", href: "#about", id: "about" },
    { name: "Yolculuğum", href: "#timeline", id: "timeline" },
    { name: "Yetenekler", href: "#skills", id: "skills" },
    { name: "Projeler", href: "#projects", id: "projects" },
    { name: "İletişim", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3.5">
      {/* Pürüzsüz & Çizgisiz Panel: Sayfa tepedeyken şeffaf, aşağı kaydırınca siyah/beyaz panel belirir */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 pointer-events-none transition-opacity duration-300 ease-out ${
          scrolled ? "opacity-100" : "opacity-0"
        } bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-md`}
        style={{ border: "none", outline: "none", boxShadow: "none" }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-bold text-base tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-105">
            TS
          </div>
          <span className="text-neutral-900 dark:text-white font-semibold">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Nav Links - Kesinlikle çizgi/flicker oluşturmayan pürüzsüz geçiş */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-200/60 dark:bg-neutral-900/80 p-1 rounded-full backdrop-blur-md shadow-2xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Theme Switch + Mobile Toggle) */}
        <div className="flex items-center gap-2">

          {/* iOS-Style Sliding Switch (Aç/Kapa Yuvarlak Kaydırmalı Buton) */}
          <button
            onClick={toggleTheme}
            type="button"
            role="switch"
            aria-checked={resolvedTheme === "dark"}
            aria-label="Temayı değiştir (Açık/Koyu Mod)"
            className="group relative inline-flex h-7 w-[52px] shrink-0 cursor-pointer items-center rounded-full bg-neutral-200 dark:bg-neutral-800 p-0.5 border border-neutral-300 dark:border-neutral-700 transition-colors duration-300 focus:outline-hidden shadow-inner"
          >
            {/* Sağa / Sola Kayar Yuvarlak Buton (Sliding Round Thumb) */}
            <span
              className={`pointer-events-none flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-neutral-900 shadow-md transform transition-transform duration-300 ease-out ${
                resolvedTheme === "dark" ? "translate-x-[24px]" : "translate-x-0"
              }`}
            >
              {resolvedTheme === "dark" ? (
                <Moon className="w-3.5 h-3.5 text-blue-400" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-500" />
              )}
            </span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl px-4 pt-3 pb-5 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
