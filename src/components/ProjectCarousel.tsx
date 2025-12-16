"use client";

import React, { useState } from "react";

type Project = {
    title: string;
    href: string;
};

const PROJECTS: Project[] = [
    { title: "musubi", href: "https://github.com/Kiizon/musubi" },
    { title: "cryptoRAG", href: "https://github.com/Kiizon/cryptoRAG" },
    { title: "MealMate", href: "https://github.com/Kiizon/MealMate" },
    { title: "Moba Analytics", href: "https://github.com/Kiizon/Moba-Analytics-Dashboard" },
    { title: "MNIST-keras", href: "https://github.com/Kiizon/MNIST-keras" },
    { title: "K-means Exposure", href: "https://github.com/Kiizon/K-means-digital-exposure" },
    { title: "auto-note", href: "https://github.com/Kiizon/auto-note" },
    { title: "pomo", href: "https://github.com/Kiizon/pomo" },
    { title: "chrome-dino", href: "https://github.com/Kiizon/chrome-dino" },
    { title: "flippscrape", href: "https://github.com/Kiizon/flippscrape" },
    { title: "shift2notion", href: "https://github.com/Kiizon/shift2notion" },
];

const ITEMS_PER_PAGE = 4;

export default function ProjectCarousel() {
    const [startIndex, setStartIndex] = useState(0);

    const next = () => {
        setStartIndex((prev) =>
            Math.min(prev + ITEMS_PER_PAGE, PROJECTS.length - ITEMS_PER_PAGE < 0 ? 0 : PROJECTS.length - ITEMS_PER_PAGE)
        );
    };

    const prev = () => {
        setStartIndex((prev) => Math.max(prev - ITEMS_PER_PAGE, 0));
    };

    // Logic for simple pagination or sliding window?
    // User said "go left or right".
    // Let's do a sliding window or pages? "view the others" implies paging or sliding. 
    // Given the grid of 4, simplest is pages or just clamping.
    // Actually, if we have 11 items and show 4.
    // indices: 0-3, 4-7, 8-10.
    // Let's implement simpler next/prev that shifts by 1 or by PAGE. By PAGE is standard for "view others".
    // Let's stick to shifting by ITEMS_PER_PAGE for a cleaner block swap, or maybe by 1 for smoother?
    // "view the others" usually implies pagination. Let's do shifting by ITEMS_PER_PAGE but clamp correctly.

    // Actually, with simple text < > controls below or sides.
    // Minimalist: <  > arrows near the title or below.

    const visibleProjects = PROJECTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const hasNext = startIndex + ITEMS_PER_PAGE < PROJECTS.length;
    const hasPrev = startIndex > 0;

    return (
        <div className="carousel-container">
            <button
                onClick={prev}
                disabled={!hasPrev}
                className="nav-button nav-left"
                aria-label="Previous projects"
            >
                &lt;
            </button>

            <div className="project-grid">
                {visibleProjects.map((project) => (
                    <a
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <div className="project-image-placeholder" />
                        <span className="project-title">{project.title}</span>
                    </a>
                ))}
            </div>

            <button
                onClick={next}
                disabled={!hasNext}
                className="nav-button nav-right"
                aria-label="Next projects"
            >
                &gt;
            </button>
        </div>
    );
}
