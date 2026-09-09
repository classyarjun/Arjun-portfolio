import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ScrollText,
  BadgeCheck,
  FileCheck,
  ShieldCheck,
  Award,
  ExternalLink,
} from "lucide-react";
import useReducedMotion from "../hooks/useReducedMotion";
import "./Certificates.css";

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
  scroll: ScrollText,
  badge: BadgeCheck,
  file: FileCheck,
  shield: ShieldCheck,
  award: Award,
};

const certificates = [
  {
    title: "AWS Cloud Practitioner Essentials",
    organization: "Amazon Web Services",
    date: "Jan 2026",
    description:
      "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    icon: "badge",
    accent: "blue",
    link: "#",
  },
  {
    title: "Google Cloud Associate Engineer",
    organization: "Google Cloud",
    date: "Mar 2026",
    description:
      "Validated skills in deploying applications, monitoring operations, and managing enterprise solutions on GCP.",
    icon: "shield",
    accent: "green",
    link: "#",
  },
  {
    title: "Meta Front-End Developer Professional",
    organization: "Meta",
    date: "Nov 2025",
    description:
      "Comprehensive training covering React.js, responsive design, and modern front-end development practices.",
    icon: "file",
    accent: "purple",
    link: "#",
  },
  {
    title: "IBM Data Science Professional",
    organization: "IBM",
    date: "Sep 2025",
    description:
      "Mastered data analysis, visualization, machine learning fundamentals, and Python-based data workflows.",
    icon: "scroll",
    accent: "gold",
    link: "#",
  },
  {
    title: "Oracle Cloud Infrastructure Certified",
    organization: "Oracle",
    date: "May 2026",
    description:
      "Certified in OCI architecture, compute, storage, networking, and database services for cloud solutions.",
    icon: "award",
    accent: "pink",
    link: "#",
  },
  {
    title: "Microsoft Azure Fundamentals",
    organization: "Microsoft",
    date: "Dec 2025",
    description:
      "Demonstrated knowledge of cloud concepts, Azure services, workloads, security, and governance.",
    icon: "badge",
    accent: "blue",
    link: "#",
  },
  {
    title: "Certified Kubernetes Administrator",
    organization: "CNCF",
    date: "Feb 2026",
    description:
      "Validated expertise in Kubernetes operations, architecture, troubleshooting, and application lifecycle management.",
    icon: "shield",
    accent: "green",
    link: "#",
  },
  {
    title: "Full-Stack Web Development",
    organization: "freeCodeCamp",
    date: "Aug 2025",
    description:
      "Completed full-stack curriculum covering HTML, CSS, JavaScript, React, Node.js, databases, and APIs.",
    icon: "file",
    accent: "purple",
    link: "#",
  },
  {
    title: "Python for Data Science",
    organization: "IBM",
    date: "Jul 2025",
    description:
      "Hands-on training in Python programming, NumPy, Pandas, Matplotlib, and statistical analysis.",
    icon: "scroll",
    accent: "gold",
    link: "#",
  },
  {
    title: "Cybersecurity Fundamentals",
    organization: "Cisco",
    date: "Oct 2025",
    description:
      "Covered security principles, threat detection, cryptography, network defense, and risk management.",
    icon: "award",
    accent: "pink",
    link: "#",
  },
  {
    title: "React.js Advanced Patterns",
    organization: "Frontend Masters",
    date: "Jan 2026",
    description:
      "Mastered advanced React concepts including hooks, context, performance optimization, and compound components.",
    icon: "badge",
    accent: "blue",
    link: "#",
  },
  {
    title: "AI & Machine Learning Bootcamp",
    organization: "Stanford Online",
    date: "Apr 2026",
    description:
      "Intensive bootcamp covering supervised learning, neural networks, NLP, computer vision, and deployment.",
    icon: "shield",
    accent: "green",
    link: "#",
  },
];

function CertificateCard({ certificate, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const prefersReduced = useReducedMotion();
  const Icon = iconMap[certificate.icon] || Award;
  const accent = accentConfig[certificate.accent] || accentConfig.pink;

  return (
    <motion.div
      ref={cardRef}
      className="certificate-card"
      initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: prefersReduced ? 0 : 0.6,
        delay: prefersReduced ? 0 : index * 0.05,
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
      <div className="certificate-card__glow" aria-hidden="true" />
      <div className="certificate-card__content">
        <div
          className="certificate-card__icon"
          style={{
            backgroundColor: accent.bg,
            boxShadow: `0 0 20px ${accent.glow}, 0 0 40px ${accent.glow}`,
          }}
        >
          <Icon size={24} strokeWidth={1.8} color={accent.color} aria-hidden="true" />
        </div>
        <div className="certificate-card__text">
          <h3 className="certificate-card__title">{certificate.title}</h3>
          <p className="certificate-card__meta">
            {certificate.organization} · {certificate.date}
          </p>
          <p className="certificate-card__description">{certificate.description}</p>
        </div>
      </div>
      <a
        href={certificate.link}
        className="certificate-card__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate
        <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
      </a>
      <div className="certificate-card__particles" aria-hidden="true">
        <span className="particle particle--1" />
        <span className="particle particle--2" />
        <span className="particle particle--3" />
      </div>
    </motion.div>
  );
}

function Certificates() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="certificates" id="certificates">
      <div className="certificates__container">
        <motion.div
          className="certificates__heading"
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2 className="certificates__title">Certificates</h2>
          <span className="certificates__underline" />
        </motion.div>

        <div className="certificates__grid">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={`${certificate.title}-${index}`}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
