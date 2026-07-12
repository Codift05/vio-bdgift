"use client";

import { motion } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";
import { NextButton } from "../NextButton";

export const InitialScene = () => {
  return (
    <SceneTransition>
      <SceneLayout>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-serif text-8xl md:text-9xl text-brand-gold font-light mb-8 relative"
          >
            {birthdayData.recipientInitial}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 blur-2xl bg-brand-gold/20 -z-10 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
            className="w-24 h-[1px] bg-brand-gold/60 mb-12 origin-center"
          />

          <div className="space-y-6 max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-xs tracking-[0.3em] uppercase text-brand-gold/80"
            >
              For someone truly unforgettable
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.5 }}
              className="font-sans font-light text-brand-text-secondary text-lg"
            >
              This little story belongs to you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
            className="mt-16"
          >
            <NextButton>Continue</NextButton>
          </motion.div>
        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
