import { IntroSplash } from "@/components/IntroSplash";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { NavyShimmerBackground } from "@/components/NavyShimmerBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100">
      {/* Cinematic Site Entrance Splash Screen */}
      <IntroSplash />

      {/* Dynamic Shimmering Navy Background Lines & Beams */}
      <NavyShimmerBackground />

      {/* Sticky Clean Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

