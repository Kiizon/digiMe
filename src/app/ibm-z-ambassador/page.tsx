"use client";

import React from "react";
import Link from "next/link";

export default function IBMZAmbassadorPage() {
  return (
    <main className="container" style={{ justifyContent: "flex-start", paddingTop: "3rem" }}>
      {/* Back Button */}
      <Link 
        href="/" 
        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 mb-4"
        style={{ color: "var(--muted)" }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        back home
      </Link>

      {/* Title */}
      <h1 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "1rem" }}>
        Becoming an IBM Z Student Ambassador
      </h1>

      {/* Image */}
      <div style={{ 
        width: "100%", 
        borderRadius: "8px", 
        overflow: "hidden",
        marginBottom: "1.5rem",
        border: "1px solid var(--muted)",
        opacity: 0.9
      }}>
        <img 
          src="/ibmZpic.png" 
          alt="IBM Z Student Ambassador" 
          style={{ 
            width: "100%", 
            height: "auto",
            display: "block"
          }}
        />
      </div>

      {/* Description */}
      <div style={{ 
        fontSize: "1rem", 
        lineHeight: "1.7",
        color: "var(--foreground)"
      }}>
        <p style={{ marginBottom: "1.25rem" }}>
          I&apos;m excited to share that I&apos;ve been accepted as an{" "}
          <a 
            href="https://www.ibm.com/ca-en" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", fontWeight: 500 }}
          >
            IBM
          </a>{" "}
          Z Student Ambassador for the 2025-26 academic year! This leadership and technical 
          skill-building program empowers me to advocate for the powerful capabilities of IBM Z, 
          and to help my peers at Toronto Metropolitan University discover how mainframe technology 
          is shaping the future of enterprise computing.
        </p>

        <p style={{ marginBottom: "1.25rem" }}>
          Huge thanks to{" "}
          <a 
            href="https://www.ibm.com/ca-en" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", fontWeight: 500 }}
          >
            IBM
          </a>{" "}
          and{" "}
          <a 
            href="https://www.yourbigyear.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", fontWeight: 500 }}
          >
            Your Big Year
          </a>{" "}
          for this opportunity to grow, lead, and inspire innovation. Let&apos;s bring IBM Z to the spotlight!
        </p>

        {/* Goals Section */}
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "2rem", marginBottom: "1rem" }}>
          My Goals as an Ambassador
        </h2>
        
        <ul style={{ 
          listStyle: "disc", 
          paddingLeft: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem"
        }}>
          <li>Introduce mainframe technology and IBM Z to students on campus at Toronto Metropolitan University</li>
          <li>Host workshops and information sessions to help peers understand the relevance of mainframes in modern enterprise computing</li>
          <li>Collaborate with IBM to bring guest speakers and industry professionals to campus events in the future</li>
          <li>Build a community of students interested in enterprise technology and mainframe development</li>
        </ul>

        {/* Tags */}
        <div style={{ 
          marginTop: "2rem", 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "0.5rem",
          color: "var(--muted)",
          fontSize: "0.9rem"
        }}>
          <span>#ibmz</span>
          <span>#ibm</span>
          <span>#mainframe</span>
          <span>#YourBigYear</span>
        </div>
      </div>
    </main>
  );
}
