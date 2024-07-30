"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-black"></div>
      </div>
      <div className="relative z-10 p-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-[#C8A26B]"
        >
          Watch Our Story
        </motion.h2>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group rounded-3xl"
          >
            <img
              src="/images/Hero.jpg"
              alt="Video Thumbnail"
              width={800}
              height={200}
              onClick={handlePlay}
              className="w-[80vw] h-[75vh]  rounded-3xl shadow-lg cursor-pointer"
            />
            <motion.button
              onClick={handlePlay}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 group-hover:bg-opacity-75"
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
        {isPlaying && inView && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto mt-8"
          >
            <video
              src="https://www.pexels.com/video/video-of-a-house-interior-7578552/"
              
              className="w-[80vw] h-[75vh] rounded-lg shadow-lg"
              autoPlay
            ></video>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoComponent;
