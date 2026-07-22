import { motion, useReducedMotion } from "motion/react";

import NavBar from "@/components/navBar/NavBar";
import HeroSection from "@/components/heroSection/HeroSection";
import StatsGrid from "@/components/statsGrid/StatsGrid";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import PromiseSection from "@/components/promiseSection/PromiseSection";
import SiteFooter from "@/components/siteFooter/SiteFooter";
import ScrollProgress from "@/components/scrollProgress/ScrollProgress";
import { heroImageDesktop, heroImageMobile } from "@/assets";
import { stats } from "@/models/home";

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <ScrollProgress />
      <NavBar />

      <HeroSection
        heroImageDesktop={heroImageDesktop}
        heroImageMobile={heroImageMobile}
      />

      <div id="overview" className="scroll-mt-4 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-wrap items-center justify-center gap-4 md:gap-10 px-6 py-3.5 text-xs font-bold tracking-widest uppercase"
          style={{
            backgroundColor: "#f5b800",
            color: "#0a0a0a",
            transformOrigin: "left",
          }}
        >
          {!shouldReduceMotion && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 w-24"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                transform: "skewX(-20deg)",
              }}
              initial={{ left: "-30%" }}
              animate={{ left: "120%" }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
              }}
            />
          )}

          <span className="flex items-center gap-2">
            24/7 Roadside Assistance
          </span>

          <span className="hidden md:block opacity-30">-</span>

          <span className="flex items-center gap-2">
            One Call. We Handle It All.
          </span>

          <span className="hidden md:block opacity-30">-</span>

          <span className="flex items-center gap-2">
            Day or Night - We&apos;re Here To Help
          </span>
        </motion.div>
      </div>

      <StatsGrid stats={stats} />
      <ServicesSection />
      <PromiseSection />
      <SiteFooter />
    </div>
  );
};

export default HomePage;
