"use client";

import { useBirthday } from "@/context/BirthdayContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const ProgressIndicator = () => {
  const { currentScene, totalScenes, goToScene } = useBirthday();

  if (currentScene === 0) return null;

  return (
    <>
      {/* Desktop Vertical Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4">
        {Array.from({ length: totalScenes - 1 }).map((_, i) => {
          const sceneIndex = i + 1; // Scene 0 is welcome, we skip it
          const isActive = currentScene === sceneIndex;
          const isPast = currentScene > sceneIndex;

          return (
            <div key={sceneIndex} className="relative flex flex-col items-center group cursor-pointer" onClick={() => goToScene(sceneIndex)}>
              {/* Connector line */}
              {sceneIndex > 1 && (
                <div 
                  className={cn(
                    "absolute bottom-full h-4 w-px -translate-y-1/2 transition-colors duration-500",
                    isPast ? "bg-brand-gold/40" : "bg-white/10"
                  )} 
                />
              )}
              
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.5 : 1,
                  backgroundColor: isActive ? "#D6B36A" : isPast ? "rgba(214, 179, 106, 0.4)" : "rgba(255, 255, 255, 0.1)",
                }}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150"
              />
            </div>
          );
        })}
      </div>

      {/* Mobile Horizontal Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 z-40 md:hidden bg-brand-bg/50">
        <motion.div
          className="h-full bg-brand-gold/60"
          initial={{ width: 0 }}
          animate={{ width: `${((currentScene) / (totalScenes - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </>
  );
};
