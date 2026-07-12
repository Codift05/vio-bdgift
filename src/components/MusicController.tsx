"use client";

import { useBirthday } from "@/context/BirthdayContext";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MusicController = () => {
  const { isMusicPlaying, toggleMusic, currentScene } = useBirthday();

  // Hide the controller on the first scene before the user has clicked "Open Your Surprise"
  if (currentScene === 0) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-brand-bg/40 backdrop-blur-md border border-brand-border text-brand-gold hover:bg-brand-bg/60 transition-colors group"
        aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}
      >
        {isMusicPlaying ? (
          <Volume2 className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
        ) : (
          <VolumeX className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
        )}
      </motion.button>
    </AnimatePresence>
  );
};
