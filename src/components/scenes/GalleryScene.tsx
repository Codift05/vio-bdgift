"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { birthdayData } from "@/data/birthdayData";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";
import { NextButton } from "../NextButton";

export const GalleryScene = () => {
  return (
    <SceneTransition>
      <SceneLayout>
        <div className="w-full h-full flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-center py-8 md:py-0 overflow-y-auto no-scrollbar min-h-0">
          
          {/* Header Section */}
          <div className="md:col-span-4 flex flex-col justify-center text-center md:text-left z-10 px-4 md:px-8 mt-4 md:mt-0 shrink-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-4"
            >
              {birthdayData.gallery.label}
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6"
            >
              {birthdayData.gallery.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="font-sans font-light text-brand-text-secondary mb-6 md:mb-12 whitespace-pre-line"
            >
              {birthdayData.gallery.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="hidden md:block"
            >
              <NextButton>Keep Going</NextButton>
            </motion.div>
          </div>

          {/* Gallery Section */}
          <div className="md:col-span-8 w-full h-[60vh] md:h-[80vh] relative">
            {/* Desktop Asymmetrical Layout */}
            <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-4 h-full relative p-4">
              {birthdayData.gallery.images.slice(0, 5).map((image, index) => {
                // Determine layout spans for asymmetrical look
                let colSpan = "col-span-1";
                let rowSpan = "row-span-1";
                
                if (index === 0) { colSpan = "col-span-2"; rowSpan = "row-span-2"; }
                if (index === 1) { colSpan = "col-span-1"; rowSpan = "row-span-2"; }
                if (index === 2) { colSpan = "col-span-1"; rowSpan = "row-span-1"; }
                if (index === 3) { colSpan = "col-span-1"; rowSpan = "row-span-1"; }
                if (index === 4) { colSpan = "col-span-1"; rowSpan = "row-span-1"; }

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                    className={`relative overflow-hidden group rounded-sm border border-brand-border ${colSpan} ${rowSpan}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                    {/* Hover Caption */}
                    <div className="absolute inset-0 bg-brand-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <p className="font-serif italic text-brand-gold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {image.caption}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Swipe Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="md:hidden flex items-center justify-center gap-2 text-brand-gold/70 text-[10px] tracking-widest uppercase mb-4 shrink-0"
            >
              <span>Swipe for more photos</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>

            {/* Mobile Swipeable Gallery */}
            <div className="md:hidden flex overflow-x-auto no-scrollbar snap-x snap-mandatory h-[40vh] min-h-[300px] max-h-[400px] px-4 gap-4 w-full shrink-0">
              {birthdayData.gallery.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                  className="relative flex-none w-[85vw] h-full snap-center rounded-sm overflow-hidden border border-brand-border"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent p-6 pt-12">
                    <p className="font-serif italic text-brand-gold text-center text-lg shadow-sm">
                      {image.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="mt-6 mb-2 shrink-0 flex justify-center md:hidden"
            >
              <NextButton>Keep Going</NextButton>
            </motion.div>
          </div>
        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
