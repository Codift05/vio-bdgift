"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { birthdayData } from "@/data/birthdayData";
import { SceneLayout } from "../SceneLayout";
import { SceneTransition } from "../SceneTransition";
import { NextButton } from "../NextButton";

export const MemoryTimelineScene = () => {
  return (
    <SceneTransition>
      <SceneLayout>
        <div className="w-full max-w-5xl mx-auto h-full flex flex-col pt-12 pb-24 md:py-16 overflow-y-auto no-scrollbar relative z-10">
          
          <div className="text-center mb-16 shrink-0 mt-8 md:mt-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-[10px] tracking-[0.3em] uppercase text-brand-gold mb-4"
            >
              Our Little Timeline
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-brand-text"
            >
              Some Moments Stay Forever
            </motion.h2>
          </div>

          <div className="relative flex-1">
            {/* Center Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-brand-gold/0 via-brand-gold/40 to-brand-gold/0 -translate-x-1/2"
            />

            <div className="space-y-24 md:space-y-32">
              {birthdayData.timeline.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className="relative flex items-center md:justify-between w-full">
                    {/* Node */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="absolute left-6 md:left-1/2 w-3 h-3 bg-brand-gold rounded-full -translate-x-1/2 z-10"
                    >
                      <div className="absolute inset-0 rounded-full bg-brand-gold animate-ping opacity-20" />
                    </motion.div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex w-full justify-between items-center">
                      {isEven ? (
                        <>
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-5/12 text-right pr-12"
                          >
                            <p className="font-serif italic text-brand-gold mb-2">{item.date}</p>
                            <h3 className="font-serif text-2xl mb-4 text-brand-text">{item.title}</h3>
                            <p className="font-sans font-light text-brand-text-secondary text-sm leading-relaxed">{item.description}</p>
                          </motion.div>
                          <div className="w-5/12 pl-12 flex justify-start">
                            {item.image && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="relative w-64 h-48 rounded-sm overflow-hidden border border-brand-border"
                              >
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                              </motion.div>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-5/12 pr-12 flex justify-end">
                            {item.image && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="relative w-64 h-48 rounded-sm overflow-hidden border border-brand-border"
                              >
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                              </motion.div>
                            )}
                          </div>
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-5/12 text-left pl-12"
                          >
                            <p className="font-serif italic text-brand-gold mb-2">{item.date}</p>
                            <h3 className="font-serif text-2xl mb-4 text-brand-text">{item.title}</h3>
                            <p className="font-sans font-light text-brand-text-secondary text-sm leading-relaxed">{item.description}</p>
                          </motion.div>
                        </>
                      )}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden w-full pl-16 pr-4">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                      >
                        <p className="font-serif italic text-brand-gold mb-1 text-sm">{item.date}</p>
                        <h3 className="font-serif text-xl mb-3 text-brand-text">{item.title}</h3>
                        
                        {item.image && (
                          <div className="relative w-full aspect-video mb-4 rounded-sm overflow-hidden border border-brand-border">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                          </div>
                        )}
                        
                        <p className="font-sans font-light text-brand-text-secondary text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-24 mb-8 flex justify-center"
            >
              <NextButton>There Is More</NextButton>
            </motion.div>
          </div>
        </div>
      </SceneLayout>
    </SceneTransition>
  );
};
