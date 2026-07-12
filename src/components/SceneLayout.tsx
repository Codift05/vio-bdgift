"use client";

import React from "react";

export const SceneLayout = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative w-full h-[100svh] overflow-hidden flex flex-col items-center justify-center p-6 sm:p-12 ${className || ""}`}>
      {children}
    </div>
  );
};
