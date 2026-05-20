import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Instagram,
  Copy,
  Check,
  User,
  Briefcase,
  Layers,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import data from "./data.json";
import "./App.css";

const App = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<
    "home" | "work" | "ventures" | "contact"
  >("home");
  const [copied, setCopied] = useState(false);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);

  const workHistory = data.workHistory || [];
  const projects = data.projects || [];
  const currentProject = projects[selectedProjectIdx] || null;

  const sectionIds = useMemo(
    () => ["home", "work", "ventures", "contact"] as const,
    [],
  );

  const scrollToId = (id: (typeof sectionIds)[number]) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navH = navRef.current?.getBoundingClientRect().height ?? 0;
    const y = window.scrollY + el.getBoundingClientRect().top - navH - 24;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: (typeof sectionIds)[number],
  ) => {
    e.preventDefault();
    setActiveSection(id);
    scrollToId(id);
  };

  useEffect(() => {
    const getActive = () => {
      const navH = navRef.current?.getBoundingClientRect().height ?? 0;
      const markerY = navH + 100;
      let current: (typeof sectionIds)[number] = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= markerY) current = id;
      }
      setActiveSection(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        getActive();
        ticking = false;
      });
    };

    getActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", getActive);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", getActive);
    };
  }, [sectionIds]);

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
    <div className="portfolio-dark-theme" id="home">
      <nav className="floating-navbar" ref={navRef}>
        <div className="nav-profile-badge">
          <div className="avatar-placeholder">JM</div>
        </div>
        <div className="nav-internal-pills">
          <button
            onClick={(e) => handleAnchorClick(e, "home")}
            className={`nav-icon-link ${activeSection === "home" ? "active" : ""}`}
            title="Home"
          >
            <User size={18} />
          </button>
          <button
            onClick={(e) => handleAnchorClick(e, "work")}
            className={`nav-icon-link ${activeSection === "work" ? "active" : ""}`}
            title="Experience & Projects"
          >
            <Briefcase size={18} />
          </button>
          <button
            onClick={(e) => handleAnchorClick(e, "ventures")}
            className={`nav-icon-link ${activeSection === "ventures" ? "active" : ""}`}
            title="Project Highlights"
          >
            <Layers size={18} />
          </button>
        </div>
        <button className="say-hello-cta" onClick={() => scrollToId("contact")}>
          Welcome! 👋
        </button>
      </nav>

      <header className="hero-grid-section">
        <div className="hero-left-intro">
          <span className="availability-tag">
            <span className="pulse-indicator"></span>Open to consulting,
            full-time positions, advisory roles, and coffee • Michigan, USA
          </span>
          <h1 className="main-headline">
            I’m Joe, a <strong>product engineer</strong> blending product,
            design, and engineering experience to build thoughtful software
            experiences.
          </h1>
        </div>

        <div className="interactive-node-display">
          <div className="node-center-frame">
            <div className="node-avatar">JM</div>
            <div className="node-label-tag">Joe Murphy</div>
          </div>
          <div className="floating-node node-pm">Product Strategy</div>
          <div className="floating-node node-eng">Full-Stack Dev</div>
          <div className="floating-node node-uiux">UI/UX Design</div>
          <div className="floating-node node-audio">Music Producer</div>
        </div>
      </header>

      <main className="dashboard-bento-grid" id="work">
        <section className="bento-card card-experience">
          <div className="card-header-row">
            <h2 className="card-title">Experience</h2>
            <span className="card-subtitle-metric">12+ Years</span>
          </div>
          <div className="timeline-scroll-container">
            <div className="timeline-list">
              {workHistory.map((job: any, idx: number) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot-connector"></div>
                  <div className="timeline-meta">
                    <div className="company-title">{job.company}</div>
                    <div className="role-tenure-row">
                      <span className="role-text">{job.role}</span>
                      <span className="date-text">{job.period}</span>
                    </div>
                    <p className="timeline-brief">{job.description}</p>
                    {job.highlights && (
                      <ul className="timeline-highlights-inline">
                        {job.highlights.map((h: string, i: number) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bento-sub-column">
          <section className="bento-card card-skills">
            <h2 className="card-title">Skills & Expertise</h2>
            <div className="tags-flex-wrap">
              <span className="skill-tag">Product Management</span>
              <span className="skill-tag">System Architecture</span>
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">SwiftUI / iOS</span>
              <span className="skill-tag">React & TypeScript</span>
              <span className="skill-tag">Python / FastAPI</span>
              <span className="skill-tag">Audio Production</span>
            </div>
          </section>

          <section className="bento-card card-stacks">
            <h2 className="card-title">Ecosystem</h2>
            <p className="stacks-description">
              Core architectures designed for production readiness.
            </p>
            <div className="stacks-mini-grid">
              <div className="stack-mini-pill">SwiftUI</div>
              <div className="stack-mini-pill">FastAPI</div>
              <div className="stack-mini-pill">React</div>
              <div className="stack-mini-pill">PostgreSQL</div>
            </div>
          </section>
        </div>

        <section className="bento-card card-connect" id="contact">
          <h2 className="card-title">Connect</h2>
          <div className="social-links-stack">
            <a
              href="https://www.linkedin.com/in/joemurphy2591/"
              target="_blank"
              rel="noreferrer"
              className="social-row-item"
            >
              <Linkedin size={16} /> <span>Linkedin</span>
            </a>
            <a
              href="https://github.com/joemurphy3515"
              target="_blank"
              rel="noreferrer"
              className="social-row-item"
            >
              <Github size={16} /> <span>Github</span>
            </a>
          </div>

          <div className="email-action-footer-box">
            <button
              className="email-copy-trigger-pill"
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
                  <Check size={14} className="text-success" />
                  <span>Copied Address!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>jmurphy2591@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </section>
      </main>

      <section className="project-spotlight-section" id="ventures">
        <div className="spotlight-header">
          <div className="spotlight-title-group">
            <span className="spotlight-pre">Deep Dive</span>
            <h2 className="spotlight-main-title">Project Highlights</h2>
          </div>
          <div className="spotlight-horizontal-divider"></div>
        </div>

        <div className="spotlight-workspace-grid">
          <div className="spotlight-selector-side">
            {projects.map((project: any, idx: number) => (
              <button
                key={idx}
                className={`spotlight-menu-row ${selectedProjectIdx === idx ? "active" : ""}`}
                onClick={() => setSelectedProjectIdx(idx)}
              >
                <div className="menu-row-content">
                  <span className="project-sequence-num">0{idx + 1}</span>
                  <span className="project-menu-name">{project.name}</span>
                </div>
                <ChevronRight size={16} className="menu-arrow-icon" />
              </button>
            ))}
          </div>

          <div className="spotlight-preview-display-side">
            {currentProject && (
              <div className="spotlight-display-card-wrapper">
                <div className="mockup-window-canvas">
                  <div className="mockup-window-header-bar">
                    <div className="mockup-window-dots">
                      <span className="dot dot-r"></span>
                      <span className="dot dot-y"></span>
                      <span className="dot dot-g"></span>
                    </div>
                    <div className="mockup-window-address-bar">
                      {currentProject.name.toLowerCase()}.app
                    </div>
                  </div>
                  <div className="mockup-window-interior-view">
                    <div className="mockup-graphic-abstract-panel">
                      <div className="abstract-glow-orb"></div>
                      <Sparkles size={40} className="abstract-center-icon" />
                      <div className="abstract-ui-stripes">
                        <span className="stripe w-70"></span>
                        <span className="stripe w-50"></span>
                        <span className="stripe w-85"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spotlight-text-details">
                  <div className="spotlight-details-header">
                    <h3 className="spotlight-details-title">
                      {currentProject.name}
                    </h3>
                    <span className="spotlight-status-pill">Active Build</span>
                  </div>
                  <p className="spotlight-details-description">
                    {currentProject.description}
                  </p>
                  <div className="spotlight-details-tags">
                    {currentProject.tags?.map((tag: string, i: number) => (
                      <span key={i} className="spotlight-detail-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
