import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";

const ScrollCue = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 8);
  });

  return (
    <motion.a
      href="#overview"
      aria-label="Scroll to explore our services"
      className="absolute bottom-2 right-3 z-20 flex flex-col items-center gap-0.5 text-[9px] font-bold uppercase tracking-[0.22em] text-white md:bottom-5 md:right-auto md:left-1/2 md:-translate-x-1/2 md:text-[10px]"
      initial={{ opacity: 0, y: 12 }}
      animate={hasScrolled ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
      transition={
        hasScrolled
          ? { duration: 0.2 }
          : { delay: 1.4, duration: 0.5 }
      }
      style={{ pointerEvents: hasScrolled ? "none" : "auto" }}
    >
      <span>Scroll</span>
      <motion.span
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={15} strokeWidth={2.5} />
      </motion.span>
    </motion.a>
  );
};

export default ScrollCue;
