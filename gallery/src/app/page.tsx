"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import "./globals.css";

function HomeText() {
  return (
    <div className="flex-1 flex items-center justify-center">

      <div className="overflow-hidden h-20">
        <motion.div
          variants={{
            hidden: { opacity: 1, y: 100 },
            revealed: { opacity: 1, y: 0, transition: { duration: 0.2 } },
          }}
          initial="hidden"
          animate="revealed"
          className="relative inline-block">

          {/* White bar */}
          <motion.div
            variants={{
              onScreen: { x: 0, opacity: 1 },
              offScreen: { x: 1200, transition: { duration: 0.4, delay: 0.2 }, opacity: 1 },
            }}
            initial="onScreen"
            animate="offScreen"
            className="absolute top-1/2 left-1/2 w-300 h-20 bg-white -translate-x-1/2 -translate-y-1/2"></motion.div>

          {/* Text */}
          <span className="text-base sm:text-sm md:text-lg lg:text-4xl xl:text-7xl 2xl:text-10xl 3xl:text-13xl font-bold">
            Where Creativity Meets Vision
          </span>
        </motion.div>

      </div>
    </div>
  )
}

function ScrollForMore() {

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: number;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 50); // 50ms after scroll stops
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout); // Clear the timeout on unmount
    };
  }, [isScrolling]);

  return (
    <motion.div
      variants={{
        offScreen: { opacity: 0 },
        onScreen: { transition: { duration: 1, delay: 1.5 }, opacity: 0.3 },
      }}
      initial="offScreen"
      animate={isScrolling ? 'offScreen' : 'onScreen'}
      className="flex items-center justify-center mt-10 sticky bottom-0">Scroll for more</motion.div>
  )
}

export default function Home() {

  return (
    <div>
      {/* Initial page of what the user sees */}
      <div className="flex flex-col w-full h-[calc(100vh_-_68.4px)]">
        <HomeText />
      </div>


      <div className="h-1000">
      </div>


      <ScrollForMore />
    </div>
  )
}