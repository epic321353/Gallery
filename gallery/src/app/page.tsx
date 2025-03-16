"use client";

import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col w-full h-[calc(100vh_-_68.4px)]">
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              revealed: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
            initial="hidden"
            animate="revealed">
            <span className="text-base sm:text-sm md:text-lg lg:text-4xl xl:text-7xl 2xl:text-10xl 3xl:text-13xl font-bold">
              Where Creativity Meets Vision
            </span>
            <div className="flex items-center opacity-30 justify-center mt-10">Scroll for more</div>
          </motion.div>

          <motion.div
            initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
            whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
          />
        </div>
      </div>
    </div>
  )
}