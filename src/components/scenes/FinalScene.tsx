"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { birthdayData } from "@/data/birthdayData";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";

export const FinalScene = () => {
  useEffect(() => {
    // Fire confetti on mount
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#D6B36A', '#E8D39B', '#ffffff'] // Gold, light gold, white
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#D6B36A', '#E8D39B', '#ffffff']
      }));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <SceneTransition>
      <SceneLayout>
        {/* Soft Gold Glow Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="w-[80vw] h-[80vw] rounded-full bg-brand-gold blur-[120px]"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full h-full overflow-y-auto no-scrollbar px-4 py-12">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-12"
          >
            {birthdayData.finale.label}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-brand-text mb-12"
          >
            <span className="block mb-2 text-brand-text-secondary text-3xl md:text-5xl">{birthdayData.finale.titlePrefix}</span>
            <span className="text-brand-gold">{birthdayData.recipientName}</span>
          </motion.h1>

          <div className="space-y-6 max-w-2xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 3 }}
              className="font-serif italic text-2xl md:text-3xl text-brand-text"
            >
              {birthdayData.finale.message}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 4 }}
              className="font-sans font-light text-brand-text-secondary leading-relaxed text-lg"
            >
              {birthdayData.finale.secondaryMessage}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 5.5 }}
            className="max-w-xl mx-auto mb-20"
          >
            <div className="w-12 h-px bg-brand-gold/40 mx-auto mb-8" />
            <p className="font-serif text-xl text-brand-gold italic mb-8">
              "{birthdayData.finale.quote}"
            </p>
            <p className="text-[10px] tracking-widest uppercase text-brand-text-secondary">
              {birthdayData.finale.closing}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 7 }}
            className="flex flex-col sm:flex-row gap-6 mt-auto shrink-0 mb-8"
          >
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 rounded-sm border border-brand-gold/20 text-brand-gold hover:border-brand-gold transition-colors text-xs tracking-widest uppercase bg-brand-bg/50 backdrop-blur-sm"
            >
              Replay Our Story
            </button>
            {/* The "View Our Memories" could go back to the gallery/timeline. For simplicity, we just reload or go to index */}
          </motion.div>
        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
