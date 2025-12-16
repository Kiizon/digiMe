"use client";

import React, { useState, useRef, useEffect } from "react";

export default function OSWindow() {
    const [activeTab, setActiveTab] = useState("home");
    const [theme, setTheme] = useState<"night" | "day">("night");
    const [position, setPosition] = useState<{ top: number | string; left: number | string; transform: string }>({
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    });
    const [isDragging, setIsDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });
    const windowRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Handle Theme Change
    useEffect(() => {
        document.body.className = theme === "day" ? "day-mode" : "night-mode";
    }, [theme]);

    const toggleTheme = () => {
        playSfx();
        setTheme((prev) => (prev === "night" ? "day" : "night"));
    };

    const switchTab = (tab: string) => {
        if (activeTab === tab) return;
        playSfx();
        setActiveTab(tab);
    };

    const playSfx = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.volume = 0.2;
            audioRef.current.play().catch(() => { }); // Catch error if interaction hasn't happened yet
        }
    };

    // Dragging Logic
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!windowRef.current) return;

        // Prevent default to avoid text selection etc
        e.preventDefault();

        const rect = windowRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        dragOffset.current = { x: offsetX, y: offsetY };

        // Switch to absolute pixel positioning
        setPosition({
            top: rect.top,
            left: rect.left,
            transform: "none",
        });

        setIsDragging(true);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const newLeft = e.clientX - dragOffset.current.x;
            const newTop = e.clientY - dragOffset.current.y;
            setPosition((prev) => ({ ...prev, left: newLeft, top: newTop }));
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <>
            <audio ref={audioRef} id="nav-sfx" src="/assets/sfx/dropSfx.mp3" preload="auto"></audio>

            <div
                className={`window ${isDragging ? "dragging" : ""}`}
                ref={windowRef}
                style={{ top: position.top, left: position.left, transform: position.transform }}
            >
                <div className="title-bar" onMouseDown={handleMouseDown}>
                    <nav>
                        <div
                            className={`tab ${activeTab === "home" ? "active" : ""}`}
                            onClick={() => switchTab("home")}
                        >
                            home
                        </div>
                        <div
                            className={`tab ${activeTab === "about me" ? "active" : ""}`}
                            onClick={() => switchTab("about me")}
                        >
                            about me
                        </div>
                        <div
                            className={`tab ${activeTab === "projects" ? "active" : ""}`}
                            onClick={() => switchTab("projects")}
                        >
                            projects
                        </div>
                        <div
                            className={`tab ${activeTab === "fun" ? "active" : ""}`}
                            onClick={() => switchTab("fun")}
                        >
                            fun
                        </div>
                    </nav>
                    <div className="theme-icons" onClick={toggleTheme}>
                        {/* Logic: Night Mode = Sun Visible. Day Mode = Moon Visible. */}
                        {theme === "night" && (
                            <img src="/assets/imgs/sun.png" alt="sun" className="theme-icon sun" style={{ display: 'block' }} />
                        )}
                        {theme === "day" && (
                            <img src="/assets/imgs/moon.png" alt="moon" className="theme-icon moon" style={{ display: 'block' }} />
                        )}
                        {/* Keeping the legacy structure slightly modified for React state render */}
                    </div>
                </div>
                <div className="window-content">
                    {activeTab === "home" && (
                        <div className="content active" id="home">
                            <h1>welcome to my piece of the internet</h1>
                            <p>
                                Hi! I'm Kish, a Computer Science student. When I'm not malding at my computer, I'm
                                usually blasting music, watching anime or playing video games... or all of them at
                                once lol
                            </p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/kishdizon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://github.com/Kiizon" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="mailto:kishdizon@gmail.com">Email</a>
                            </div>
                        </div>
                    )}

                    {activeTab === "about me" && (
                        <div className="content active" id="about me">
                            <p>
                                i like to explore new ideas and often find myself being bombarded by all the cool
                                concepts i want to learn.
                            </p>
                            <p>
                                i typically a go with the flow person, but no matter what, i always give it my all.
                            </p>
                            <p>
                                i spend most of my time replicating simpler versions of things i find interesting.
                            </p>
                            <p>
                                <b>currently</b>
                            </p>
                            <p>
                                i'm a 2nd year computer science student at toronto metropolitan university. studying
                                computer science.
                            </p>
                            <p>dipping my toes into ml and ai</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/kishdizon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://github.com/Kiizon" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="mailto:kishdizon@gmail.com">Email</a>
                            </div>
                        </div>
                    )}

                    {activeTab === "projects" && (
                        <div className="content active" id="projects">
                            <h1>things i've made/ am working on</h1>
                            <ul>
                                <li>
                                    <a href="https://github.com/Kiizon/auto-note" target="_blank" rel="noopener noreferrer"><u>Auto-Note</u></a>
                                </li>
                                <p>A chrome extension extracts transcript from D2L videos and generates comprehensive notes.</p>
                                <li>
                                    <a href="https://github.com/Kiizon/pomo" target="_blank" rel="noopener noreferrer"><u>Pomo</u></a>
                                    <p> A web app that tracking pomodoro sessions with social features to connect you with other productivity warriors.  </p>
                                </li>
                                <li>
                                    <a href="https://github.com/Kiizon/chrome-dino" target="_blank" rel="noopener noreferrer"><u>chrome-dino</u></a>
                                    <p>A clone of the Chrome Dino game.</p>
                                </li>
                                <li>
                                    <a href="https://github.com/Kiizon/flippscrape" target="_blank" rel="noopener noreferrer"><u>flippscrape</u></a>
                                    <p>A web scraper for Flipp allowing users to parse weekly sale flyers from local grocery stores into a csv file.</p>
                                </li>
                                <li>
                                    <a href="https://github.com/Kiizon/shift2notion" target="_blank" rel="noopener noreferrer"><u>shift2notion</u></a>
                                    <p> Simple script that pulls work shifts from your email and creates events in Notion.</p>
                                </li>
                            </ul>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/kishdizon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://github.com/Kiizon" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="mailto:kishdizon@gmail.com">Email</a>
                            </div>
                        </div>
                    )}

                    {activeTab === "fun" && (
                        <div className="content active" id="fun">
                            <h1>wip... working on something fun!</h1>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/kishdizon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://github.com/Kiizon" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="mailto:kishdizon@gmail.com">Email</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
