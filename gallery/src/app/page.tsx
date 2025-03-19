"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from 'next/image'
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
      className="flex items-center justify-center fixed bottom-0 left-0 right-0">Scroll for more</motion.div>
  )
}


function Pictures() {

  const scrollThreshold = 2000; // Distance this follows the user

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [topOfSite, setTopOfSite] = useState(true);
  const { scrollY } = useScroll()

  // Update window size on resize
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize); // Listen to resize event
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, []);


  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    if (latest === 0) {
      setTopOfSite(true); // Reset when at the top
    } else {
      setTopOfSite(false); // Do not reset while scrolling down
    }
  })

  const yRange = useTransform(scrollY, [scrollThreshold, scrollThreshold + screenHeight], [0, -screenHeight]);


  return (
    <motion.div
      key={screenWidth}
      className="h-screen overflow-hidden sticky top-0 bg-amber-700"
      style={{
        y: yRange,
      }}
    >
      <div className="bg-amber-50 h-full pt-[100vh]" key={topOfSite ? "reset" : "no-reset"}>
        <motion.div
          variants={{
            outFrame: { opacity: 0.5, x: -400, rotate: 0 },
            inFrame: { opacity: 1, x: 700, y: -screenHeight * 0.4, rotate: 30 },
          }}
          whileInView={"inFrame"}
          viewport={{ once: true }}
          className="h-full bg-amber-500"
        >
          <Image src={'/pic3.jpg'} alt="My img" width={300} height={200} className="w-auto" />
        </motion.div>
        <motion.div
          variants={{
            outFrame: { opacity: 0.5, x: -400, rotate: 0 },
            inFrame: { opacity: 1, x: 500, y: -screenHeight * 0.5, rotate: 20 },
          }}
          whileInView={"inFrame"}
          viewport={{ once: true }}
          className="h-full bg-amber-500"
        >
          <Image src={'/pic1.jpg'} alt="My img" width={300} height={200} className="w-auto" />
        </motion.div>
        <motion.div
          variants={{
            outFrame: { opacity: 0.5, x: -400, rotate: 0 },
            inFrame: { opacity: 1, x: 300, rotate: 10, y: -screenHeight * 0.5 },
          }}
          whileInView={"inFrame"}
          viewport={{ once: true }}
          className="h-full bg-amber-500"
        >
          <Image src={'/pic2.jpg'} alt="My img" width={300} height={200} className="w-auto" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Home() {


  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     window.scrollTo(0, 0);
  //   }
  // })

  return (
    <div>
      {/* Initial page of what the user sees */}
      <div className="flex flex-col w-full h-[calc(100vh_-_68.4px)]">
        <HomeText />
      </div>


      {/* Images scrolling into view with text */}
      <div className="h-1000">
        <Pictures />
      </div>

      {/* <div className="h-1000">
      </div> */}


      <ScrollForMore />
    </div>
  )
}