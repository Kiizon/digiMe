import ProjectSection from "@/components/ProjectSection";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import React from "react";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="section">
    <h2 className="section-title">
      {title}
    </h2>
    {children}
  </section>
);

const Row = ({
  title,
  subtitle,
  href,
  external = true,
}: {
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
}) => {
  const inner = (
    <>
      <span className="row-title">{title}</span>
      <span className="row-sub">{subtitle}</span>
    </>
  );
  return external ? (
    <a className="row" href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link className="row" href={href}>
      {inner}
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <header className="bar">
        <span className="bar-id">kish dizon</span>
        <span className="bar-meta">toronto, ca</span>
      </header>

      <main className="frame-body">
        <div className="intro">
          <div>
            <h1 className="name">hi! my name is kish :D</h1>
            <p className="bio">
              computer science student learning how to build systems that scale. into backend,
              infrastructure, and ml, and always tinkering with something on the side.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <Section title="currently">
          <Row
            title="Mobile Developer Intern"
            subtitle="Noble Solutions Group"
            href="https://advanceontario.riipen.com/companies/jzm0KgOm"
          />
          <Row
            title="Computer Science"
            subtitle="Toronto Metropolitan University"
            href="https://www.torontomu.ca/"
          />
        </Section>

        <Section title="previously">
          <Row
            title="Software Developer Intern"
            subtitle="Morphace"
            href="https://www.morphace.com/"
          />
        </Section>

        <Section title="recent">
          <Row
            title="IBM Z Student Ambassador"
            subtitle="2025-26"
            href="/ibm-z-ambassador"
            external={false}
          />
        </Section>

        <Section title="projects">
          <ProjectSection />
        </Section>
      </main>

      <footer className="bar bar-foot">
        <nav className="links">
          <a href="mailto:kishdizon@gmail.com">email</a>
          <a href="https://github.com/Kiizon" target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a href="https://www.linkedin.com/in/kishdizon/" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
        </nav>
        <span className="bar-meta">© 2026</span>
      </footer>
    </>
  );
}
