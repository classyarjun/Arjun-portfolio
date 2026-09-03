import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { skills } from "./skills";
import "./SkillSection.css";

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    stiffness: 180,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    springConfig
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="skill-card"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.035,
      }}
      whileHover={{
        y: -6,
        scale: 1.025,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-card-glow" />

      <motion.div
        className="skill-card-content"
        whileHover={{
          z: 25,
        }}
      >
        <motion.img
          src={skill.icon}
          alt={`${skill.name} icon`}
          className="skill-card-icon"
          loading="lazy"
          draggable="false"
          whileHover={{
            scale: 1.12,
            y: -2,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 15,
          }}
        />

        <span className="skill-card-name">
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
};

function SkillSection() {
  const allSkills = skills.flatMap(
    (category) => category.items
  );

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Heading */}
        <motion.div
          className="skills-heading"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
        >
          <h2>Skills</h2>

          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 64,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          />
        </motion.div>


        {/* Skills Grid */}
        <div className="skills-grid">
          {allSkills.map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${index}`}
              skill={skill}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SkillSection;