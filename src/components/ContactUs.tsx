"use client"
import React from 'react';
import Image from 'next/image'; // Replace with your actual image path
import ContactForm from './contactUsform';

const ContactUs = () => {
  return (
    <div className="shadow-lg lg:mx-16 mx-2 lg:p-12 p-4 rounded-xl">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl  text-gray-800 dark:text-[#C8A26B] mb-6">Contact Us</h2>
            <ContactForm />
          </div>
          <div className="hidden md:block">
            <h3 className="text-3xl  text-gray-800 dark:text-[#C8A26B] mb-4">We&apos;d love to hear from you!</h3>
            <div className="mb-6">
              <Image src="/images/hero.jpg" width={400} height={400} alt="Contact Us" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-500 font-semi">Contact Number</p>
              <p className="text-xl text-gray-800 dark:text-[#C8A26B] ">+91-9998883332</p>
            </div>
          </div>
        </div>
        <div className="block md:hidden mt-8">
          <h3 className="text-2xl  text-gray-800 dark:text-[#C8A26B] mb-4">We&apos;d love to hear from you!</h3>
          <div className="mb-6">
            <Image src="/images/hero.jpg" width={400} height={400} alt="Contact Us" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-semi">Contact Number</p>
            <p className="text-xl text-gray-800 dark:text-[#C8A26B] ">+91 9998883332</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
