"use client";

import { useBirthday } from "@/context/BirthdayContext";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { HTMLMotionProps, motion } from "framer-motion";

interface NextButtonProps extends HTMLMotionProps<"button"> {
  onClick?: () => void;
  children: React.ReactNode;
}

export const NextButton = ({ onClick, children, className, ...props }: NextButtonProps) => {
  const { nextScene } = useBirthday();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick();
    else nextScene();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={cn(
        "group relative overflow-hidden rounded-[2px] border border-brand-gold/50 bg-brand-bg/30 px-8 py-3 backdrop-blur-sm transition-colors hover:border-brand-gold touch-manipulation",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full bg-brand-gold transition-transform duration-500 ease-out group-hover:translate-x-0" />
      
      <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-[0.2em] uppercase text-brand-gold group-hover:text-brand-bg transition-colors duration-300">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </motion.button>
  );
};
