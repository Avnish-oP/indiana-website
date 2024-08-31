"use client";
import React, { useState, useEffect, useRef } from "react";
import { categories } from "./Categories"; // Adjust the import as needed

function Categories2() {
  const [activeCategory, setActiveCategory] = useState(3);
  const [activeProduct, setActiveProduct] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const setCategory = (index: number) => {
    setActiveCategory(index);
    setActiveProduct(0); // Reset product when category changes
  };

  const prevCategory = () => {
    setActiveCategory((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const nextCategory = () => {
    setActiveCategory((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  const prevProduct = () => {
    setActiveProduct((prev) =>
      prev === 0 ? categories[activeCategory].products.length - 1 : prev - 1
    );
  };

  const nextProduct = () => {
    setActiveProduct((prev) =>
      prev === categories[activeCategory].products.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (containerRef.current) {
      const activeElement = containerRef.current.children[activeCategory] as HTMLElement;
      const containerWidth = containerRef.current.offsetWidth;
      const activeElementWidth = activeElement.offsetWidth;
      const scrollPosition = activeElement.offsetLeft - (containerWidth / 2 - activeElementWidth / 2);

      containerRef.current.style.transform = `translateX(${-scrollPosition}px)`;
      containerRef.current.style.transition = "transform 0.9s ease-in-out";
    }
  }, [activeCategory]);

  return (
    <div
      className="w-full py-10 flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${categories[activeCategory].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Category Selection */}
        <div className="relative w-full flex justify-between items-center">
          {/* Left Button (Previous) */}
          <button
            onClick={prevCategory}
            className="absolute z-10 bg-white text-gray-800 py-6 px-3 mb-10 rounded-sm bg-opacity-10 hover:bg-opacity-75 transition-all duration-300"
          >
            &lt;
          </button>

          <div className="relative w-full flex justify-start items-end overflow-hidden no-scrollbar snap-x snap-mandatory">
            <div className="pl-4"></div> {/* Add padding at the start */}
            <div
              ref={containerRef}
              className="w-full flex justify-start items-end"
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center items-center transition-transform duration-500 ${
                    activeCategory === index ? "scale-110" : "scale-100"
                  }`}
                >
                  <div
                    onClick={() => setCategory(index)}
                    className={`cursor-pointer snap-center font-bold text-center ${
                      activeCategory === index
                        ? " text-3xl lg:text-[3.4rem] text-gray-200"
                        : "text-5xl lg:text-[3rem] opacity-50 text-gray-400"
                    } transition-all duration-1000`}
                  >
                    {category.title}
                  </div>
                  <div className="transition-all duration-1000">
                    <svg
                      className={`h-8 ${
                        activeCategory === index ? "scale-100" : "scale-100"
                      }`}
                      viewBox={`0 0 ${category.title.length * 16} 16`}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {[...Array(Math.floor(category.title.length * 4))].map(
                        (_, i) => (
                          <path
                            key={i}
                            d={`M${i * 4} ${
                              i === Math.floor(category.title.length * 2)
                                ? "0"
                                : Math.random() < 0.3
                                ? "4"
                                : "8"
                            } V20`}
                            stroke={
                              i === Math.floor(category.title.length * 2)
                                ? "#C8A26B"
                                : "#ccc"
                            }
                            strokeWidth={
                              activeCategory === index &&
                              i === Math.floor(category.title.length * 2)
                                ? "1"
                                : "0.2"
                            }
                          />
                        )
                      )}
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="pr-4"></div> {/* Add padding at the end */}
          </div>

          {/* Right Button (Next) */}
          <button
            onClick={nextCategory}
            className="absolute right-0 bg-white text-gray-800 px-3 py-6 mb-8 rounded-sm bg-opacity-10 hover:bg-opacity-100 transition-all duration-300"
          >
            &gt;
          </button>
        </div>

        {/* Product Display */}
        <div className="flex mt-16 lg:mt-10 justify-center items-center w-full px-8">
          <button
            onClick={prevProduct}
            className="bg-transparent border border-white text-white p-2 rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="mt-8 w-full flex justify-between items-start px-4 relative">
            {/* mobile view */}
            <div className="flex sm:hidden justify-center w-full relative overflow-hidden">
              {categories[activeCategory].products.map((product, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 cursor-pointer flex flex-col justify-center items-center ${
                    activeProduct === index ? "block" : "hidden"
                  }`}
                  onClick={() => setActiveProduct(index)}
                >
                  <div className="text-2xl text-white">{product.content}</div>
                  {index === activeProduct && (
                    <div className="text-center">
                      <div className="mt-2 text-gray-300">{product.title}</div>
                      <div className="mt-4 text-gray-300">
                        {product.description}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* desktop view */}
            <div className="hidden sm:flex justify-center w-full relative overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(${-(activeProduct - 1) * 33.33}%)`,
                  width: `${
                    categories[activeCategory].products.length * 33.33
                  }%`,
                }}
              >
                {categories[activeCategory].products.map((product, index) => (
                  <div
                    key={index}
                    className={`w-1/3 flex-shrink-0 cursor-pointer flex flex-col justify-center items-center ${
                      activeProduct === index ? "opacity-100 " : "opacity-50"
                    } transition-all duration-1000`}
                    onClick={() => setActiveProduct(index)}
                  >
                    <div className="text-2xl text-white">{product.content}</div>
                    {index === activeProduct && (
                      <div className="text-center">
                        <div className="mt-2 text-gray-300">
                          {product.title}
                        </div>
                        <div className="mt-4 text-gray-300">
                          {product.description}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={nextProduct}
            className="bg-transparent border border-white text-white p-2 rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories2;
