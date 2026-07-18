import { motion } from "motion/react";

import NavBar from "@/components/navBar/NavBar";
import HeroSection from "@/components/heroSection/HeroSection";
import StatsGrid from "@/components/statsGrid/StatsGrid";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import PromiseSection from "@/components/promiseSection/PromiseSection";
import SiteFooter from "@/components/siteFooter/SiteFooter";
import { heroImageDesktop, heroImageMobile } from "@/assets";
import { stats } from "@/models/home";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />

      <HeroSection
        heroImageDesktop={heroImageDesktop}
        heroImageMobile={heroImageMobile}
      />

      <div className="overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-10 px-6 py-3.5 text-xs font-bold tracking-widest uppercase"
          style={{
            backgroundColor: "#f5b800",
            color: "#0a0a0a",
            transformOrigin: "left",
          }}
        >
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
