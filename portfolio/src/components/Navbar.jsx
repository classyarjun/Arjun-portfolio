import { useState, useEffect } from "react";
import { Sun } from "lucide-react";
import "./Navbar.css";

const navigationLinks = [
  { label: "HOME", href: "#home" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "SERVICES", href: "#services" },
  { label: "CERTIFICATES", href: "#certificates" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveLink(`#${topmost.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    navigationLinks.forEach((link) => {
      if (link.href !== "#" && link.href !== "#services" && link.href !== "#availability") {
        const el = document.getElementById(link.href.substring(1));
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} aria-label="Main navigation">
      <div className="navbar-container">
        <a
          className="navbar-brand"
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          aria-label="AR home"
        >
          <span className="brand-dot"></span>
          <span className="brand-text">AR</span>
        </a>

        <ul className={`navbar-menu ${mobileOpen ? "open" : ""}`}>
          {navigationLinks.map((link) => (
            <li className="navbar-item" key={link.href}>
              <a
                className={`navbar-link ${activeLink === link.href ? "active" : ""}`}
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label="Dark mode"
            title="Dark mode"
          >
            <Sun size={17} strokeWidth={2} />
          </button>

          <button
            className={`navbar-toggle ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
