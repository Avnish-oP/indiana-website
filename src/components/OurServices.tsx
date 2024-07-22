"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/../public/images/hero.jpg";
import temple from "@/../public/images/temple.jpg";
import beautiful from "@/../public/images/beautiful.jpeg";

const services = [
  {
    id: 1,
    title: "Product Sourcing",
    description:
      "Finding high-quality products from trusted suppliers worldwide.",
    image: image,
    svg: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10 text-[#C8A26B]">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 5h18v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9zm10 3h4m-4 2h2m-6-2H7m-2 0h2m-2 2h2" />
        </svg>
      `,
  },
  {
    id: 2,
    title: "Logistics Management",
    description:
      "Ensuring efficient and timely delivery of goods to your business.",
    image: temple,
    svg: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10 text-[#C8A26B]">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a3 3 0 00-3 3v14a3 3 0 006 0V5a3 3 0 00-3-3zM9 8h6M9 12h6M12 16v.01" />
        </svg>
      `,
  },
  {
    id: 3,
    title: "Quality Assurance",
    description:
      "Providing thorough quality checks to ensure product excellence.",
    image: beautiful,
    svg: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10 text-[#C8A26B]">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      `,
  },
];

export default function ServiceSection() {
  return (
    <div className="p-10 space-y-10 lg:mx-16">
      <h1 className="text-4xl font-bold text-center text-[#C8A26B] antialiased">
        Why Choose Us?
      </h1>
      {services.map((service, index) => (
        <div key={service.id} className="flex items-center  -space-x-20">
          <motion.div
            className="flex-1 p-5 h-52 bg-white shadow-lg rounded-2xl relative  z-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div dangerouslySetInnerHTML={{ __html: service.svg }} />
            <h2 className="text-xl font-bold text-gray-800 mt-4">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </motion.div>
          <motion.div
            className="flex-1 overflow-hidden rounded-2xl z-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }} // Adjust delay as needed
              style={{ transformOrigin: "left" }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                className="object-cover object-center w-full max-h-72"
              />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
