import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";
import { skills } from "./skills";
import "./AboutSection.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

function AboutSection() {
  const prefersReduced = useReducedMotion();
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(springY, [0, 1], [-4, 4]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);

  const handleMouseMove = (e) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const expertise = [
    { icon: "bi bi-check-circle-fill", title: "Web Development", desc: "Modern & Mobile-Ready" },
    { icon: "bi bi-palette-fill", title: "UI/UX Design", desc: "Clean & Modern Design" },
    { icon: "bi bi-phone-fill", title: "Mobile Apps", desc: "Android & iOS" },
    { icon: "bi bi-server", title: "Backend", desc: "Scalable APIs" },
  ];

  const allSkills = skills.flatMap((category) => category.items || []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.span 
            className="about-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            ABOUT ME
          </motion.span>
          <motion.h2 
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Crafting Digital <span className="gradient-text">Experiences</span>
          </motion.h2>
          <motion.p 
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Full Stack Developer based in Aurangabad, Maharashtra
          </motion.p>
        </motion.div>

        <div className="about-layout">
          <div className="about-visual">
            <motion.div
              ref={cardRef}
              className="about-card"
              style={{
                rotateX: prefersReduced ? 0 : rotateX,
                rotateY: prefersReduced ? 0 : rotateY,
                transformStyle: "preserve-3d",
                willChange: prefersReduced ? "auto" : "transform",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={prefersReduced ? {} : { y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="card-glow"></div>
              
              <div className="card-content">
                <div className="avatar-wrapper">
                  <motion.div 
                    className="avatar-ring"
                    animate={prefersReduced ? {} : { rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="avatar-inner">
                      <span className="avatar-text">AR</span>
                    </div>
                  </motion.div>
                  <div className="status-indicator">
                    <span className="pulse"></span>
                    Available
                  </div>
                </div>

                <div className="profile-info">
                  <h3>Arjun Rajput</h3>
                  <p>Full Stack Developer</p>
                </div>

                <div className="profile-divider"></div>

                <div className="stats-grid">
                  <motion.div 
                    className="stat-item"
                    whileHover={prefersReduced ? {} : { y: -5, scale: 1.05 }}
                  >
                    <span className="stat-number">2+</span>
                    <span className="stat-label">Years</span>
                  </motion.div>
                  <motion.div 
                    className="stat-item"
                    whileHover={prefersReduced ? {} : { y: -5, scale: 1.05 }}
                  >
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Projects</span>
                  </motion.div>
                  <motion.div 
                    className="stat-item"
                    whileHover={prefersReduced ? {} : { y: -5, scale: 1.05 }}
                  >
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Satisfaction</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="about-content">
            <motion.div 
              className="content-badge"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="badge-icon">👋</span>
              <span>WHO AM I</span>
            </motion.div>

            <motion.h3 
              className="about-heading-text"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              I design and develop services for customers specializing in creating stylish, modern websites.
            </motion.h3>

            <motion.p 
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I&apos;m a passionate Full Stack Developer based in Aurangabad, Maharashtra. I enjoy creating modern, responsive web applications with clean code and thoughtful UX.
            </motion.p>

            <motion.div 
              className="expertise-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {expertise.map((item, i) => (
                <motion.div 
                  className="expertise-card" 
                  key={item.title} 
                  custom={i} 
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={prefersReduced ? {} : { y: -5, scale: 1.02 }}
                >
                  <div className="expertise-icon-wrapper">
                    <i className={item.icon}></i>
                  </div>
                  <div className="expertise-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="skills-showcase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="skills-title">Tech Stack</h4>
              <div className="skills-tags">
                {allSkills.slice(0, 12).map((skill, i) => (
                  <motion.span 
                    key={skill.name} 
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.03, duration: 0.4 }}
                    whileHover={prefersReduced ? {} : { scale: 1.1, y: -3 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="about-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a 
                href="#contact" 
                className="cta-primary"
                whileHover={prefersReduced ? {} : { scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Hire Me</span>
                <i className="bi bi-arrow-right"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="cta-secondary"
                whileHover={prefersReduced ? {} : { scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-download"></i>
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
