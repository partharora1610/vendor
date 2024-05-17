"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/shared/HeroHighlight";

const HeroTitle = () => {
  return (
    <div className="mb-2 mt-6">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Find Every Vendor for Your
          <Highlight className="text-black dark:text-white ml-4">
            Perfect Event
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
};

export default HeroTitle;
