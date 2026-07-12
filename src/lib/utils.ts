import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Easing for cinematic animations
export const cinematicEasing = [0.22, 1, 0.36, 1] as const;
