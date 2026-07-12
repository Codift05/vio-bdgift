"use client";

import { AnimatePresence } from "framer-motion";
import { useBirthday } from "@/context/BirthdayContext";
import { FilmGrainOverlay, ParticleBackground } from "./Effects";
import { ProgressIndicator } from "./ProgressIndicator";
import { MusicController } from "./MusicController";

// Import all scenes
import { WelcomeScene } from "./scenes/WelcomeScene";
import { InitialScene } from "./scenes/InitialScene";
import { CountdownScene } from "./scenes/CountdownScene";
import { CelebrationScene } from "./scenes/CelebrationScene";
import { GalleryScene } from "./scenes/GalleryScene";
import { FirstMessageScene } from "./scenes/FirstMessageScene";
import { MemoryTimelineScene } from "./scenes/MemoryTimelineScene";
import { ReasonsScene } from "./scenes/ReasonsScene";
import { LetterScene } from "./scenes/LetterScene";
import { WishScene } from "./scenes/WishScene";
import { FinalScene } from "./scenes/FinalScene";

const scenes = [
  WelcomeScene,
  InitialScene,
  CountdownScene,
  CelebrationScene,
  GalleryScene,
  FirstMessageScene,
  MemoryTimelineScene,
  ReasonsScene,
  LetterScene,
  WishScene,
  FinalScene,
];

export const BirthdayExperience = () => {
  const { currentScene } = useBirthday();

  const CurrentSceneComponent = scenes[currentScene];

  return (
    <>
      <FilmGrainOverlay />
      <ParticleBackground />
      <MusicController />
      <ProgressIndicator />
      
      <AnimatePresence mode="wait">
        <CurrentSceneComponent key={currentScene} />
      </AnimatePresence>
    </>
  );
};
