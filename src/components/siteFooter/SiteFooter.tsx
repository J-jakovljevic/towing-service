import { motion } from "motion/react";
import { Clock, MapPin } from "lucide-react";
import INBadge from "@/components/inBadge/INBadge";
import { slideLeft, slideRight } from "@/utils/animations";

const SiteFooter = () => {
  return (
    <motion.footer
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-6 md:px-12 py-10 bg-background"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div variants={slideLeft} className="flex items-center gap-3">
          <INBadge size="sm" />
          <div>
            <p
              className="font-bold text-sm uppercase leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              IN Repairs
            </p>
            <p className="text-xs text-foreground/40 uppercase tracking-wider">
              Towing · Recovery · Workshop
            </p>
          </div>
        </motion.div>

        <motion.p
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="text-xs text-foreground/30 text-center"
        >
          Safety. Reliability. Trust. - That&apos;s Our Promise.
        </motion.p>

        <motion.div
          variants={slideRight}
          className="flex items-center gap-4 text-xs text-foreground/40"
        >
          <a
            href="https://maps.app.goo.gl/sjkXAgm9xXS2rEm27"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground/70 transition-colors"
          >
            <MapPin size={11} />
            Find Us on Maps
          </a>
          <span className="flex items-center gap-1.5">
            <Clock size={11} /> 24/7/365
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default SiteFooter;
