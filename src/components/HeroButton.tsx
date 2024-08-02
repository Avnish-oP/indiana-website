"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactUs from "./ContactUs";
import ContactForm from "./contactUsform";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaPhoneFlip, FaPhoneSlash, FaSquarePhone } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

export function HeroButton() {
  return (
    <Link href={"/contacts"} className="py-10  z-50 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="border-2 hover:bg-[#C8A26B] items-center gap-2 p-5 px-6 border-[#C8A26B] rounded-full dark:bg- dark:text-white  text-xl text-white flex justify-center group/modal-btn ">
          <span className="group-hover/modal-btn:translate-y-40 text-xl text-center inter-font transition duration-500 ">
            CONTACT US
          </span>
          <svg
          className="group-hover/modal-btn:translate-y-40 text-xl text-center inter-font transition duration-500 "
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
            
          </svg>
          <div className="-translate-y-40 group-hover/modal-btn:translate-y-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white text-base z-20 text-center ">
          <span className=" text-xl text-center transition inter-font duration-500 mr-2 ">
            CONTACT US
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 2L11 13"></path>
            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
            
          </svg>
          </div>
        </ModalTrigger>
        {/* <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100  text-center mb-8">
              Contact Us{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Now
              </span>{" "}
              ✈️
            </h4>
            <div className="bg-[#C8A26B] mx-10 mb-4 max-w-lg">
              <ContactForm />
            </div>
          </ModalContent>
        </ModalBody> */}
      </Modal>
    </Link>
  );
}
