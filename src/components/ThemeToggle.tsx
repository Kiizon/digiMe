"use client";

import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/sfx/dropSFX.mp3");
    audioRef.current.load();
  }, []);

  const toggleTheme = () => {
    if (audioRef.current) {
      const sound = audioRef.current.cloneNode(true) as HTMLAudioElement;
      sound.play().catch((e) => console.error("Audio play failed", e));
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
