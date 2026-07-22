import { motion, useScroll, useSpring } from "motion/react";

import { YELLOW } from "@/utils/theme";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-1 origin-left"
      style={{
        scaleX,
        backgroundColor: YELLOW,
      }}
    />
  );
};

export default ScrollProgress;
