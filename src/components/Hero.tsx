"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const texts = [
    "Welcome to  our platform",
    "Your journey  starts here",
    "Unlock your  potential",
  ];

  const handleClick = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <section
      className={`relative z-0 h-screen bg-cover bg-center ${styles.heroBackground}`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div>
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              {texts[index].split(" ").map((word, i) =>
                i === 1 ? (
                  <span key={i} className="relative inline-block">
                    {word}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 20"
                      className="absolute left-0 bottom-0 w-full h-5 text-[#C8A26B]"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,10 Q50,20 100,10 T200,10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                ) : (
                  word + " "
                )
              )}
            </motion.h1>
          </AnimatePresence>
          <button className="absolute sm:top-2/3 top-[63%] sm:left-[42vw] left-[30vw]  px-6 py-3 bg-[#C8A26B] rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-white hover:text-[#C8A26B]">
            Get Started
            </button>
        </div>
        <div className="absolute right-8 sm:top-1/2 top-2/3  transform -translate-y-1/2 flex flex-col  space-y-4">
          {texts.map((_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                i === index
                  ? "bg-[#C8A26B] text-white"
                  : "bg-white text-[#C8A26B]"
              }`}
              onClick={() => handleClick(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
