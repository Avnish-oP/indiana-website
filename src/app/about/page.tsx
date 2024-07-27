"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const About = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 text-[#C8A26B] gilda-display-regular">
      <div className="container mx-auto text-center">
        <div className="mb-10 rounded-full">
          <Image
            src="logo.svg"
            alt="Indiana Merchandise Logo"
            width={400}
            height={300}
            className="mx-auto hover:scale-105 drop-shadow-2xl transition-all duration-300 bg-transparent"
          />
          <h1 className="text-5xl font-normal">Indiana Merchandising</h1>
        </div>
        <div className="bg-white shadow-lg rounded-3xl p-10 max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4">Founder&apos;s Note</h2>
          <p className="text-gray-700 text-lg">
            Welcome to Indiana Merchandise, where we are dedicated to
            delivering unparalleled quality and craftsmanship. Our commitment to
            excellence drives us to source the finest products and provide
            exceptional service to our clients. Thank you for choosing us as
            your trusted partner. We look forward to working with you and
            helping you achieve your goals. 
          </p>
        </div>
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 antialiased">Company&apos;s Vision</h2>
          <p className="text-gray-700 italic text-lg">
          &quot;Indiana Merchandise is a leading provider of high-quality products
            sourced from trusted suppliers worldwide. Our services include
            product sourcing, logistics management, and quality assurance,
            ensuring that our clients receive the best products with timely
            delivery. We pride ourselves on our commitment to excellence and
            customer satisfaction.&quot;
          </p>
        </div>
        <div className="relative group w-60 h-60 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 opacity-50 border-gray-400 group-hover:border-[#C8A26B] transition-all group-hover:opacity-100 duration-300"></div>
          <div className="relative z-10 flex flex-col items-center">
            <Image
              src="https://picsum.photos/id/238/200/200"
              alt="Founder"
              width={220}
              height={200}
              className="rounded-full mt-[0.6rem] object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl mt-6 font-bold mb-2">Depanshu Tyagi</h3>
            <div className="flex space-x-4 text-2xl text-[#C8A26B]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-700 transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 transition-colors duration-300"
              >
                <FaX />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
