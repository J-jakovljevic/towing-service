import { motion } from "motion/react";
import { Phone } from "lucide-react";

import INBadge from "@/components/inBadge/INBadge";
import { YELLOW, accentFont } from "@/utils/theme";

const NavBar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-border"
    >
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <INBadge size="sm" />

        <span className="font-semibold text-sm tracking-wide text-foreground/60 uppercase">
          Workshop
        </span>
      </motion.div>

      <motion.a
        href="tel:+1800000000"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider"
        style={{
          backgroundColor: YELLOW,
          color: "#0a0a0a",
          fontFamily: accentFont,
        }}
      >
        <Phone size={13} strokeWidth={2.5} />
        Call Anytime
      </motion.a>
    </motion.nav>
  );
};

export default NavBar;
