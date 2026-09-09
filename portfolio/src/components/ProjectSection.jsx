import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";
import "./ProjectSection.css";

const projects = [
  {
    number: "01",
    title: "Rent On Friend",
    category: "FULL STACK DEVELOPMENT",
    imageTitle: "RENT ON FRIEND",
    icon: "bi bi-people",
    description:
      "A modern platform designed to connect people through a simple and user-friendly experience. Built with a scalable MERN stack architecture and integrated payment gateway.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    links: ["Live Demo", "GitHub"],
  },
  {
    number: "02",
    title: "Employee Management & Tracking System",
    category: "WEB & DESKTOP APPLICATION",
    imageTitle: "EMPLOYEE MANAGEMENT",
    imageClass: "project-blue",
    categoryClass: "blue",
    icon: "bi bi-person-workspace",

    description:
      "A full-stack employee management and tracking system designed to manage employee records, monitor workforce activities, streamline daily operations, and centralize organizational data through web and desktop applications.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Electron.js",
      "MongoDB",
      
    ],

    links: ["Live Demo", "GitHub"],
  },
  {
    number: "03",
    title: "Mobile ERP Application",
    category: "MOBILE DEVELOPMENT",
    imageTitle: "MOBILE ERP",
    imageClass: "project-green",
    categoryClass: "green",
    icon: "bi bi-phone",
    description:
      "A responsive ERP mobile application focused on business workflows and a clean user experience for Android and iOS devices.",
    technologies: ["Flutter", "Dart", "Android", "iOS"],
    links: ["View Project", "GitHub"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  },
};

function ProjectCard({ project, index, prefersReduced }) {
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
    <motion.article
      ref={cardRef}
      className={`project-item${index === 1 ? " reverse" : ""}`}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReduced ? 0 : rotateX,
        rotateY: prefersReduced ? 0 : rotateY,
        transformStyle: "preserve-3d",
        willChange: prefersReduced ? "auto" : "transform",
      }}
      whileHover={prefersReduced ? {} : { y: -8 }}
    >
      <div className="project-image-wrap">
        <motion.div
          className={`project-image ${project.imageClass || ""}`}
          whileHover={prefersReduced ? {} : { scale: 1.03 }}
        >
          <div className="project-image-content">
            <i className={`project-image-code ${project.icon}`}></i>
            <span className="project-image-title">{project.imageTitle}</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="project-info"
        style={{ transform: "translateZ(15px)" }}
      >
        <span className="project-number">{project.number}</span>
        <span className={`project-category ${project.categoryClass || ""}`}>
          {project.category}
        </span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-links">
          {project.links.map((link) => (
            <a
              className="project-link-btn btn btn-outline-light"
              href="#"
              target="_blank"
              rel="noreferrer"
              key={link}
            >
              {link}
              <span>↗</span>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
}

function ProjectSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="projects" className="featured-projects">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2>Featured Projects</h2>
          <span></span>
        </motion.div>

        <motion.div
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              prefersReduced={prefersReduced}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectSection;
