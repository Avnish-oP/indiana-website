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
    <div className="md:flex justify-center max-w-5xl items-center gap-6 md:mx-auto py-8 mt-4 mx-4 ">
      <h2 className="lg:text-6xl md:text-4xl text-2xl font-semibold mb-6 text-[#c99245] antialiased">Frequently Asked Questions</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-b-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-100 focus:outline-none"
            >
              <span className="font-medium text-lg text-[#c99245]">{faq.question}</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="#c99245"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="px-4 py-3 bg-gray-50"
                  initial={{ maxHeight: 0, opacity: 0 }}
                  animate={{ maxHeight: 500, opacity: 1 }} // You can adjust maxHeight as needed
                  exit={{ maxHeight: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }} // Ensure content does not overflow
                >
                  <p className='text-gray-500 antialiased'>{faq.answer}</p>
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
