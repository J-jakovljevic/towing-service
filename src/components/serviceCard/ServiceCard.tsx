import { motion, useReducedMotion } from "motion/react";
import { YELLOW } from "@/utils/theme";

import type { ServiceItem, ServiceType } from "@/models/home";
import ServiceIcon from "./ServiceIcon";
import ServiceList from "./ServiceList";

type ServiceCardProps = {
  service: ServiceItem;
};

type IconBadgeProps = {
  icon: ServiceType;
  reduceMotion: boolean | null;
};

const IconBadge = ({ icon, reduceMotion }: IconBadgeProps) => (
  <motion.div
    animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [0, -2, 0] }}
    transition={{
      duration: 2.4,
      repeat: Infinity,
      repeatDelay: 0.5,
      ease: "easeInOut",
    }}
    className="shrink-0"
    style={{ width: 64, height: 56 }}
  >
    <motion.div
      whileHover={{
        scale: 1.1,
        borderColor: YELLOW,
        boxShadow: `0 0 20px ${YELLOW}44`,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full w-full p-3"
      style={{
        backgroundColor: "#0a0a0a",
        border: `2px solid ${YELLOW}`,
      }}
    >
      <ServiceIcon icon={icon} />
    </motion.div>
  </motion.div>
);

const ServiceCard = ({ service }: ServiceCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: `0 16px 48px rgba(0,0,0,0.5), inset 0 0 0 1px ${YELLOW}33`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`h-full bg-card ${
        service.compact
          ? "min-h-[140px] p-6 md:min-h-[150px] md:p-8"
          : "min-h-[190px] p-8 md:min-h-[210px] md:p-10"
      }`}
    >
      <div
        className={`flex items-center gap-5 ${
          service.items.length > 0 ? "mb-7" : "mb-0"
        }`}
      >
        <IconBadge icon={service.icon} reduceMotion={shouldReduceMotion} />
        <h3
          className="text-2xl font-black uppercase leading-tight md:text-3xl"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {service.title}
        </h3>
      </div>

      <motion.div className="pl-4 md:pl-[30px]" whileHover={{ x: 2 }}>
        <ServiceList items={service.items} />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
