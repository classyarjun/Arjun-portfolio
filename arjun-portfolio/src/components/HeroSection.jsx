import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";
import "./HeroSection.css";
import arjunImage from "../assets/ArjunRajput.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

function HeroSection() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (prefersReduced) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 10);
    mouseY.set(y * 10);
  };

  const parallaxX = useTransform(springX, [0, 1], [-10, 10]);
  const parallaxY = useTransform(springY, [0, 1], [-10, 10]);

  return (
    <motion.section
      id="home"
      className="hero"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="hero-bg-animation">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>

      <div className="container position-relative">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 hero-content">
            <motion.div className="animate-left" variants={prefersReduced ? {} : { visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div className="hero-badge" custom={0} variants={fadeUp}>
              </motion.div>

              <motion.h1 className="hero-title" custom={1} variants={fadeUp}>
                Hi, I&#39;m <span className="text-gradient">Arjun Rajput</span>
                <motion.div className="developer-text" custom={2} variants={fadeUp}>
                  Full Stack Developer
                </motion.div>
              </motion.h1>

              <motion.div className="contact-social" custom={3} variants={fadeUp}>
                <a href="https://www.linkedin.com/in/arjun-rajput-863a721b7/" target="_blank" rel="noreferrer" className="social-btn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/classyarjun" target="_blank" rel="noreferrer" className="social-btn">
                  <i className="bi bi-github"></i>
                </a>
                <a href="#" className="social-btn">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://instagram.com/classarjunn" target="_blank" rel="noreferrer" className="social-btn">
                  <i className="bi bi-instagram"></i>
                </a>
              </motion.div>

              <motion.p className="hero-description" custom={4} variants={fadeUp}>
                Transforming ideas into powerful digital solutions with modern technologies
              </motion.p>

              <motion.div className="hero-buttons d-flex flex-md-row flex-column gap-3" custom={5} variants={fadeUp}>
                <motion.a href="#contact" className="btn btn-gradient" whileHover={prefersReduced ? {} : { y: -3 }} whileTap={{ scale: 0.97 }}>
                  <span>Let&#39;s Talk</span>
                  <i className="bi bi-arrow-right"></i>
                </motion.a>
                <motion.a href="#projects" className="btn btn-outline-light" whileHover={prefersReduced ? {} : { y: -3 }} whileTap={{ scale: 0.97 }}>
                  <i className="bi bi-collection-play"></i>
                  <span>View Work</span>
                </motion.a>
              </motion.div>

              <motion.div className="hero-stats" custom={6} variants={fadeUp}>
                <motion.div className="stat-item" custom={0} variants={scaleIn}>
                  <span className="stat-number">2+</span>
                  <span className="stat-text">Years Experience</span>
                </motion.div>
                <motion.div className="stat-item" custom={1} variants={scaleIn}>
                  <span className="stat-number">20+</span>
                  <span className="stat-text">Projects Completed</span>
                </motion.div>
                <motion.div className="stat-item" custom={2} variants={scaleIn}>
                  <span className="stat-number">100%</span>
                  <span className="stat-text">Client Satisfaction</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6 hero-image">
            <motion.div
              className="animate-right"
              style={{
                x: parallaxX,
                y: parallaxY,
                willChange: prefersReduced ? "auto" : "transform",
              }}
            >
              <div className="image-wrapper">
                <img src={arjunImage} alt="Arjun Rajput" />
                <div className="floating-card card1">
                  <i className="bi bi-code-slash"></i>
                  <span>Developer</span>
                </div>
                <div className="floating-card card2">
                  <i className="bi bi-palette"></i>
                  <span>Designer</span>
                </div>
                <div className="experience-badge">
                  <span>2+ Years</span>
                  <span>Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
