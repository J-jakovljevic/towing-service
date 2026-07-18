import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

import { promises } from "@/models/home";
import { slideRight } from "@/utils/animations";
import { YELLOW } from "@/utils/theme";

const PromiseSection = () => {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="font-black leading-none tracking-tighter"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: YELLOW,
              fontSize: "clamp(6rem,18vw,11rem)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 180,
              damping: 20,
            }}
          >
            24/7
          </motion.div>

          <motion.h2
            variants={slideRight}
            className="text-2xl md:text-3xl font-black uppercase leading-tight mt-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Roadside Assistance
          </motion.h2>

          <motion.p
            variants={slideRight}
            className="mt-3 text-sm text-foreground/50 leading-relaxed max-w-xs"
          >
            Day or night - our team is always on standby. One call and
            we&apos;re rolling.
          </motion.p>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-6"
            style={{ color: YELLOW }}
          >
            One Call. We Handle It All.
          </motion.p>

          <div className="space-y-0 divide-y divide-border">
            {promises.map((label: string) => (
              <motion.div
                key={label}
                variants={slideRight}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-3 py-5 cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <CheckCircle2
                    size={17}
                    strokeWidth={2}
                    style={{ color: YELLOW }}
                  />
                </motion.div>

                <span className="font-semibold text-base uppercase tracking-wide">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseSection;
