import "./App.css";

function App() {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          name: "Nginx",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
      ],
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            AR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-animation">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
        <div className="container position-relative">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-6 hero-content">
              <div className="animate-left">
                <div className="hero-badge">
                  <span className="badge-pill">Available for Freelance</span>
                </div>
                <h1 className="hero-title">
                  Hi, I&#39;m <span className="text-gradient">Arjun Rajput</span>
                  <div className="developer-text">Full Stack Developer</div>
                </h1>

                <div className="contact-social">
                  <a
                    href="https://linkedin.com/in/arjun-rajput-863a721b7/"
                    target="_blank"
                    className="social-btn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/classarjun"
                    target="_blank"
                    className="social-btn"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" className="social-btn">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a 
                    href="https://instagram.com/classarjunn"
                  className="social-btn">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>

                <p className="hero-description">
                  Transforming ideas into powerful digital solutions with modern
                  technologies
                </p>
                <div className="hero-buttons d-flex flex-md-row flex-column gap-3">
                  <a href="#contact" className="btn btn-gradient">
                    <span>Let&#39;s Talk</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                  <a href="#projects" className="btn btn-outline-light">
                    <i className="bi bi-collection-play"></i>
                    <span>View Work</span>
                  </a>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-text">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-text">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-text">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-image">
              <div className="animate-right">
                <div className="image-wrapper">
                  <img
                    src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                    alt="Hero"
                  />
                  <div className="floating-card card1">
                    <i className="bi bi-code-slash"></i>
                    <span>Developer</span>
                  </div>
                  <div className="floating-card card2">
                    <i className="bi bi-palette"></i>
                    <span>Designer</span>
                  </div>
                  <div className="experience-badge">
                    <span>5+ Years</span>
                    <span>Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-6 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
                alt="About"
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-md-7">
              <h6 className="text-primary fw-bold">ABOUT ME</h6>
              <h2 className="mb-4">A passionate Developer who loves to code</h2>
              <p className="lead mb-4">
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-4 me-3"></i>
                    <div>
                      <h5 className="mb-0">Web Development</h5>
                      <p className="mb-0">Modern & Mobile-Ready</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-4 me-3"></i>
                    <div>
                      <h5 className="mb-0">UI/UX Design</h5>
                      <p className="mb-0">Clean & Modern Design</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills-container">
                <span className="skill-badge">HTML5</span>
                <span className="skill-badge">CSS3</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">React</span>
                <span className="skill-badge">Bootstrap</span>
                <span className="skill-badge">Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-6">
        <div className="container">
          <h6 className="text-primary fw-bold text-center">SKILLS</h6>
          <h2 className="text-center mb-5">Tech Stack</h2>

          <div className="row g-4">
            {skills.map((category, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="skills-category">
                  <h5 className="category-title">{category.category}</h5>
                  <div className="skills-grid">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="skill-icon"
                        />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-6">
        <div className="container">
          <h6 className="text-primary fw-bold text-center">PORTFOLIO</h6>
          <h2 className="text-center mb-5">Featured Projects</h2>
          <div className="row g-4">
            {[
              {
                title: "E-commerce Website",
                image:
                  "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg",
                desc: "Modern e-commerce platform with React",
                tech: ["React", "Node.js", "MongoDB"],
              },
              {
                title: "Task Manager",
                image:
                  "https://img.freepik.com/free-vector/schedule-management-planning-events-time-management_335657-3153.jpg",
                desc: "Task management application",
                tech: ["React", "Firebase"],
              },
              {
                title: "Portfolio Website",
                image:
                  "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
                desc: "Personal portfolio website",
                tech: ["React", "Bootstrap"],
              },
            ].map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="project-card">
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid rounded-top"
                    />
                  </div>
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.desc}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="btn btn-primary mt-3 ">
                      View Project
                    </a>
                    <a href="#" className="btn btn-danger mt-3 mx-1">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-6">
        <div className="container">
          <h6 className="text-gradient fw-bold text-center">CONTACT</h6>
          <h2 className="text-center text-white mb-5">Let&#39;s Work Together</h2>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact-wrapper">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="contact-image-wrapper">
                      <img
                        src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
                        alt="Contact"
                        className="contact-image"
                      />
                      <div className="contact-overlay">
                        <div className="contact-info">
                          <h4 className="mb-4">Contact Information</h4>
                          <div className="info-item">
                            <i className="bi bi-geo-alt-fill"></i>
                            <div>
                              <h6>Location</h6>
                              <p>Aurangabad, Maharashtra, India</p>
                            </div>
                          </div>
                          <div className="info-item">
                            <i className="bi bi-envelope-fill"></i>
                            <div>
                              <h6>Email</h6>
                              <p>arjunrajput7531@gmail.com</p>
                            </div>
                          </div>
                          <div className="info-item">
                            <i className="bi bi-phone-fill"></i>
                            <div>
                              <h6>Phone</h6>
                              <p>+91 7666-277351</p>
                            </div>
                          </div>
                          <div className="contact-social">
                            <a
                              href="https://https://www.linkedin.com/in/arjun-rajput-863a721b7/"
                              target="_blank"
                              className="social-btn"
                            >
                              <i className="bi bi-linkedin"></i>
                            </a>
                            <a
                              href="https://github.com/classyarjun"
                              target="_blank"
                              className="social-btn"
                            >
                              <i className="bi bi-github"></i>
                            </a>
                            <a href="#" className="social-btn">
                              <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://instagram.com/classyarjunn" className="social-btn">
                              <i className="bi bi-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="contact-form-wrapper">
                      <form
                        data-aos="fade-up"
                        data-aos-delay="200"
                        action="https://api.web3forms.com/submit"
                        method="POST"
                      >
                        <input
                          type="hidden"
                          name="access_key"
                          value="fe20eced-cc76-49a1-8ba8-7ff039f9f43b"
                        />

                        <div className="form-title">
                          <h4>Send me a message</h4>
                          <p>I&#39;ll get back to you as soon as possible</p>
                        </div>
                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="nameInput"
                                placeholder="Your Name"
                              />
                              <label htmlFor="nameInput">Your Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="Your Email"
                              />
                              <label htmlFor="emailInput">Your Email</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                name="subject"
                                className="form-control"
                                id="subjectInput"
                                placeholder="Subject"
                              />
                              <label htmlFor="subjectInput">Subject</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <textarea
                                name="message"
                                className="form-control"
                                id="messageInput"
                                placeholder="Your Message"
                                style={{ height: "150px" }}
                              ></textarea>
                              <label htmlFor="messageInput">Your Message</label>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            name="botcheck"
                            className="hidden"
                            style={{ display: "none" }}
                          />

                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn btn-gradient w-100"
                            >
                              Send Message{" "}
                              <i className="bi bi-send-fill ms-2"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="footer-brand">
                  <h3>
                    KR<span className="text-gradient">.</span>
                  </h3>
                  <p className="mt-3">
                    Creating digital experiences with passion and purpose. Let's
                    build something amazing together.
                  </p>
                  <div className="footer-social mt-4">
                    <a  href="https://www.linkedin.com/in/karan-rajput21"
                    target="_blank"className="social-circle">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a  href="https://github.com/ClassyKaran"
                    target="_blank" className="social-circle">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="social-circle">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="social-circle">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-6">
                <div className="footer-links">
                  <h5>Quick Links</h5>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#projects">Projects</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-6">
                <div className="footer-links">
                  <h5>Services</h5>
                  <ul>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">Mobile Apps</a>
                    </li>
                    <li>
                      <a href="#">Consulting</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-newsletter">
                  <h5>Newsletter</h5>
                  <p>
                    Subscribe to receive updates and news about my latest
                    projects.
                  </p>
                  <form className="mt-3">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <button className="btn btn-gradient" type="submit">
                        <i className="bi bi-send-fill"></i>
                      </button>
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
              <p className="mb-0">
                © {new Date().getFullYear()} KR. All rights reserved.
              </p>
              <div className="footer-extra">
                <a href="#">Privacy Policy</a>
                <span className="mx-2">•</span>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
