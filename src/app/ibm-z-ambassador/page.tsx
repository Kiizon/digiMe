import React from "react";
import Link from "next/link";

export default function IBMZAmbassadorPage() {
  return (
    <>
      <header className="bar">
        <Link href="/" className="bar-id">
          <span aria-hidden="true">&lt;-</span> back home
        </Link>
        <span className="bar-meta">log / 2025-26</span>
      </header>

      <main className="frame-body article">
        <h1 className="name">Becoming an IBM Z Student Ambassador</h1>

        <img className="article-img" src="/ibmZpic.png" alt="IBM Z Student Ambassador" />

        <p>
          I&apos;m excited to share that I&apos;ve been accepted as an{" "}
          <a href="https://www.ibm.com/ca-en" target="_blank" rel="noopener noreferrer">
            IBM
          </a>{" "}
          Z Student Ambassador for the 2025-26 academic year! This leadership and technical
          skill-building program empowers me to advocate for the powerful capabilities of IBM Z,
          and to help my peers at Toronto Metropolitan University discover how mainframe
          technology is shaping the future of enterprise computing.
        </p>

        <p>
          Huge thanks to{" "}
          <a href="https://www.ibm.com/ca-en" target="_blank" rel="noopener noreferrer">
            IBM
          </a>{" "}
          and{" "}
          <a href="https://www.yourbigyear.com/" target="_blank" rel="noopener noreferrer">
            Your Big Year
          </a>{" "}
          for this opportunity to grow, lead, and inspire innovation. Let&apos;s bring IBM Z to
          the spotlight!
        </p>

        <h2 className="section-title">my goals as an ambassador</h2>

        <ul className="article-list">
          <li>
            Introduce mainframe technology and IBM Z to students on campus at Toronto
            Metropolitan University
          </li>
          <li>
            Host workshops and information sessions to help peers understand the relevance of
            mainframes in modern enterprise computing
          </li>
          <li>
            Collaborate with IBM to bring guest speakers and industry professionals to campus
            events in the future
          </li>
          <li>
            Build a community of students interested in enterprise technology and mainframe
            development
          </li>
        </ul>

        <div className="tags">
          <span>#ibmz</span>
          <span>#ibm</span>
          <span>#mainframe</span>
          <span>#YourBigYear</span>
        </div>
      </main>
    </>
  );
}
