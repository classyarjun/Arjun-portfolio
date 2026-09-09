import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Monitor,
  Palette,
  Briefcase,
} from "lucide-react";
import useReducedMotion from "../hooks/useReducedMotion";
import "./Services.css";

const accentConfig = {
  blue: {
    color: "#3b82f6",
    bg: "rgba(59, 130, 246, 0.08)",
    border: "rgba(59, 130, 246, 0.25)",
    glow: "rgba(59, 130, 246, 0.35)",
  },
  green: {
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.08)",
    border: "rgba(16, 185, 129, 0.25)",
    glow: "rgba(16, 185, 129, 0.35)",
  },
  purple: {
    color: "#8b5cf6",
    bg: "rgba(139, 92, 246, 0.08)",
    border: "rgba(139, 92, 246, 0.25)",
    glow: "rgba(139, 92, 246, 0.35)",
  },
  pink: {
    color: "#ec4899",
    bg: "rgba(236, 72, 153, 0.08)",
    border: "rgba(236, 72, 153, 0.25)",
    glow: "rgba(236, 72, 153, 0.35)",
  },
};

const iconMap = {
  globe: Globe,
  monitor: Monitor,
  palette: Palette,
  briefcase: Briefcase,
};

const services = [
  {
    title: "Website Development",
    description:
      "Building modern, responsive, and high-performance websites using React, Next.js, and the latest web technologies.",
    icon: "globe",
    accent: "blue",
  },
  {
    title: "Desktop App Development",
    description:
      "Creating cross-platform desktop applications with Electron, Tauri, and native frameworks for seamless user experiences.",
    icon: "monitor",
    accent: "green",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces and engaging user experiences with a focus on accessibility, aesthetics, and usability.",
    icon: "palette",
    accent: "purple",
  },
  {
    title: "Freelancing",
    description:
      "Offering flexible freelance services to turn ideas into production-ready digital products with clean code and timely delivery.",
    icon: "briefcase",
    accent: "pink",
  },
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const Icon = iconMap[service.icon] || Briefcase;
  const accent = accentConfig[service.accent] || accentConfig.pink;

  return (
    <motion.div
      ref={cardRef}
      className="service-card"
      initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: prefersReduced ? 0 : 0.6,
        delay: prefersReduced ? 0 : index * 0.1,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      whileHover={
        prefersReduced
          ? {}
          : {
              y: -4,
              transition: { duration: 0.25, ease: "easeOut" },
            }
      }
      style={{
        "--accent-color": accent.color,
        "--accent-bg": accent.bg,
        "--accent-border": accent.border,
        "--accent-glow": accent.glow,
      }}
    >
      <div className="service-card__glow" aria-hidden="true" />
      <div className="service-card__content">
        <div
          className="service-card__icon"
          style={{
            backgroundColor: accent.bg,
            boxShadow: `0 0 20px ${accent.glow}, 0 0 40px ${accent.glow}`,
          }}
        >
          <Icon size={26} strokeWidth={1.8} color={accent.color} aria-hidden="true" />
        </div>
        <div className="service-card__text">
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__description">{service.description}</p>
        </div>
      </div>
      <div className="service-card__particles" aria-hidden="true">
        <span className="particle particle--1" />
        <span className="particle particle--2" />
        <span className="particle particle--3" />
      </div>
    </motion.div>
  );
}

function Services() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="services" id="services">
      <div className="services__container">
        <motion.div
          className="services__heading"
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="services__title">Services</h2>
          <span className="services__underline" />
        </motion.div>

        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
