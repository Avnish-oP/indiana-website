"use client";
import React, { useState } from "react";
import { categories } from "./Categories";

function Categories2() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeProduct, setActiveProduct] = useState(1);
  const setCategory = (index: number) => {
    setActiveCategory(index);
    setActiveProduct(0);
  };
  return (
    <div>
      <div className="w-full flex justify-center items-end gap-6 overflow-hidden">
        {categories.map((category, index) => (
          <div
            onClick={() => setCategory(index)}
            key={index}
            className={`text-nowrap ${
              activeCategory === index ? "text-gray-600 text-5xl" : "text-3xl opacity-50 text-gray-500"
            }`}
          >
            {category.title}
          </div>
        ))}
      </div>
      <div className="w-full mt-6 flex justify-center items-end gap-6 overflow-hidden">
      <div className="flex justify-center">
            <button
              onClick={() => {
                if (
                  activeProduct === 0
                  
                ) {
                  setActiveProduct(categories[activeCategory].products.length - 1);
                } else {
                  setActiveProduct(activeProduct - 1);
                }
              }}
              className="bg-white text-gray-800 px-6 py-2 rounded-md w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        {categories[activeCategory].products.map((product, index) => (
          <div
            onClick={() => setActiveProduct(index)}
            key={index}
            className={`text-nowrap ${
              activeProduct === index ? "text-[#d7d1d1] text-5xl" : "text-3xl "
            }`}
          >
            {product.content}
            {activeProduct === index && (
              <div>
                <h1>{product.title}</h1>
                <p className="text-gray-400 text-lg">{product.description}</p>
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-center">
            <button
              onClick={() => {
                if (
                  activeProduct ===
                  categories[activeCategory].products.length - 1
                ) {
                  setActiveProduct(0);
                } else {
                  setActiveProduct(activeProduct + 1);
                }
              }}
              className="bg-white text-gray-800 px-6 py-2 rounded-md w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
      </div>
    </div>
  );
}

export default Categories2;
