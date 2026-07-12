"use client";

import { motion } from "framer-motion";
import { cinematicEasing } from "@/lib/utils";

interface SceneTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const SceneTransition = ({ children, className }: SceneTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      transition={{
        duration: 1.1,
        ease: cinematicEasing,
      }}
      className={`absolute inset-0 w-full h-full flex items-center justify-center ${className || ""}`}
    >
      {children}
    </motion.div>
  );
};
