import React, { useEffect, useState } from "react";
import { Github } from "lucide-react";
import data from "./data.json";
import "./App.css";

const App = () => {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);

  const workHistory = data.workHistory;
  const projects = data.projects;
  const activeJob = workHistory[activeWorkIndex];

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sectionIds = ["home", "work", "ventures", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          document.querySelectorAll(".nav-pill-link").forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.toggle("nav-pill-link--active", href === `#${id}`);
          });
        });
      },
      { threshold: 0.35 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jmurphy2591@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Joe Murphy</div>

        <div className="nav-pill">
          <a
            href="#home"
            className="nav-pill-link nav-pill-link--active"
            onClick={(e) => handleAnchorClick(e, "home")}
          >
            Home
          </a>

          <a
            href="#work"
            className="nav-pill-link"
            onClick={(e) => handleAnchorClick(e, "work")}
          >
            Work
          </a>

          <a
            href="#ventures"
            className="nav-pill-link"
            onClick={(e) => handleAnchorClick(e, "ventures")}
          >
            Ventures
          </a>

          <a
            href="/Joe_Murphy_Resume.docx"
            className="nav-pill-link"
            download="Joe_Murphy_Resume.docx"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="nav-pill-link"
            onClick={(e) => handleAnchorClick(e, "contact")}
          >
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
          <h2 className="section-title">Recent Work</h2>
        </div>

        <div className="work-layout">
          <div className="work-sidebar">
            {workHistory.map((job: any, index: number) => (
              <button
                key={index}
                className={`work-tab ${
                  activeWorkIndex === index ? "work-tab--active" : ""
                }`}
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
              {activeJob.highlights.map((point: string, i: number) => (
                <li className="work-list-item" key={i}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container capabilities" id="about">
        <div className="section-header section-header--space-between">
          <div className="section-header-left">
            <div className="vertical-bar" />
            <div>
              <h2 className="section-title">What I Do</h2>
              <p className="section-subtext">
                Product leadership, full-stack engineering, and UI/UX design,
                end to end.
              </p>
            </div>
          </div>
        </div>

        <div className="cap-grid">
          <article className="cap-card">
            <div className="cap-top">
              <div className="cap-icon" aria-hidden="true">
                ◆
              </div>
              <div>
                <h3 className="cap-title">Product Manager / Owner</h3>
                <p className="cap-summary">
                  I bridge product strategy and delivery execution to move ideas
                  from concept to customer impact.
                </p>
              </div>
            </div>

            <ul className="cap-points">
              <li>
                Vision, roadmap, and prioritization grounded in insights +
                metrics
              </li>
              <li>
                Requirements, user stories, and sprint execution with
                engineering
              </li>
              <li>Stakeholder alignment, workshops, and measurable outcomes</li>
            </ul>
          </article>

          <article className="cap-card">
            <div className="cap-top">
              <div className="cap-icon" aria-hidden="true">
                ⬣
              </div>
              <div>
                <h3 className="cap-title">Hybrid Software Engineering</h3>
                <p className="cap-summary">
                  Hands-on across native iOS and full-stack web development,
                  APIs, and production delivery.
                </p>
              </div>
            </div>

            <ul className="cap-points">
              <li>Swift / SwiftUI apps with scalable MVVM patterns</li>
              <li>React + TypeScript, Node/Express, Python/FastAPI backends</li>
              <li>
                Firebase + cloud services for real-time, data-driven systems
              </li>
            </ul>
          </article>

          <article className="cap-card">
            <div className="cap-top">
              <div className="cap-icon" aria-hidden="true">
                ◼
              </div>
              <div>
                <h3 className="cap-title">UI/UX Design</h3>
                <p className="cap-summary">
                  End-to-end product design across mobile and web, from concept
                  to polished, usable interfaces.
                </p>
              </div>
            </div>

            <ul className="cap-points">
              <li>Wireframes → high-fidelity → interactive prototypes</li>
              <li>Design systems, branding, and consistent visual language</li>
              <li>Tools: Figma, Adobe XD, Sketch, Photoshop, Illustrator</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-container" id="ventures">
        <div className="section-header section-header--space-between">
          <div className="section-header-left">
            <div className="vertical-bar" />
            <h2 className="section-title">Venture Projects</h2>
          </div>

          <a
            href="https://github.com/joemurphy3515"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <Github size={18} />
            Github
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project: any, index: number) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h4 className="project-title">{project.name}</h4>
                <div className="project-logo-placeholder">Logo</div>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag: string) => (
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

        <button className="cta-btn" type="button" onClick={handleCopyEmail}>
          {copied ? "Email Copied!" : "Get In Touch"}
        </button>
      </footer>
    </div>
  );
};

export default App;
