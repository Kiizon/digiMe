"use client";

import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/sfx/dropSfx.mp3");
  }, []);

  const toggleTheme = () => {
    audioRef.current?.play();
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
