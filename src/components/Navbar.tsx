"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../public/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [showNav, setShowNav] = useState(true);

  let lastScrollY = 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full text-[#C8A26B] z-20 transition-all duration-300  ${
        scroll ? "bg-gradient-to-r from-white via-gray-100 to-white shadow-md" : "bg-transparent"
      } ${showNav ? "top-0" : "-top-16"}`}
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-0">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: scroll ? 1.25 : 1.35 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="brightness-125"
                />
              </motion.div>
              <span className="text-4xl antialiased bellefair-regular font-extralight">
                INDIANA
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6 z-30">
            {["Home", "About", "Contacts", "Categories"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative group text-[#C8A26B] hover:text-[#ffce8a] px-3 py-0 rounded-md text-lg font-medium transition-colors duration-300 cursor-pointer antialiased bellefair-regular"
              >
                {item}
                <span
                  className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#C8A26B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                ></span>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#C8A26B] hover:text-white hover:bg-[#C8A26B] focus:outline-none    transition-transform"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.05 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1  sm:px-3">
          {["Home", "About", "Contacts", "Categories"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative block text-[#C8A26B]  hover:text-[#ffce8a] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              {item}
              <span
                  className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#C8A26B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                ></span>
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
