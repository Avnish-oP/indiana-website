"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type FounderType = {
  image: string;
  name: string;
  designation: string;
  linkedin: string;
};

const FounderCard = ({ founder }: { founder: FounderType }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0.9,
        rotate: inView ? 0 : -10,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group w-[20rem] md:w-[25rem] h-[28rem] flex-shrink-0"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{
          opacity: inView ? 1 : 0,
          rotate: inView ? 0 : -10,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute -right-4 -top-8 left-10 -bottom-20 inset-0 border-2 opacity-50 border-gray-400 group-hover:border-[#C8A26B] group-hover:bg-[#F8F5F0] transition-all group-hover:opacity-100 rounded-xl p-4 -z-0"
      />
      <div className="relative z-10 flex justify-center -space-x-4 items-center h-full p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <Image
            src={founder.image}
            width={200}
            height={400}
            alt={founder.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
        <motion.h3
          className="text-3xl relative left-8 text-nowrap bg-clip-text -rotate-90 opacity-75 from-[#C8A26B] to-white font- antialiased"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20, rotate: -90 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {founder.designation}
        </motion.h3>
      </div>
      <div className="flex justify-center items-center gap-1 md:gap-4 z-10">
        <Link
          className="cursor-pointer hover:text-[#0e76a8] transition-colors duration-300 z-10"
          href={founder.linkedin}
        >
          <FaLinkedin className="w-6 md:w-8 h-6 md:h-8 text-[#C8A26B] hover:text-[#0e76a8] transition-colors duration-300 " />
        </Link>
        <motion.h3
          className="text-2xl md:text-3xl bg-clip-text text-center text-nowrap text-transparent group-hover:text-[#C8A26B]  bg-gradient-to-b from-[#C8A26B] to-gray-200  font- antialiased z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {founder.name}
        </motion.h3>
      </div>
    </motion.div>
  );
};

const Founders = () => {
  const founders = [
    {
      image: "https://picsum.photos/id/238/200/300",
      name: "Deepanshu Tyagi",
      designation: "CEO",
      linkedin: "https://www.linkedin.com/in/founder1",
    },
    {
      image: "https://picsum.photos/id/240/200/300",
      name: "Arushi",
      designation: "CTO",
      linkedin: "https://www.linkedin.com/in/founder2",
    },
    {
      image: "https://picsum.photos/id/239/200/300",
      name: "Anshu",
      designation: "COO",
      linkedin: "https://www.linkedin.com/in/founder3",
    },
  ];

  return (
    <section className="bg-white py-20 text-[#C8A26B]  overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font- mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Founders
        </motion.h2>
        <motion.p
          className="text-xl italic mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          &quot; Success is best when it&apos;s shared.&quot;
        </motion.p>
        <div className="flex flex-col gap-24 lg:gap-8 lg:flex-row justify-center items-center mb-8 space-y-10 md:space-y-0 md:">
          {founders.map((founder, index) => (
            <FounderCard key={index} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
