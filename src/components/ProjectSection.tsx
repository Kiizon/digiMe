"use client";

import React from "react";

type Project = {
    title: string;
    href: string;
};

const PROJECTS: Project[] = [
    {
        title: "html.ai",
        href: "https://htmlai.tech/",
    },
    {
        title: "musubi",
        href: "https://github.com/Kiizon/musubi",
    },
    {
        title: "cryptoRAG",
        href: "https://github.com/Kiizon/cryptoRAG",
    },
    {
        title: "MealMate",
        href: "https://github.com/Kiizon/MealMate",
    },
    {
        title: "Moba Analytics",
        href: "https://github.com/Kiizon/Moba-Analytics-Dashboard",
    },
    {
        title: "MNIST-keras",
        href: "https://github.com/Kiizon/MNIST-keras",
    },
    {
        title: "K-means Exposure",
        href: "https://github.com/Kiizon/K-means-digital-exposure",
    },
    {
        title: "auto-note",
        href: "https://github.com/Kiizon/auto-note",
    },
    {
        title: "pomo",
        href: "https://github.com/Kiizon/pomo",
    },
    {
        title: "chrome-dino",
        href: "https://github.com/Kiizon/chrome-dino",
    },
    {
        title: "flippscrape",
        href: "https://github.com/Kiizon/flippscrape",
    },
    {
        title: "shift2notion",
        href: "https://github.com/Kiizon/shift2notion",
    },
];

export default function ProjectSection() {
    return (
        <div className="projects">
            {PROJECTS.map((project) => (
                <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project"
                >
                    {project.title}
                </a>
            ))}
        </div>
    );
}
