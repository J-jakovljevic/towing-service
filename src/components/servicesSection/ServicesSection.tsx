import { motion } from "motion/react";
import { clipReveal, stagger } from "@/utils/animations";
import { services } from "@/models/home";
import ServiceCard from "@/components/serviceCard/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={clipReveal}
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#f5b800" }}
          >
            What We Do
          </motion.p>
          <motion.h2
            variants={clipReveal}
            className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-none tracking-tight mb-14"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Our Services
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="services-grid grid gap-px bg-border"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="h-full"
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 180, damping: 20 },
                },
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
