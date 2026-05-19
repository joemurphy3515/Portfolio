import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  Instagram,
  Copy,
  Check,
  User,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";
import data from "./data.json";
import "./App.css";

const App = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [activeSection, setActiveSection] = useState<
    "home" | "work" | "ventures" | "contact"
  >("home");
  const [copied, setCopied] = useState(false);

  const workHistory = data.workHistory || [];
  const projects = data.projects || [];

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
      {/* Floating Top Navbar */}
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
            title="Experience"
          >
            <Briefcase size={18} />
          </button>
          <button
            onClick={(e) => handleAnchorClick(e, "ventures")}
            className={`nav-icon-link ${activeSection === "ventures" ? "active" : ""}`}
            title="Ventures"
          >
            <Layers size={18} />
          </button>
        </div>
        <button className="say-hello-cta" onClick={() => scrollToId("contact")}>
          Say Hello! 👋
        </button>
      </nav>

      {/* Main Hero Layout Grid */}
      <header className="hero-grid-section">
        <div className="hero-left-intro">
          <span className="availability-tag">
            <span className="pulse-indicator"></span> Available for Freelancing
            & Consulting • Michigan, USA
          </span>
          <h1 className="main-headline">
            I'm Joe, a <strong>product manager</strong> crafting
            multi-disciplinary software with tactical precision.
          </h1>
        </div>

        {/* Dynamic Interactive Avatar Node Graphic */}
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

      {/* Grid Dashboard Widgets */}
      <main className="dashboard-bento-grid">
        {/* Experience Widget */}
        <section className="bento-card card-experience" id="work">
          <div className="card-header-row">
            <h2 className="card-title">Experience</h2>
            <span className="card-subtitle-metric">12+ Years</span>
          </div>
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Stack & Skills Container */}
        <div className="bento-sub-column">
          {/* Skills & Expertise */}
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

          {/* Essential Stacks */}
          <section className="bento-card card-stacks" id="ventures">
            <h2 className="card-title">Venture Projects & Ecosystems</h2>
            <p className="stacks-description">
              Building automated platforms, tracking apps, and discovery
              interfaces.
            </p>
            <div className="projects-mini-list">
              {projects.map((project: any, idx: number) => (
                <div className="mini-project-row" key={idx}>
                  <div className="project-bullet-icon">
                    <Sparkles size={14} className="accent-color" />
                  </div>
                  <div className="mini-project-details">
                    <div className="mini-project-name">{project.name}</div>
                    <div className="mini-project-tags">
                      {project.tags?.join(" • ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Connect & Communication Widget */}
        <section className="bento-card card-connect" id="contact">
          <h2 className="card-title">Connect</h2>
          <div className="social-links-stack">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-row-item"
            >
              <Linkedin size={18} /> <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-row-item"
            >
              <Twitter size={18} /> <span>X (Previously Twitter)</span>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="social-row-item"
            >
              <Mail size={18} /> <span>Telegram</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-row-item"
            >
              <Instagram size={18} /> <span>Instagram</span>
            </a>
          </div>

          <div className="email-action-footer-box">
            <div className="action-text-group">
              <span className="action-label">Let's Work Together!</span>
              <span className="action-subtext">
                Click below to copy email address
              </span>
            </div>
            <button
              className="email-copy-trigger-pill"
              onClick={handleCopyEmail}
            >
              {copied ? (
                <>
                  <Check size={16} className="text-success" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>jmurphy2591@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
