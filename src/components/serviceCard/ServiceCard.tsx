import { motion } from "motion/react";
import { YELLOW } from "@/utils/theme";

import type { ServiceItem } from "@/models/home";
import ServiceIcon from "./ServiceIcon";
import ServiceList from "./ServiceList";

type ServiceCardProps = {
  service: ServiceItem;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: `0 16px 48px rgba(0,0,0,0.5), inset 0 0 0 1px ${YELLOW}33`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="bg-card p-10 md:p-12"
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          borderColor: YELLOW,
          boxShadow: `0 0 20px ${YELLOW}44`,
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mb-7 p-3"
        style={{
          backgroundColor: "#0a0a0a",
          border: `2px solid ${YELLOW}`,
          width: 64,
          height: 56,
        }}
      >
        <ServiceIcon icon={service.icon} />
      </motion.div>

      <h3
        className="text-2xl md:text-3xl font-black uppercase mb-7 leading-tight"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {service.title}
      </h3>

      <motion.div whileHover={{ x: 2 }}>
        <ServiceList items={service.items} />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
