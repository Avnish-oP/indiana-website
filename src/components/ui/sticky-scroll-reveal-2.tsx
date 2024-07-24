"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
 // Adjust the path as needed

export const ScrollableCategories = ({
  categories,
}: {
  categories: {
    title: string;
    description: string;
    products: {
      title: string;
      description: string;
      content: React.ReactNode;
    }[];
  }[];
}) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const categoryRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (categoryRefs.current[activeCategory]) {
      categoryRefs.current[activeCategory].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [activeCategory]);

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
    setActiveProduct(0); // Reset the active product when category changes
  };

  const handleProductClick = (index: number) => {
    setActiveProduct(index);
  };

  return (
    <div className="w-full flex flex-col items-center p-4 relative gilda-display-regular">
      <h1 className="md:text-4xl text-2xl text-center font-bold text-[#b68034] mb-10 my-4 antialiased">Categories Available</h1>
      <div className="relative w-full mb-6 overflow-hidden">
        <div className="flex overflow-x-auto no-scrollbar items-center">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              onClick={() => handleCategoryClick(index)}
              className={`cursor-pointer text-center md:text-xl text-lg flex items-center mx-4 transition-transform duration-300 ${
                activeCategory === index
                  ? "text-[#C8A26B] font-bold scale-110"
                  : "text-gray-600 opacity-50 scale-90"
              }`}
              ref={(el) => (categoryRefs.current[index] = el as HTMLDivElement)}
            >
              <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 mr-4">
                <defs>
                  <pattern
                    id="bars"
                    patternUnits="userSpaceOnUse"
                    width="10"
                    height="10"
                  >
                    <rect width="5" height="5" fill="none" />
                    <path d="M0,0 L10,0 L10,1 L0,1 Z" fill="rgba(0,0,0,0.5)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#bars)" />
              </svg>

              {category.title}

              <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 ml-4">
                <defs>
                  <pattern
                    id="bars"
                    patternUnits="userSpaceOnUse"
                    width="10"
                    height="10"
                  >
                    <rect width="5" height="5" fill="none" />
                    <path d="M0,0 L10,0 L10,1 L0,1 Z" fill="rgba(0,0,0,0.5)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#bars)" />
              </svg>
            </motion.div>
          ))}
        </div>
        {/* SVG Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          
        </div>
      </div>

      {/* Horizontal Scrollable Products */}
      <div className="flex overflow-x-auto w-full no-scrollbar items-center mb-6">
        {categories[activeCategory].products.map((product, index) => (
          <motion.div
            key={index}
            onClick={() => handleProductClick(index)}
            className={`cursor-pointer flex justify-center lg:ml-44 items-center mx-4 p-2 min-w-[200px] transition-transform duration-300 ${
              activeProduct === index
                ? "text-[#C8A26B] font-bold scale-110"
                : "text-gray-600 opacity-50 scale-90"
            }`}
          >
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 mr-4">
              <defs>
                <pattern
                  id="bars"
                  patternUnits="userSpaceOnUse"
                  width="10"
                  height="10"
                >
                  <rect width="5" height="5" fill="none" />
                  <path d="M0,0 L10,0 L10,1 L0,1 Z" fill="rgba(0,0,0,0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bars)" />
            </svg>
            <div className="text-center">{product.title}</div>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 ml-2">
              <defs>
                <pattern
                  id="bars"
                  patternUnits="userSpaceOnUse"
                  width="10"
                  height="10"
                >
                  <rect width="5" height="5" fill="none" />
                  <path d="M0,0 L10,0 L10,1 L0,1 Z" fill="rgba(0,0,0,0.5)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#bars)" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Product Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 text-center"
        >
          {categories[activeCategory].products[activeProduct].content}
          <h2 className="text-xl font-bold">
            {categories[activeCategory].products[activeProduct].title}
          </h2>
          <p className="text-gray-600 mt-2">
            {categories[activeCategory].products[activeProduct].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ScrollableCategories;