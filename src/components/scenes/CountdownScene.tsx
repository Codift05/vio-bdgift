"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useBirthday } from "@/context/BirthdayContext";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";

export const CountdownScene = () => {
  const [count, setCount] = useState(3);
  const { nextScene } = useBirthday();

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => nextScene(), 800);
      return () => clearTimeout(timer);
    }
  }, [count, nextScene]);

  return (
    <SceneTransition>
      <SceneLayout>
        {/* Blurred Collage Background */}
        <div className="absolute inset-0 z-0 flex flex-wrap opacity-10 blur-xl mix-blend-screen overflow-hidden">
          {/* We reuse photos for the background effect */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="relative w-1/2 h-1/2">
              <Image src={`/images/photo-0${(i % 6) + 1}.jpg`} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="relative w-32 h-32 flex items-center justify-center mb-12">
            {/* Pulsing rings */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-brand-gold/30"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-2 rounded-full border border-brand-gold/60"
            />

            <AnimatePresence mode="wait">
              {count > 0 && (
                <motion.div
                  key={count}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="font-serif text-6xl text-brand-gold font-light"
                >
                  {count}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans text-brand-text-secondary tracking-[0.15em] text-sm font-light text-center"
          >
            Preparing something special for you...
          </motion.p>
        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
