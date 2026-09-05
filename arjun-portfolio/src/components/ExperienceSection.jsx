import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";
import "./ExperienceSection.css";

// const experiences = [
//   {
//     side: "left",
//     date: "FEB 2025 - OCT 2025",
//     color: "pink",
//     node: "pink-node",
//     icon: "bi bi-code-slash",
//     title: "Software Engineering Intern",
//     company: "Code Buddy Oman",
//     description: "Led Back-End and Mobile App teams. Built Manssat Sanad, a bilingual business management platform with PHP & MySQL.",
//     technologies: "PHP - MySQL - Flutter - Leadership",
//   },
//   {
//     side: "right",
//     date: "JAN 2025 - APR 2026",
//     color: "blue",
//     node: "blue-node",
//     icon: "bi bi-book-half",
//     title: "Peer Tutor",
//     company: "Sohar University",
//     description: "Tutored Operating Systems, Algorithms & Data Structures, OOP, and Web Information Systems.",
//     technologies: "Algorithms - Data Structures - OOP",
//   },
//   {
//     side: "left",
//     date: "AUG 2024 - SEP 2024",
//     color: "green",
//     node: "green-node",
//     icon: "bi bi-phone",
//     title: "Mobile Application Developer",
//     company: "Code Buddy Oman",
//     description: "Contributed to front-end development of a mobile ERP application using Flutter & Dart. Built fully responsive UI components for Android and iOS.",
//     technologies: "Flutter - Dart - Android - iOS",
//   },
//   {
//     side: "right",
//     date: "2023 - 2024",
//     color: "purple",
//     node: "purple-node",
//     icon: "bi bi-briefcase",
//     title: "Software Developer",
//     company: "Freelance",
//     description: "Developed modern web applications and software solutions using modern development technologies and best practices.",
//     technologies: "React - Node.js - MongoDB - Git",
//   },
// ];



const experiences = [
  {
    side: "left",
    date: "AUG 2024 - PRESENT",
    color: "purple",
    node: "purple-node",
    icon: "bi bi-briefcase",
    title: "MERN Stack Developer",
    company: "OpenFuture Technologies Private Limited",
    description:
      "Developing modern full-stack applications with React.js and Node.js, building scalable APIs, responsive interfaces and integrating MongoDB-based solutions.",
    technologies: "React.js - Redux Toolkit - Node.js - Express.js - MongoDB",
  },

  {
    side: "right",
    date: "JUN 2023 - JUL 2024",
    color: "pink",
    node: "pink-node",
    icon: "bi bi-code-slash",
    title: "MERN Stack Developer",
    company: "Sharkweb IT Private Limited",
    description:
      "Developed and maintained full-stack web applications using the MERN stack, building responsive interfaces, REST APIs and database-driven features.",
    technologies: "React.js - Node.js - Express.js - MongoDB - Git",
  },

  {
    side: "left",
    date: "JAN 2023 - JUL 2024",
    color: "blue",
    node: "blue-node",
    icon: "bi bi-layers",
    title: "Full Stack Developer",
    company: "KP Infotech Private Limited",
    description:
      "Worked as a Full Stack Development Intern, developing responsive web applications and integrating modern frontend interfaces with robust backend services.",
    technologies: "React.js - JavaScript - Node.js - Express.js",
  },

  {
    side: "right",
    date: "AUG 2022 - JAN 2023",
    color: "green",
    node: "green-node",
    icon: "bi bi-server",
    title: "Backend Developer",
    company: "FunctionUP",
    description:
      "Worked remotely as a Backend Development Intern, building scalable server-side applications and REST APIs using Node.js, Express.js and MongoDB.",
    technologies: "Node.js - Express.js - MongoDB - REST API",
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
};

function ExperienceCard({ experience, index, prefersReduced }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(springY, [0, 1], [-3, 3]);
  const rotateY = useTransform(springX, [0, 1], [-3, 3]);

  const handleMouseMove = (e) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`experience-row ${experience.side}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {experience.side === "right" && (
        <motion.div
          className={`timeline-node ${experience.node}`}
          whileHover={prefersReduced ? {} : { scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <i className={experience.icon}></i>
        </motion.div>
      )}

      <motion.div
        className="experience-content"
        style={{
          rotateX: prefersReduced ? 0 : rotateX,
          rotateY: prefersReduced ? 0 : rotateY,
          transformStyle: "preserve-3d",
          willChange: prefersReduced ? "auto" : "transform",
        }}
        whileHover={prefersReduced ? {} : { y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div className="experience-inner" variants={contentVariants} custom={0}>
          <div className={`experience-date ${experience.color}`}>{experience.date}</div>
        </motion.div>
        <motion.div variants={contentVariants} custom={1}>
          <h3>{experience.title}</h3>
        </motion.div>
        <motion.div variants={contentVariants} custom={2}>
          <h4>{experience.company}</h4>
        </motion.div>
        <motion.div variants={contentVariants} custom={3}>
          <p>{experience.description}</p>
        </motion.div>
        <motion.div className="experience-tech" variants={contentVariants} custom={4}>
          {experience.technologies}
        </motion.div>
      </motion.div>

      {experience.side === "left" && (
        <motion.div
          className={`timeline-node ${experience.node}`}
          whileHover={prefersReduced ? {} : { scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <i className={experience.icon}></i>
        </motion.div>
      )}
    </motion.div>
  );
}

function ExperienceSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2>Experience</h2>
          <span></span>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.date}-${experience.title}`}
              experience={experience}
              index={index}
              prefersReduced={prefersReduced}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
