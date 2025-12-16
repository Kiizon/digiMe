import ProjectCarousel from "@/components/ProjectCarousel";
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
    {logo ? (
      <img src={logo} alt={title} className="role-icon" />
    ) : (
      <div className="icon-placeholder" />
    )}
    <div className="item-content">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="item-title">{title}</a>
      ) : (
        <span className="item-title">{title}</span>
      )}
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
            computer science student exploring ml, ai, and building things for the web.
            always trying to learn something new.
          </p>
        </div>
        <img src="/me-logo.png" alt="Kish Dizon" className="profile-pic" />
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
