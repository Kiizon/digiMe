"use client";

import React, { useState, useEffect } from "react";
import Snowfall from "react-snowfall";

export default function SnowfallWrapper() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        // Check initial theme
        setIsLight(document.documentElement.classList.contains("light"));

        // Watch for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsLight(document.documentElement.classList.contains("light"));
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    // Grey snow for light theme, white snow for dark theme
    const snowColor = isLight ? "#888888" : "#ffffff";

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 50, pointerEvents: 'none' }}>
            <Snowfall
                snowflakeCount={100}
                radius={[0.5, 3.0]}
                speed={[0.5, 3.0]}
                wind={[-0.5, 2.0]}
                color={snowColor}
            />
        </div>
    );
}
