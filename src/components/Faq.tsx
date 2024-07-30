"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the return policy?",
      answer: "You can return products within 30 days of purchase for a full refund. Please ensure the items are in their original condition and packaging."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping. Shipping costs and delivery times vary based on the destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and other secure payment methods."
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="md:flex flex-col justify-center max-w-[85rem] bg-white items-center gap-6 md:mx-auto py-8 mt-4 mx-4 ">
      <h2 className="lg:text-5xl  md:text-4xl text-2xl  mb-6 text-black antialiased">Frequently Asked Questions</h2>
      <div className="bg-white  rounded-lg overflow-hidden w-full">
        {faqs.map((faq, index) => (
          <div key={index} className={`border-2  md:p-4 my-4  rounded-2xl ${openIndex === index ? 'border-[#c99245 bg-[#F8F5F0]' : 'border-[#F8F5F0]'} `}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-4 py-4 text-left flex justify-between items-center    focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="flex items-center text-xl md:text-3xl  justify-center w-8 h-8 border- border-[#F8F5F0] rounded-full p-6"
                  animate={{ backgroundColor: openIndex === index ? '#c99245' : '#f3f4f6', color: openIndex === index ? '#fff' : '#4b5563' }}
                  transition={{ duration: 0.5 }}
                >
                  0{index + 1}
                </motion.div>
                <span className=" font-sans font-normal text-xl md:text-2xl  text-gray-600 ml-2">{faq.question}</span>
              </div>
              <motion.div
                className="flex items-center justify-center w-8 h-8 border- border-[#F8F5F0] rounded-full"
                animate={{ backgroundColor: openIndex === index ? '#c99245' : '#f3f4f6', color: openIndex === index ? '#fff' : '#c99245' }}
                transition={{ duration: 0.5 }}
              >
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="px-4 py-3 bg-[#F8F5F0]"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'top', overflow: 'hidden' }}
                >
                  <p className='text-gray-700 antialiased inter-font'>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
