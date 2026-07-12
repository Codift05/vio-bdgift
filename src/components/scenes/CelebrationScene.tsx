"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { birthdayData } from "@/data/birthdayData";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";
import { NextButton } from "../NextButton";

export const CelebrationScene = () => {
  return (
    <SceneTransition>
      <SceneLayout>
        {/* Full-screen Background with Slow Zoom */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0 z-0 origin-center"
        >
          <Image
            src="/images/celebration.jpg"
            alt="Celebration background"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </motion.div>
        
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-brand-bg/40" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto mt-12 w-full h-full overflow-y-auto no-scrollbar py-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] tracking-[0.4em] uppercase text-brand-gold/90 mb-4"
          >
            {birthdayData.introduction.label}
          </motion.div>

          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-brand-text mb-8 relative">
            {/* Glowing effect behind text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute inset-0 bg-brand-gold/20 blur-[60px] -z-10 rounded-full"
            />
            
            {/* Staggered letter animation */}
            {birthdayData.recipientName.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1, ease: "easeOut" }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.5 }}
            className="font-serif italic text-2xl md:text-3xl text-brand-gold mb-8 px-4"
          >
            {birthdayData.introduction.message}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 3.5 }}
            className="font-sans font-light text-brand-text-secondary leading-relaxed max-w-xl mx-auto mb-16 px-6"
          >
            {birthdayData.introduction.supportingMessage}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
          >
            <NextButton>Let It Begin</NextButton>
          </motion.div>
        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
