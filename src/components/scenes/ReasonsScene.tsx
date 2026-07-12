"use client";

import { motion } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";
import { NextButton } from "../NextButton";

export const ReasonsScene = () => {
  return (
    <SceneTransition>
      <SceneLayout>
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center pt-12 pb-8 h-full min-h-0">
          
          <div className="text-center mb-8 md:mb-12 shrink-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-4 mt-8 md:mt-0"
            >
              Things That Make You Special
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-text"
            >
              A Few Reasons You Are Loved
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full px-4 overflow-y-auto no-scrollbar pb-8 relative z-10 flex-1 min-h-0 content-start">
            {birthdayData.reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                className="group relative p-8 glass-panel rounded-sm flex flex-col items-center text-center overflow-hidden h-fit"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-8 h-px bg-brand-gold/40 mb-6 group-hover:w-16 transition-all duration-500" />
                
                <h3 className="font-serif text-2xl text-brand-gold mb-4 relative z-10">
                  {reason.title}
                </h3>
                
                <p className="font-sans font-light text-brand-text-secondary text-sm leading-relaxed relative z-10">
                  {reason.description}
                </p>
                
                <div className="w-8 h-px bg-brand-gold/40 mt-6 group-hover:w-16 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-6 mb-4 shrink-0"
          >
            <NextButton>Read My Letter</NextButton>
          </motion.div>

        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
