import { motion, useReducedMotion } from "motion/react";
import { clipReveal, stagger } from "@/utils/animations";
import { services } from "@/models/home";
import ServiceCard from "@/components/serviceCard/ServiceCard";

const ServicesSection = () => {
  const shouldReduceMotion = useReducedMotion();

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
          className="services-grid grid gap-px bg-border"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="h-full"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: index % 2 === 0 ? -45 : 45,
                      y: 70,
                      scale: 0.9,
                      rotateY: index % 2 === 0 ? -6 : 6,
                      filter: "blur(10px)",
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotateY: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px" }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformPerspective: 1000 }}
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
