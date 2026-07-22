import { motion } from "motion/react";
import { scaleIn } from "@/utils/animations";
import { YELLOW } from "@/utils/theme";
import type { StatItem } from "@/models/home";

type StatsGridProps = {
  stats: StatItem[];
};

const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <motion.section
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border"
    >
      {stats.map(({ num, label }) => (
        <motion.div
          key={label}
          variants={scaleIn}
          whileHover={{
            backgroundColor: "#1a1a1a",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="bg-card text-center py-10 px-4 cursor-default"
        >
          <motion.div
            className="text-5xl md:text-6xl font-black leading-none mb-2"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: YELLOW,
            }}
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {num}
          </motion.div>

          <div className="text-xs font-bold tracking-widest uppercase text-foreground/50">
            {label}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default StatsGrid;
