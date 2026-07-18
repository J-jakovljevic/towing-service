import { motion } from "motion/react";

import HeroContent from "./HeroContent";

type HeroMobileLayoutProps = {
  heroImageMobile: string;
};

const HeroMobileLayout = ({ heroImageMobile }: HeroMobileLayoutProps) => {
  return (
    <div className="md:hidden flex flex-col" style={{ height: "200vw" }}>
      <motion.img
        src={heroImageMobile}
        alt="IN Workshop tow truck at golden hour"
        className="absolute inset-0 w-full h-full object-cover object-top"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.1) 45%, rgba(10,10,10,0.8) 100%)",
        }}
      />

      <HeroContent isDesktop={false} />
    </div>
  );
};

export default HeroMobileLayout;
