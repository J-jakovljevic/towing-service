import { motion } from "motion/react";

import HeroContent from "./HeroContent";

type HeroDesktopLayoutProps = {
  heroImageDesktop: string;
};

const HeroDesktopLayout = ({ heroImageDesktop }: HeroDesktopLayoutProps) => {
  return (
    <div className="hidden md:block relative h-[92vh]">
      <motion.img
        src={heroImageDesktop}
        alt="IN Workshop tow truck recovering a white box truck at golden hour"
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.15) 45%, rgba(10,10,10,0.78) 100%)",
        }}
      />

      <HeroContent isDesktop />
    </div>
  );
};

export default HeroDesktopLayout;
