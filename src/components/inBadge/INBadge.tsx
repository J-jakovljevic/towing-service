import { motion, useReducedMotion } from "motion/react";

import { YELLOW, accentFont } from "@/utils/theme";

type INBadgeProps = {
  size?: "sm" | "lg";
  rotates?: boolean;
};

const INBadge = ({ size = "sm", rotates = false }: INBadgeProps) => {
  const shouldReduceMotion = useReducedMotion();
  const width = size === "lg" ? 58 : 40;
  const height = size === "lg" ? 44 : 30;
  const fontSize = size === "lg" ? "1.6rem" : "1.05rem";

  return (
    <div
      className="shrink-0"
      style={{ width, height, perspective: 600 }}
    >
      <motion.div
        className="relative flex h-full w-full items-center justify-center"
        animate={rotates && !shouldReduceMotion ? { rotateY: -360 } : undefined}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        style={{
          transform: "skewX(-8deg)",
          transformStyle: "preserve-3d",
          backgroundColor: "#0a0a0a",
          border: `2px solid ${YELLOW}`,
        }}
      >
        <span
          style={{
            display: "block",
            transform: "translate(-0.08em, -0.04em) skewX(8deg)",
            fontFamily: accentFont,
            fontWeight: 900,
            fontStyle: "italic",
            color: YELLOW,
            fontSize,
            lineHeight: 1,
          }}
        >
          IN
        </span>
      </motion.div>
    </div>
  );
};

export default INBadge;
