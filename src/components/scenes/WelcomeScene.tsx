"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { birthdayData } from "@/data/birthdayData";
import { useBirthday } from "@/context/BirthdayContext";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";

export const WelcomeScene = () => {
  const { playMusic, nextScene } = useBirthday();

  const handleOpen = () => {
    playMusic();
    nextScene();
  };

  return (
    <SceneTransition>
      <SceneLayout>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/opening.jpg"
            alt="Opening background"
            fill
            className="object-cover opacity-30 blur-sm scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/60 to-brand-bg/90" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto w-full h-full overflow-y-auto no-scrollbar py-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] tracking-[0.3em] uppercase text-brand-gold/80 mb-6"
          >
            {birthdayData.opening.eyebrow}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mb-8"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wide mb-2">
              {birthdayData.opening.title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 + i * 0.2 }}
                  className="inline-block mr-3 md:mr-4 last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2.5 }}
              className="font-serif italic text-2xl md:text-3xl text-brand-gold"
            >
              {birthdayData.opening.highlightedTitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="w-16 h-[1px] bg-brand-gold/40 mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-brand-text-secondary font-sans font-light leading-relaxed mb-16 max-w-md"
          >
            {birthdayData.opening.description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
            onClick={handleOpen}
            className="group relative px-8 py-3 overflow-hidden rounded-sm border border-brand-gold/40 text-brand-gold hover:border-brand-gold transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-brand-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-xs tracking-[0.2em] uppercase">
              {birthdayData.opening.buttonText}
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 5 }}
            className="mt-8 text-[10px] tracking-widest uppercase text-brand-text-secondary"
          >
            Turn your sound on for the full experience.
          </motion.p>
        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
