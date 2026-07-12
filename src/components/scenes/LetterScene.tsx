"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";
import { NextButton } from "../NextButton";
import { useBirthday } from "@/context/BirthdayContext";

export const LetterScene = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setVolume, nextScene } = useBirthday();

  const handleOpen = () => {
    setIsOpen(true);
    setVolume(birthdayData.music.defaultVolume * 0.4); // Lower volume when reading
  };

  const handleNext = () => {
    setVolume(birthdayData.music.defaultVolume); // Restore volume
    nextScene();
  };

  return (
    <SceneTransition>
      <SceneLayout>
        {/* Darkened background when letter is open */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm z-0"
            />
          )}
        </AnimatePresence>

        <div className="relative z-10 w-full max-w-2xl mx-auto h-full flex flex-col items-center justify-center">
          
          <AnimatePresence mode="wait">
            {!isOpen ? (
              // Closed Envelope State
              <motion.div
                key="envelope"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, y: -50 }}
                transition={{ duration: 1 }}
                onClick={handleOpen}
                className="cursor-pointer group flex flex-col items-center"
              >
                <div className="relative w-64 md:w-80 h-40 md:h-48 border border-brand-gold/40 bg-brand-bg/60 backdrop-blur-md rounded-sm flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-colors duration-500" />
                  
                  {/* Decorative envelope flaps */}
                  <div className="absolute top-0 w-full h-1/2 border-b border-brand-gold/20" />
                  <div className="absolute left-0 w-1/2 h-full border-r border-brand-gold/20 origin-bottom transform -skew-x-12" />
                  <div className="absolute right-0 w-1/2 h-full border-l border-brand-gold/20 origin-bottom transform skew-x-12" />
                  
                  <span className="font-serif italic text-2xl text-brand-gold relative z-10 px-8 py-2 bg-brand-bg/80 rounded-sm">
                    For You
                  </span>
                </div>
                
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-8 text-xs uppercase tracking-widest text-brand-text-secondary"
                >
                  Tap to open
                </motion.p>
              </motion.div>
            ) : (
              // Open Letter State
              <motion.div
                key="letter"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full flex flex-col items-center h-full max-h-[85svh]"
              >
                <div className="bg-brand-bg/90 border border-brand-border p-6 md:p-12 w-full shadow-2xl rounded-sm overflow-y-auto no-scrollbar flex-1 min-h-0 mask-image-gradient">
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <p className="font-serif italic text-2xl text-brand-gold mb-8">
                      {birthdayData.letter.greeting}
                    </p>

                    <div className="space-y-6">
                      {birthdayData.letter.paragraphs.map((paragraph, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                          className="font-sans font-light text-brand-text-secondary leading-loose"
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 2.5 }}
                      className="mt-12"
                    >
                      <p className="font-sans font-light text-brand-text-secondary">{birthdayData.letter.closing}</p>
                      <p className="font-serif text-xl text-brand-gold mt-2">{birthdayData.senderName}</p>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                  className="mt-8 shrink-0"
                >
                  <NextButton onClick={handleNext}>Make a Wish</NextButton>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </SceneLayout>
      <style jsx global>{`
        .mask-image-gradient {
          mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
        }
      `}</style>
    </SceneTransition>
  );
};
