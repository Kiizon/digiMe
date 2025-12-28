"use client";

import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/assets/sfx/dropSFX.mp3");
    audio.crossOrigin = "anonymous";
    audio.load();
    audioRef.current = audio;
  }, []);

  const toggleTheme = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => console.error("Audio play failed", e));
    }
    setIsLight((prev) => !prev);
    document.documentElement.classList.toggle("light");
  };

  return (
    <img
      src="/me-logo.png"
      alt="Kish Dizon - Click to toggle theme"
      className="profile-pic"
      onClick={toggleTheme}
    />
  );
}
