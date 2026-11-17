"use client";

import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/assets/sfx/dropSfx.mp3");
    audio.crossOrigin = "anonymous";
    audio.load();
    audioRef.current = audio;
  }, []);

  const toggleTheme = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => console.error("Audio play failed", e));
    }
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      type="button"
      className="avatar"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title="toggle theme"
    >
      <img src="/me-logo.png" alt="Kish Dizon" />
    </button>
  );
}
