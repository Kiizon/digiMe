"use client";

import React from "react";

type Project = {
    title: string;
    href: string;
};

const PROJECTS: Project[] = [
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
        <div className="flex flex-wrap gap-x-4 gap-y-2">
            {PROJECTS.map((project, index) => (
                <a
                    key={index}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
                >
                    {project.title}
                </a>
            ))}
        </div>
    );
}

