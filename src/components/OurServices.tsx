"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Product Sourcing",
    description:
      "Finding high-quality products from trusted suppliers worldwide.",
    image: "/images/Hero.jpg",
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
    image: "/images/temple.jpg",
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
    image: "/images/beautiful.jpeg",
    svg: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-10 h-10 text-[#C8A26B]">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      `,
  },
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageWrapperVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 },
  };

  return (
    <div
  ref={ref}
  className={`flex flex-row items-center md:mx-20 md:space-y-0 mb-10 overflow-hidden ${
    index % 2 !== 0 ? "flex-row-reverse -space-x-reverse -ml-8" : "md:-space-x-16"
  } -space-x-8`}
>
  <motion.div
    className="flex-1 p-4 md:p-5 lg:p-10 bg-white shadow-lg rounded-2xl relative z-20"
    initial="hidden"
    animate={controls}
    variants={cardVariants}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div dangerouslySetInnerHTML={{ __html: service.svg }} />
    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-800 my-4">
      {service.title}
    </h2>
    <p className="text-gray-600 dark:text-gray-400 my-2">{service.description}</p>
  </motion.div>
  <motion.div
    className={`flex-1 md:block overflow-hidden rounded-2xl relative ${index===1?"left-16":" "} z-10`}
    initial="hidden"
    animate={controls}
    variants={imageWrapperVariants}
    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
    style={{ transformOrigin: "left" }}
  >
    <Image
      src={service.image}
      alt={service.title}
      width={400}
      height={200}
      className="object-cover object-center w-full h-64 md:h-80 lg:h-76"
    />
  </motion.div>
</div>
  );
};

export default function ServiceSection() {
  return (
    <section className="py-16 bg-[#222]">
      <div className="container mx-auto px-4 border-[0.01rem] border-white p-10 rounded-3xl">
        <h1 className="text-4xl text-center text-white antialiased mb-12">
          Why Choose Us?
        </h1>
        <div className="space-y-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
