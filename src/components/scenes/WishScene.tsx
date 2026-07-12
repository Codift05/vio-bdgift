"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";
import { NextButton } from "../NextButton";
import { useBirthday } from "@/context/BirthdayContext";

export const WishScene = () => {
  const [wished, setWished] = useState(false);
  const { nextScene } = useBirthday();

  const handleWish = () => {
    setWished(true);
    // Automatically transition after smoke effect
    setTimeout(() => {
      nextScene();
    }, 4000);
  };

  return (
    <SceneTransition>
      <SceneLayout>
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto w-full h-full overflow-y-auto no-scrollbar py-8">
          
          <AnimatePresence mode="wait">
            {!wished && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="mb-16"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-6"
                >
                  {birthdayData.wish.label}
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="font-serif text-5xl md:text-7xl font-light text-brand-text mb-8"
                >
                  {birthdayData.wish.title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  className="font-sans font-light text-brand-text-secondary leading-relaxed space-y-2"
                >
                  {birthdayData.wish.message.split(". ").map((sentence, i) => (
                    <p key={i}>{sentence}{i !== birthdayData.wish.message.split(". ").length - 1 ? "." : ""}</p>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Candle Visualization */}
          <div className="relative h-64 w-32 flex flex-col items-center justify-end mb-16">
            
            {/* Candle Body */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "8rem" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-10 bg-gradient-to-r from-brand-bg-secondary via-brand-border to-brand-bg-secondary rounded-sm relative flex flex-col items-center"
            >
              <div className="absolute top-0 w-full h-1 bg-brand-gold/30 rounded-full" />
              {/* Wick */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-brand-text-secondary" />

              <AnimatePresence>
                {!wished ? (
                  // Flame
                  <motion.div
                    key="flame"
                    exit={{ opacity: 0, scale: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-full mb-1 flex flex-col items-center"
                  >
                    {/* Glow */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-0 translate-y-1/2 w-32 h-32 bg-brand-gold blur-2xl rounded-full"
                    />
                    {/* Outer Flame */}
                    <motion.div
                      animate={{ 
                        scaleY: [1, 1.1, 1],
                        rotate: [0, -2, 2, 0],
                        borderRadius: ["50% 50% 20% 20%", "50% 50% 30% 30%", "50% 50% 20% 20%"]
                      }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-8 h-16 bg-gradient-to-t from-orange-400 via-brand-gold to-white blur-[2px] opacity-80 origin-bottom"
                      style={{ borderRadius: "50% 50% 20% 20%" }}
                    >
                      {/* Inner Flame */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-6 bg-white blur-[1px] rounded-full" />
                    </motion.div>
                  </motion.div>
                ) : (
                  // Smoke Effect
                  <motion.div
                    key="smoke"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.8, 0], y: -80, scale: 2 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="absolute bottom-full mb-2 w-4 h-16 bg-white/20 blur-md rounded-full origin-bottom"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <AnimatePresence>
            {!wished && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <NextButton onClick={handleWish}>{birthdayData.wish.buttonText}</NextButton>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Flash Effect on Wish */}
          <AnimatePresence>
            {wished && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [1, 2, 4] }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-50 bg-brand-gold pointer-events-none mix-blend-overlay"
              />
            )}
          </AnimatePresence>

        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
