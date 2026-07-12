"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { birthdayData } from "@/data/birthdayData";

interface BirthdayContextType {
  currentScene: number;
  totalScenes: number;
  nextScene: () => void;
  prevScene: () => void;
  goToScene: (index: number) => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
  playMusic: () => void;
  setVolume: (volume: number) => void;
}

const BirthdayContext = createContext<BirthdayContextType | undefined>(undefined);

export const TOTAL_SCENES = 11;

export const BirthdayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new Audio(birthdayData.music.src);
      audioRef.current.loop = true;
      audioRef.current.volume = birthdayData.music.defaultVolume;
    }
  }, []);

  const playMusic = useCallback(() => {
    if (audioRef.current && !isMusicPlaying) {
      audioRef.current.play().catch(console.error);
      setIsMusicPlaying(true);
    }
  }, [isMusicPlaying]);

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  }, [isMusicPlaying]);

  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      // smooth volume transition can be added here if needed, but direct assignment is fine for now
      audioRef.current.volume = volume;
    }
  }, []);

  const nextScene = useCallback(() => {
    setCurrentScene((prev) => (prev < TOTAL_SCENES - 1 ? prev + 1 : prev));
  }, []);

  const prevScene = useCallback(() => {
    setCurrentScene((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToScene = useCallback((index: number) => {
    if (index >= 0 && index < TOTAL_SCENES) {
      setCurrentScene(index);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate if user is focusing an input or textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "ArrowRight" || e.key === "Enter") {
        nextScene();
      } else if (e.key === "ArrowLeft") {
        prevScene();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextScene, prevScene]);

  return (
    <BirthdayContext.Provider
      value={{
        currentScene,
        totalScenes: TOTAL_SCENES,
        nextScene,
        prevScene,
        goToScene,
        isMusicPlaying,
        toggleMusic,
        playMusic,
        setVolume,
      }}
    >
      {children}
    </BirthdayContext.Provider>
  );
};

export const useBirthday = () => {
  const context = useContext(BirthdayContext);
  if (context === undefined) {
    throw new Error("useBirthday must be used within a BirthdayProvider");
  }
  return context;
};
