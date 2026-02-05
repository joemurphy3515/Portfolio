import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
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

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">JM</div>
        <div className="nav-pill">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-glow"></div>
        <h1>
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

      <section className="section-container" id="work">
        <div className="section-header">
          <div className="vertical-bar"></div>
          <h2>Work</h2>
        </div>

        <div className="work-layout">
          <div className="work-sidebar">
            {workHistory.map((job, index) => (
              <button
                key={index}
                className={`work-tab ${activeWorkIndex === index ? "active" : ""}`}
                onClick={() => setActiveWorkIndex(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          <div className="work-content">
            <h3>{workHistory[activeWorkIndex].role}</h3>
            <span className="work-date">
              {workHistory[activeWorkIndex].period}
            </span>
            <p className="work-desc">
              {workHistory[activeWorkIndex].description}
            </p>
            <ul className="work-list">
              {workHistory[activeWorkIndex].highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="big-outline-text">What I Do</h2>
        <p className="section-subtext">
          Product to Engineering to Design to Operations
        </p>

        <div className="cards-stack">
          <div className="feature-card card-pm">
            <h3>Product Manager/Owner</h3>
            <p>
              I operate at the intersection of product strategy and delivery
              execution. While traditional Product Managers focus on vision, I
              bridge both roles to ensure ideas move seamlessly from concept to
              customer impact.
            </p>
            <p className="small-text">
              My experience spans defining product vision, aligning
              stakeholders, and validating user needs while translating strategy
              into clear requirements.
            </p>
          </div>

          <div className="feature-card card-eng">
            <h3>Hybrid Software engineering</h3>
            <p>
              I bring hands-on software engineering experience across both
              native mobile and full-stack web platforms. My technical
              background includes building production iOS applications using
              Swift and SwiftUI.
            </p>
            <p className="small-text">
              I have experience designing application architecture, integrating
              third-party APIs, and building serverless backend services.
            </p>
          </div>

          <div className="feature-card card-design">
            <h3>UI/UX Design</h3>
            <p>
              I design end-to-end digital experiences across web, mobile, and
              platform-based products. My work includes user interface design,
              user experience strategy, and brand development.
            </p>
            <p className="small-text">
              I utilize tools like Figma, Adobe XD, and Sketch to create
              wireframes, high-fidelity designs, and interactive prototypes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="section-header space-between">
          <div className="flex-align">
            <div className="vertical-bar"></div>
            <h2>Venture Projects</h2>
          </div>
          <button className="github-btn">
            <Github size={18} /> Github
          </button>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h4>{project.name}</h4>
                <div className="project-logo-placeholder">Logo</div>
              </div>
              <p className="project-desc">
                Description placeholder for the project goes here explaining the
                core functionality.
              </p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h2>Connect With Me</h2>
        <p>
          Open to consulting, full-time positions, advisory roles, and coffee.
        </p>
        <button className="cta-btn">Get In Touch</button>
      </footer>
    </div>
  );
};

export default App;
