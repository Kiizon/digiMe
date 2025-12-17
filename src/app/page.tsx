import ProjectCarousel from "@/components/ProjectCarousel";
import ThemeToggle from "@/components/ThemeToggle";
import { Mail, Github, Linkedin } from "lucide-react";

import React from "react";

// Components for the clean layout
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="section">
    <h3 className="section-title">{title}</h3>
    {children}
  </div>
);

const RoleItem = ({
  title,
  subtitle,
  href,
  logo
}: {
  title: string;
  subtitle: string;
  href?: string;
  logo?: string;
}) => (
  <div className="item">
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {logo ? (
          <img src={logo} alt={title} className="role-icon hover:opacity-80 transition-opacity" />
        ) : (
          <div className="icon-placeholder hover:opacity-80 transition-opacity" />
        )}
      </a>
    ) : (
      logo ? (
        <img src={logo} alt={title} className="role-icon" />
      ) : (
        <div className="icon-placeholder" />
      )
    )}
    <div className="item-content">
      <span className="item-title">{title}</span>
      <span className="item-subtitle">{subtitle}</span>
    </div>
  </div>
);



export default function Home() {
  return (
    <main className="container">
      {/* Intro */}
      {/* Intro */}
      <header className="intro-header">
        <div className="intro-text">
          <h1 style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "0.5rem" }}>
            hi im kish
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.5" }}>
            computer science student exploring ml, ai, automation, and app development. always trying to learn something new.
          </p>
        </div>
        <ThemeToggle />
      </header>

      {/* Currently */}
      <Section title="Currently">
        <div className="item-list">
          <RoleItem
            title="Computer Science"
            subtitle="Toronto Metropolitan University"
            href="https://www.torontomu.ca/"
            logo="/tmu-logo.jpg"
          />
        </div>
      </Section>

      {/* Previously */}
      <Section title="Previously">
        <div className="item-list">
          <RoleItem
            title="Software Developer Intern"
            subtitle="Morphace"
            href="https://www.morphace.com/"
            logo="/morphace-logo.jpg"
          />
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <ProjectCarousel />
      </Section>

      {/* Footer */}
      <footer className="footer">
        <div className="socials">
          <a href="mailto:kishdizon@gmail.com" aria-label="Email"><Mail size={18} /></a>
          <a href="https://github.com/Kiizon" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/kishdizon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>
        <div style={{ color: "var(--muted)", fontSize: "0.8rem", cursor: "default" }}>
          EN
        </div>
      </footer>
    </main>
  );
}
