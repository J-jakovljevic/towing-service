import { motion } from "motion/react";

import HeroContent from "./HeroContent";

type HeroMobileLayoutProps = {
  heroImageMobile: string;
};

const HeroMobileLayout = ({ heroImageMobile }: HeroMobileLayoutProps) => {
  return (
    <div className="flex h-[calc(100svh-81px)] flex-col md:hidden">
      <motion.img
        src={heroImageMobile}
        alt="IN Workshop tow truck at golden hour"
        className="absolute inset-0 h-full w-full object-cover object-[center_50%] max-[449px]:blur-[1px] min-[450px]:object-[center_62%]"
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
