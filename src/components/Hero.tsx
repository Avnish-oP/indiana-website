"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Hero.module.css";
import { HeroButton } from "./HeroButton";
import { FiPhone } from "react-icons/fi";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const texts = [
    "Welcome to Indiana  Merchandise",
    "Where Exquisite Craftsmanship  Meets Unparalleled Quality",
    "Luxury Meets Imagination : The Essence of Elegance with INDIANA MERCHANDISING",
  ];

  const handleClick = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const textVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100vw" : "-100vw",
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
    center: {
      x: 0,
      opacity: 1,
      height: "auto",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100vw" : "100vw",
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  const buttonVariants = {
    enter: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -50,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const phoneVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100vw" : "-100vw",
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
    center: {
      x: 0,
      opacity: 1,
      height: "auto",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100vw" : "100vw",
      opacity: 0,
      height: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <section
      className={`relative z-0 h-screen bg-cover bg-center ${styles.heroBackground} overflow-hidden`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center"
            >
              <h1 className={`text-3xl md:text-5xl lg:text-6xl font-normal`}>
                {texts[index].split(" ").map((word, i) =>
                  i === 2 ? (
                    <span key={i} className="relative inline-block">
                      {word}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 20"
                        className="absolute left-0 -bottom-3 w-full h-5 text-[#C8A26B]"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,10 Q50,0 100,0 T200,10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                      </svg>
                    </span>
                  ) : (
                    word + " "
                  )
                )}
              </h1>
              <motion.div
                variants={buttonVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <HeroButton />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={phoneVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4"
            >
              <motion.div
                className="flex items-center space-x-3 bg-transparent border-2 border-[#C8A26B] text-[#C8A26B] px-4 py-2 rounded-full transition-colors hover:bg-[#C8A26B] hover:text-white"
                whileHover={{ backgroundColor: "#C8A26B", color: "#FFFFFF" }}
              >
                <FiPhone className="w-5 h-5" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="font-semibold hover:text-[#C8A26B] antialiased text-2xl transition-colors duration-300"
              >
                +91-23456-7890
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute md:right-8 right-2 md:top-1/2 top-[82%] transform -translate-y-1/2 flex flex-col space-y-4">
          {texts.map((_, i) => (
            <motion.button
              key={i}
              className={`px-3 py-1 rounded-full text-lg md:text-xl font-normal transition-colors duration-300 ${
                i === index ? "text-2xl bg-[#C8A26B] text-white scale-150" : "bg-gray-100  bg-opacity-60 text-gray-800"
              }`}
              onClick={() => handleClick(i)}
              initial={{ opacity: 0.9, scale: 0.9 }}
              animate={{ opacity: 1, scale: i === index ? 1.5 : 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
