"use client";

import { motion } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";
import { NextButton } from "../NextButton";

export const FirstMessageScene = () => {
  const quoteLines = birthdayData.mainQuote.quote.split(", ");
  
  return (
    <SceneTransition>
      <SceneLayout>
        {/* Soft Gold Glow Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-brand-gold blur-[100px]"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 w-full h-full overflow-y-auto no-scrollbar py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-12"
          >
            {birthdayData.mainQuote.label}
          </motion.div>

          <div className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-brand-text mb-12 space-y-4 md:space-y-6">
            {quoteLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1 + index * 1.5 }}
                className={index === quoteLines.length - 1 ? "text-brand-gold italic" : ""}
              >
                {line}{index < quoteLines.length - 1 ? "," : "."}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 + quoteLines.length * 1.5 + 0.5 }}
            className="font-sans font-light text-brand-text-secondary leading-relaxed max-w-xl mx-auto mb-16"
          >
            {birthdayData.mainQuote.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 + quoteLines.length * 1.5 + 2 }}
          >
            <NextButton>Next Chapter</NextButton>
          </motion.div>
        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
