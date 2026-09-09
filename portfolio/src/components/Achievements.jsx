import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Trophy,
  Lightbulb,
  Rocket,
  Medal,
  Award,
} from "lucide-react";
import useReducedMotion from "../hooks/useReducedMotion";
import "./Achievements.css";

const accentConfig = {
  gold: {
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.08)",
    border: "rgba(245, 158, 11, 0.25)",
    glow: "rgba(245, 158, 11, 0.35)",
  },
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
  trophy: Trophy,
  lightbulb: Lightbulb,
  rocket: Rocket,
  medal: Medal,
  award: Award,
};

const achievements = [
  {
    title: "3+ Years of MERN Stack Development",
    organization: "Professional Experience",
    date: "2023 – Present",
    description:
      "Built and maintained scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js with a focus on performance, security, and clean architecture.",
    icon: "rocket",
    accent: "blue",
  },

  {
    title: "Built Full-Stack Business Management Platform",
    organization: "MERN + Electron",
    date: "2025",
    description:
      "Developed a bilingual business management and employee tracking platform with desktop application capabilities using MERN Stack and Electron.",
    icon: "trophy",
    accent: "gold",
  },

  {
    title: "Cloud & Cybersecurity Learning",
    organization: "AWS · Google · Microsoft",
    date: "2025 – Present",
    description:
      "Expanded technical expertise across cloud computing, cybersecurity, machine learning, and modern software engineering through industry-recognized learning programs and certifications.",
    icon: "award",
    accent: "green",
  },

  {
    title: "Developer Portfolio & Open-Source Projects",
    organization: "GitHub",
    date: "2025 – Present",
    description:
      "Created and maintained modern full-stack projects demonstrating expertise in MERN Stack, REST APIs, authentication, automation, responsive UI, and software architecture.",
    icon: "lightbulb",
    accent: "pink",
  },
];

function AchievementCard({ achievement, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const Icon = iconMap[achievement.icon] || Award;
  const accent = accentConfig[achievement.accent] || accentConfig.pink;

  return (
    <motion.div
      ref={cardRef}
      className={`achievement-card ${index === achievements.length - 1 && achievements.length % 2 !== 0 ? "achievement-card--centered" : ""}`}
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
      <div className="achievement-card__glow" aria-hidden="true" />
      <div className="achievement-card__content">
        <div
          className="achievement-card__icon"
          style={{
            backgroundColor: accent.bg,
            boxShadow: `0 0 20px ${accent.glow}, 0 0 40px ${accent.glow}`,
          }}
        >
          <Icon size={26} strokeWidth={1.8} color={accent.color} aria-hidden="true" />
        </div>
        <div className="achievement-card__text">
          <h3 className="achievement-card__title">{achievement.title}</h3>
          <p className="achievement-card__meta">
            {achievement.organization} · {achievement.date}
          </p>
          <p className="achievement-card__description">{achievement.description}</p>
        </div>
      </div>
      <div className="achievement-card__particles" aria-hidden="true">
        <span className="particle particle--1" />
        <span className="particle particle--2" />
        <span className="particle particle--3" />
      </div>
    </motion.div>
  );
}

function Achievements() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="achievements" id="achievements">
      <div className="achievements__container">
        <motion.div
          className="achievements__heading"
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="achievements__title">Achievements</h2>
          <span className="achievements__underline" />
        </motion.div>

        <div className="achievements__grid">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`${achievement.title}-${index}`}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
