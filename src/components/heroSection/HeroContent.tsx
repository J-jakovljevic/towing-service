import { motion } from "motion/react";
import { Phone, MapPin } from "lucide-react";

import INBadge from "@/components/inBadge/INBadge";
import { heroLines } from "@/models/home";
import { accentFont, YELLOW } from "@/utils/theme";

type HeroContentProps = {
  isDesktop?: boolean;
};

const HeroContent = ({ isDesktop = false }: HeroContentProps) => {
  const isMobile = !isDesktop;
  const titleLines = isDesktop
    ? heroLines
    : ["Towing", "Service", "Recovery", "&", "Workshop"];

  const eyebrowClassName = isDesktop
    ? "text-[11px] font-bold tracking-[0.3em] uppercase mb-3"
    : "text-[12px] font-bold tracking-[0.28em] uppercase mb-2 max-[449px]:hidden";

  const titleContainerClassName = isDesktop ? "mb-4" : "mb-3 overflow-hidden";
  const titleClassName = isDesktop
    ? "block font-black uppercase leading-[0.88]"
    : "block text-[50px] font-black uppercase leading-[0.9] min-[450px]:text-[4rem]";

  const badgeSize = isDesktop ? "lg" : "sm";
  const badgeTextClassName = isDesktop
    ? "text-xs font-bold tracking-[0.25em] uppercase text-white"
    : "text-[10px] font-bold tracking-[0.2em] uppercase text-white";

  const contentWrapperClassName = isDesktop
    ? "relative z-10 px-12 pt-10 max-w-3xl"
    : "relative z-10 px-6 pt-10 flex-1";

  const ctaContainerClassName = isDesktop
    ? "absolute bottom-8 left-0 right-0 z-10 px-12 flex items-center justify-between"
    : "relative z-10 px-6 pb-2 flex flex-col gap-2";

  const ctaButtonClassName = isDesktop
    ? "inline-flex items-center gap-3 px-7 py-3.5 font-bold uppercase tracking-wider transition-shadow"
    : "flex items-center justify-center gap-2 py-3.5 font-bold uppercase tracking-wider text-sm";

  const linkClassName = isDesktop
    ? "flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground/80 transition-colors uppercase tracking-widest"
    : "flex items-center justify-center gap-1.5 text-[10px] text-foreground/50 hover:text-foreground/80 transition-colors uppercase tracking-widest py-1";

  const iconSize = isDesktop ? 15 : 14;
  const mapIconSize = isDesktop ? 11 : 10;
  const introDelay = isDesktop ? 0.3 : 0.3;
  const lineDelayOffset = isDesktop ? 0.35 : 0.4;
  const lineDuration = isDesktop ? 0.7 : 0.65;
  const badgeDelay = isDesktop ? 0.85 : 0.9;
  const ctaDelay = isDesktop ? 1.0 : 1.0;

  return (
    <>
      <div className={contentWrapperClassName}>
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 10 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: introDelay, duration: 0.5 }}
          className={eyebrowClassName}
          style={{ color: YELLOW }}
        >
          Towing Box Trucks & Commercial Vehicles
        </motion.p>

        <div className={titleContainerClassName}>
          {titleLines.map((line: string, i: number) => (
            <div key={line} className="overflow-hidden">
              <motion.span
                className={titleClassName}
                style={{
                  fontFamily: accentFont,
                  letterSpacing: "0.015em",
                  fontSize: isDesktop ? "clamp(3.8rem,9vw,7.5rem)" : undefined,
                  color: line === "Service" ? YELLOW : undefined,
                }}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  delay: lineDelayOffset + i * 0.1,
                  duration: lineDuration,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: isDesktop ? -24 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: badgeDelay,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`flex items-center ${isDesktop ? "gap-2" : "gap-1.5"}`}
        >
          <span className={badgeTextClassName}>We Are</span>

          <INBadge size={badgeSize} rotates />

          <span className={badgeTextClassName}>, Are You?</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: isDesktop ? 30 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: ctaDelay,
          duration: isDesktop ? 0.7 : 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={ctaContainerClassName}
      >
        <motion.a
          href="tel:+16304083436"
          whileHover={{ scale: isDesktop ? 1.04 : 1.02 }}
          whileTap={{ scale: isDesktop ? 0.96 : 0.97 }}
          className={ctaButtonClassName}
          style={{
            backgroundColor: YELLOW,
            color: "#0a0a0a",
            fontFamily: accentFont,
            fontSize: isDesktop ? "1rem" : undefined,
            y: isDesktop ? -46 : 0,
          }}
        >
          <Phone size={iconSize} strokeWidth={2.5} />
          Call Anytime - We&apos;ll Be There
        </motion.a>

        <a
          href="https://maps.app.goo.gl/sjkXAgm9xXS2rEm27"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          <MapPin size={mapIconSize} />
          Find Us on Maps
        </a>
      </motion.div>
    </>
  );
};

export default HeroContent;
