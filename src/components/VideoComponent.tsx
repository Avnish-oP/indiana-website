"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      setIsPlaying(true);
    }, 400); // Adjust the delay to synchronize the transition
  };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-black"></div>
      </div>
      <div className="relative z-10 p-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font- mb-8 text-[#C8A26B]"
        >
          Watch Our Story
        </motion.h2>
        <AnimatePresence>
          {!showVideo && (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="relative group rounded-3xl"
            >
              <img
                src="/images/Hero.jpg"
                alt="Video Thumbnail"
                width={800}
                height={200}
                onClick={handlePlay}
                className="w-[60vw] h-[75vh] rounded-2xl shadow-lg cursor-pointer"
              />
              <motion.button
                onClick={handlePlay}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-6 py-3 rounded-full text-lg font-semi transition-colors duration-300 group-hover:bg-opacity-75"
                style={{ mixBlendMode: 'screen' }}
              >
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-6.196-3.698A1 1 0 007 8.131v7.738a1 1 0 001.556.832l6.196-3.698a1 1 0 000-1.664z"
                  />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isPlaying && inView && (
            <motion.div
              key="video"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
              className="w-full mx-auto"
            >
              <video
                src="/homeVideo2.mp4"
                className="w-full h-[75vh] rounded-2xl shadow-lg"
                autoPlay={true}
                loop={true}
              ></video>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoComponent;
