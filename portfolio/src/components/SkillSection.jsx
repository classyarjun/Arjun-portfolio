import { motion,  } from "framer-motion";
import { skills } from "./skills";
import "./SkillSection.css";

const allSkills = skills.flatMap((category) => category.items);

const SkillSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Section Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-eyebrow">MY EXPERTISE</span>

          <h2 className="technical-arsenal">
            Technical Arsenal
          </h2>

          <div className="skills-title-line" />
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {allSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="skill-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: (index % 6) * 0.05,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >
              <div className="skill-icon-wrapper">
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="skill-icon"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <span className="skill-name">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillSection;