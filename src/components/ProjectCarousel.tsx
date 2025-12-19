"use client";

import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type Project = {
    title: string;
    href: string;
    picture: string;
    description: string;
};

const PROJECTS: Project[] = [
    {
        title: "musubi",
        href: "https://github.com/Kiizon/musubi",
        picture: "/assets/projects/Musubi-icon.png",
        description: "A macOS native tool for managing your tasks."
    },
    {
        title: "cryptoRAG",
        href: "https://github.com/Kiizon/cryptoRAG",
        picture: "/assets/projects/cryptoRAG.png",
        description: "RAG system for cryptography basics."
    },
    {
        title: "MealMate",
        href: "https://github.com/Kiizon/MealMate",
        picture: "/assets/projects/MealMate.png",
        description: "Meal planning assistant for healthier and frugal eating habits."
    },
    {
        title: "Moba Analytics",
        href: "https://github.com/Kiizon/Moba-Analytics-Dashboard",
        picture: "/assets/projects/MobaAnalyticsDashboard.png",
        description: "DBMS for MOBA game data."
    },
    {
        title: "MNIST-keras",
        href: "https://github.com/Kiizon/MNIST-keras",
        picture: "/assets/projects/mnist-3.0.1.png",
        description: "Classic handwritten digit recognition implementation using Keras."
    },
    {
        title: "K-means Exposure",
        href: "https://github.com/Kiizon/K-means-digital-exposure",
        picture: "/assets/projects/Kmeans-digital-exposure.png",
        description: "Digital exposure analysis utilizing K-means clustering algorithms."
    },
    {
        title: "auto-note",
        href: "https://github.com/Kiizon/auto-note",
        picture: "/assets/projects/auto-note.png",
        description: "Automated lecture summarizer for on the fly priming."
    },
    {
        title: "pomo",
        href: "https://github.com/Kiizon/pomo",
        picture: "/assets/projects/pomo.png",
        description: "Minimalist Pomodoro timer with social features."
    },
    {
        title: "chrome-dino",
        href: "https://github.com/Kiizon/chrome-dino",
        picture: "",
        description: "A faithful recreation of the classic Chrome Dino game."
    },
    {
        title: "flippscrape",
        href: "https://github.com/Kiizon/flippscrape",
        picture: "/assets/projects/flippscrape.png",
        description: "Efficient scraping tool for extracting data from Flipp."
    },
    {
        title: "shift2notion",
        href: "https://github.com/Kiizon/shift2notion",
        picture: "/assets/projects/shift2notion.png",
        description: "Automating work schedule from gmail attachments to google calendar to notion"
    },
];

export default function ProjectCarousel() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio("/assets/sfx/dropSfx.mp3");
    }, []);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((e) => console.error("Audio play failed", e));
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-10">
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {PROJECTS.map((project, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                                <Card className="h-[320px] border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:bg-card/80 transition-colors duration-300">
                                    <CardContent className="p-0 flex flex-col md:flex-row h-full">
                                        {/* Image Section */}
                                        <div className="w-full h-1/2 md:w-2/3 md:h-full overflow-hidden bg-muted/20 relative group">
                                            {project.picture ? (
                                                <img
                                                    src={project.picture}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center min-h-[140px] md:min-h-[250px]">
                                                    <span className="text-6xl">👾</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Text Section */}
                                        <div className="w-full h-1/2 md:w-1/3 md:h-full p-4 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2 text-foreground">
                                                    {project.title}
                                                </h3>
                                                <p className="text-xs md:text-sm leading-relaxed line-clamp-[7]">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div className="pt-2 flex items-center text-xs font-medium text-primary">
                                                View Project <span className="ml-2">→</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious onClickCapture={playSound} className="-left-12 h-12 w-12 border-muted-foreground/20 hover:border-foreground/50 hover:bg-transparent text-muted-foreground transition-all">
                    <span className="text-xl">&lt;</span>
                </CarouselPrevious>
                <CarouselNext onClickCapture={playSound} className="-right-12 h-12 w-12 border-muted-foreground/20 hover:border-foreground/50 hover:bg-transparent text-muted-foreground transition-all">
                    <span className="text-xl">&gt;</span>
                </CarouselNext>
            </Carousel>
        </div>
    );
}
