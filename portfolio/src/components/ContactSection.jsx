import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";
import "./ContactSection.css";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-rajput-863a721b7/", icon: "bi-linkedin" },
  { label: "GitHub", href: "https://github.com/classyarjun", icon: "bi-github" },
  { label: "Twitter", href: "#", icon: "bi-twitter" },
  { label: "Instagram", href: "https://instagram.com/classarjunn", icon: "bi-instagram" },
];

function ContactSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h2>Let&apos;s Work Together</h2>
          <span></span>
          <p>Have a project in mind or looking for a developer? Let&apos;s build something meaningful together.</p>
        </motion.div>

        <motion.div
          className="contact-layout"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.div className="contact-info-panel" whileHover={prefersReduced ? {} : { y: -5 }}>
            <div className="contact-panel-top">
              <span className="contact-label">GET IN TOUCH</span>
              <div className="contact-orb"><span>*</span></div>
            </div>
            <h3>Let&apos;s create something<br />great together.</h3>
            <p className="contact-description">I&apos;m always open to discussing new projects, creative ideas, opportunities or ways we can work together.</p>
            <ContactInfo icon="bi-geo-alt-fill" label="Location">Aurangabad, Maharashtra, India</ContactInfo>
            <ContactInfo icon="bi-envelope-fill" label="Email">arjunrajput7531@gmail.com</ContactInfo>
            <ContactInfo icon="bi-phone-fill" label="Phone">+91 7666-277351</ContactInfo>
            <div className="contact-social">
              {socialLinks.map((social) => (
                <motion.a key={social.label} href={social.href} target={social.href !== "#" ? "_blank" : undefined} rel={social.href !== "#" ? "noreferrer" : undefined} className="social-btn" aria-label={social.label} whileHover={prefersReduced ? {} : { y: -3 }}>
                  <i className={`bi ${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="contact-form-panel" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="form-header">
              <span>CONTACT ME</span>
              <h3>Send me a message</h3>
              <p>Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="cc40613f-a0b0-435d-a94e-bdb1543ef15f" />
              <input type="hidden" name="subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />
              <div className="contact-form-grid">
                <Field id="contact-name" name="name" label="Your Name" placeholder="John Doe" type="text" />
                <Field id="contact-email" name="email" label="Your Email" placeholder="john@example.com" type="email" />
                <Field id="contact-subject" name="message_subject" label="Subject" placeholder="Project discussion" type="text" full />
                <div className="contact-field full">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea id="contact-message" name="message" placeholder="Tell me about your project..." rows="6" required></textarea>
                </div>
                <div className="contact-submit full">
                  <motion.button type="submit" whileHover={prefersReduced ? {} : { y: -3 }} whileTap={{ scale: 0.98 }}>
                    <span>Send Message</span><i className="bi bi-arrow-up-right"></i>
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, children }) {
  return (
    <div className="contact-info-item">
      <div className="contact-icon"><i className={`bi ${icon}`}></i></div>
      <div><span>{label}</span><p>{children}</p></div>
    </div>
  );
}

function Field({ id, name, label, placeholder, type, full = false }) {
  return (
    <div className={`contact-field${full ? " full" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={name} placeholder={placeholder} required />
    </div>
  );
}

export default ContactSection;
