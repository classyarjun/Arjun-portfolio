import "./Footer.css";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-rajput-863a721b7/", icon: "bi-linkedin" },
  { label: "GitHub", href: "https://github.com/classyarjun", icon: "bi-github" },
  { label: "Twitter", href: "#", icon: "bi-twitter" },
  { label: "Instagram", href: "https://instagram.com/classarjunn", icon: "bi-instagram" },
];

const quickLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const services = ["Web Development", "UI/UX Design", "Mobile Apps", "Consulting"];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="footer-brand">
                <h3>AR<span className="text-gradient">.</span></h3>
                <p className="mt-3">Creating digital experiences with passion and purpose. Lets build something amazing together.</p>
                <div className="footer-social mt-4">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} target={social.href !== "#" ? "_blank" : undefined} rel={social.href !== "#" ? "noreferrer" : undefined} className="social-circle" aria-label={social.label}>
                      <i className={`bi ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {renderFooterLinks("Quick Links", quickLinks)}
            {renderFooterLinks("Services", services.map((service) => [service, "#"]))}
            <div className="col-lg-4">
              <div className="footer-newsletter">
                <h5>Newsletter</h5>
                <p>Subscribe to receive updates and news about my latest projects.</p>
                <form className="mt-3">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email address" />
                    <button className="btn btn-gradient" type="submit" aria-label="Subscribe"><i className="bi bi-send-fill"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
            <p className="mb-0">© {new Date().getFullYear()} AR. All rights reserved.</p>
            <div className="footer-extra"><a href="#">Privacy Policy</a><span className="mx-2">•</span><a href="#">Terms of Service</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function renderFooterLinks(title, links) {
  return (
    <div className="col-lg-2 col-6">
      <div className="footer-links">
        <h5>{title}</h5>
        <ul>{links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
      </div>
    </div>
  );
}

export default Footer;
