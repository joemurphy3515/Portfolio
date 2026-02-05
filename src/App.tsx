import React, { useState } from "react";
import { Github } from "lucide-react";
import "./App.css";

const App = () => {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);

  const workHistory = [
    {
      company: "Ford",
      role: "Product Owner @ Ford",
      period: "Jan 2023 - Present",
      description:
        "Led cross-functional teams to ship enterprise-scale solutions. Bridge the gap between engineering, design, and business strategy.",
      highlights: [
        "Managed roadmap for enterprise connectivity tools.",
        "Reduced technical debt by 20% through strategic refactoring.",
        "Facilitated agile ceremonies for a team of 15 developers.",
      ],
    },
    {
      company: "iOS Engineer",
      role: "Senior iOS Engineer",
      period: "2021 - 2023",
      description:
        "Built native mobile experiences focusing on performance and animations.",
      highlights: [
        "Developed features for high-traffic consumer app.",
        "Implemented CI/CD pipelines for mobile build delivery.",
      ],
    },
    {
      company: "Full Stack Engineer",
      role: "Full Stack Developer",
      period: "2019 - 2021",
      description: "End-to-end development using MERN stack.",
      highlights: [
        "Built RESTful APIs.",
        "Designed responsive front-end layouts.",
      ],
    },
    {
      company: "AndPlus",
      role: "Software Engineer",
      period: "2018 - 2019",
      description: "Consultancy engineering.",
      highlights: ["Client facing role."],
    },
    {
      company: "Kortx",
      role: "Frontend Dev",
      period: "2017 - 2018",
      description: "Ad-tech solutions.",
      highlights: ["React based dashboard."],
    },
    {
      company: "Latcha",
      role: "Web Developer",
      period: "2016 - 2017",
      description: "Agency work.",
      highlights: ["Marketing sites."],
    },
    {
      company: "GTB",
      role: "Intern",
      period: "2015 - 2016",
      description: "General IT support.",
      highlights: ["System admin tasks."],
    },
  ];

  const projects = [
    { name: "Project Alpha", tags: ["React", "Node.js", "Firebase"] },
    { name: "Beta App", tags: ["SwiftUI", "CoreData"] },
    { name: "Gamma Tools", tags: ["Python", "FastAPI", "Docker"] },
    { name: "Delta UI", tags: ["Figma", "Design System"] },
    { name: "Epsilon Dash", tags: ["Vue", "D3.js"] },
    { name: "Zeta Script", tags: ["TypeScript", "AWS"] },
  ];

  const activeJob = workHistory[activeWorkIndex];

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">JM</div>
        <div className="nav-pill">
          <a href="#home" className="nav-pill-link nav-pill-link--active">
            Home
          </a>
          <a href="#about" className="nav-pill-link">
            About
          </a>
          <a href="#work" className="nav-pill-link">
            Work
          </a>
          <a href="#resume" className="nav-pill-link">
            Resume
          </a>
          <a href="#contact" className="nav-pill-link">
            Contact
          </a>
        </div>
      </nav>

      <header className="hero" id="home">
        <h1 className="hero-title">
          The
          <br />
          Full-Stack
          <br />
          Product
        </h1>
        <p className="hero-subtitle">
          I don't just manage the roadmap; I design, code, and launch it. From
          enterprise scale to startup speed, I welcome the mountains that slow
          others down.
        </p>
      </header>

      <div className="blue-circle" />
      <div className="green-circle" />

      <section className="section-container" id="work">
        <div className="section-header">
          <div className="vertical-bar" />
          <h2 className="section-title">Work</h2>
        </div>

        <div className="work-layout">
          <div className="work-sidebar">
            {workHistory.map((job, index) => (
              <button
                key={index}
                className={`work-tab ${activeWorkIndex === index ? "work-tab--active" : ""}`}
                onClick={() => setActiveWorkIndex(index)}
                type="button"
              >
                {job.company}
              </button>
            ))}
          </div>

          <div className="work-content">
            <h3 className="work-role">{activeJob.role}</h3>
            <span className="work-date">{activeJob.period}</span>
            <p className="work-desc">{activeJob.description}</p>
            <ul className="work-list">
              {activeJob.highlights.map((point, i) => (
                <li className="work-list-item" key={i}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container what-i-do">
        <div className="what-header">
          <h2 className="big-outline-text">What I Do</h2>
          <p className="section-subtext">
            From Product to Engineering to Design to Operations
          </p>
        </div>

        <div className="folders-stack">
          <article className="folder-card folder-pm">
            <div className="folder-tab">
              <span className="folder-tab-text">Product Manager/Owner</span>
            </div>

            <div className="folder-body">
              <p className="folder-body-text">
                I operate at the intersection of product strategy and delivery
                execution. While traditional Product Managers focus on vision
                and market strategy, and Product Owners focus on backlog
                execution and sprint delivery, I bridge both roles to ensure
                ideas move seamlessly from concept to customer impact.
              </p>
              <p className="folder-body-text folder-body-text--small">
                My experience spans defining product vision, aligning
                stakeholders, and validating user needs, while also translating
                strategy into clear requirements, prioritizing backlogs, and
                working closely with engineering and design teams to deliver
                high-quality solutions. This dual perspective allows me to
                maintain strategic alignment while ensuring consistent,
                efficient execution.
              </p>
            </div>
          </article>

          <article className="folder-card folder-eng">
            <div className="folder-tab">
              <span className="folder-tab-text">
                Hybrid Software Engineering
              </span>
            </div>

            <div className="folder-body">
              <p className="folder-body-text">
                I bring hands-on software engineering experience across both
                native mobile and full-stack web platforms. My technical
                background includes building production iOS applications using
                Swift and SwiftUI, alongside designing and developing scalable
                web applications using React, TypeScript, Node.js, Python, and
                cloud-based backend services like FIrebase.
              </p>
              <p className="folder-body-text folder-body-text--small">
                I have experience designing application architecture,
                integrating third-party APIs, building serverless backend
                services, and developing full-stack backend systems using
                Node.js with Express and Python with FastAPI. I’ve worked
                extensively with real-time data platforms such as Firebase and
                modern cloud infrastructure to support scalable, data-driven
                applications. This cross-platform experience allows me to
                understand system design end-to-end and collaborate effectively
                across engineering, design, and product teams.
              </p>
            </div>
          </article>

          <article className="folder-card folder-design">
            <div className="folder-tab">
              <span className="folder-tab-text">UI/UX Design</span>
            </div>

            <div className="folder-body">
              <p className="folder-body-text">
                I design end-to-end digital experiences across web, mobile, and
                platform-based products. My work includes user interface design,
                user experience strategy, and brand development to ensure
                consistent and engaging product experiences.
              </p>
              <p className="folder-body-text folder-body-text--small">
                I’ve designed a wide range of applications including
                consumer-facing products, internal enterprise tools, and
                scalable platform ecosystems. I use tools such as Figma, Adobe
                XD, Sketch, Photoshop, and Illustrator to create wireframes,
                high-fidelity designs, interactive prototypes, and brand assets.
                My design process blends user research, usability principles,
                and product strategy to deliver intuitive, high-impact
                experiences.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-container">
        <div className="section-header section-header--space-between">
          <div className="section-header-left">
            <div className="vertical-bar" />
            <h2 className="section-title">Venture Projects</h2>
          </div>
          <button className="github-btn" type="button">
            <Github size={18} /> Github
          </button>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h4 className="project-title">{project.name}</h4>
                <div className="project-logo-placeholder">Logo</div>
              </div>
              <p className="project-desc">
                Description placeholder for the project goes here explaining the
                core functionality.
              </p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <h2 className="footer-title">Connect With Me</h2>
        <p className="footer-subtitle">
          Open to consulting, full-time positions, advisory roles, and coffee.
        </p>
        <button className="cta-btn" type="button">
          Get In Touch
        </button>
      </footer>
    </div>
  );
};

export default App;
