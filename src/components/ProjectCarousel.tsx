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
};

const PROJECTS: Project[] = [
    { title: "musubi", href: "https://github.com/Kiizon/musubi", picture: "/assets/projects/Musubi-icon.png" },
    { title: "cryptoRAG", href: "https://github.com/Kiizon/cryptoRAG", picture: "/assets/projects/cryptoRAG.png" },
    { title: "MealMate", href: "https://github.com/Kiizon/MealMate", picture: "/assets/projects/MealMate.png" },
    { title: "Moba Analytics", href: "https://github.com/Kiizon/Moba-Analytics-Dashboard", picture: "/assets/projects/MobaAnalyticsDashboard.png" },
    { title: "MNIST-keras", href: "https://github.com/Kiizon/MNIST-keras", picture: "/assets/projects/mnist-3.0.1.png" },
    { title: "K-means Exposure", href: "https://github.com/Kiizon/K-means-digital-exposure", picture: "/assets/projects/Kmeans-digital-exposure.png" },
    { title: "auto-note", href: "https://github.com/Kiizon/auto-note", picture: "/assets/projects/auto-note.png" },
    { title: "pomo", href: "https://github.com/Kiizon/pomo", picture: "/assets/projects/pomo.png" },
    { title: "chrome-dino", href: "https://github.com/Kiizon/chrome-dino", picture: "" },
    { title: "flippscrape", href: "https://github.com/Kiizon/flippscrape", picture: "/assets/projects/flippscrape.png" },
    { title: "shift2notion", href: "https://github.com/Kiizon/shift2notion", picture: "/assets/projects/shift2notion.png" },
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
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {PROJECTS.map((project, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                                <div className="group flex flex-col gap-3">
                                    <Card className="aspect-square hover:opacity-80 transition-opacity cursor-pointer border-border bg-card/50 backdrop-blur-sm overflow-hidden relative">
                                        <CardContent className="p-0 h-full w-full">
                                            {project.picture ? (
                                                <img
                                                    src={project.picture}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                                                    <span className="text-4xl">👾</span>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                    <span className="text-sm font-medium text-muted-foreground text-center line-clamp-2 group-hover:text-foreground transition-colors">
                                        {project.title}
                                    </span>
                                </div>
                            </a>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious onClickCapture={playSound} className="-left-12 top-[calc(50%-1rem)] h-8 w-8 border-muted-foreground/20 hover:border-foreground/50 hover:bg-transparent text-muted-foreground transition-all">
                    <span className="text-xl">&lt;</span>
                </CarouselPrevious>
                <CarouselNext onClickCapture={playSound} className="-right-12 top-[calc(50%-1rem)] h-8 w-8 border-muted-foreground/20 hover:border-foreground/50 hover:bg-transparent text-muted-foreground transition-all">
                    <span className="text-xl">&gt;</span>
                </CarouselNext>
            </Carousel>
        </div>
    );
}
