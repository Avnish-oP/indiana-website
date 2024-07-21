"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  categories,
  contentClassName,
}: {
  categories: {
    title: string;
    description: string;
    products: {
      title: string;
      description: string;
      content?: React.ReactNode | any;
    }[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);

  const categoryRef = useRef<any>(null);
  const productRef = useRef<any>(null);

  const { scrollYProgress: categoryScrollYProgress } = useScroll({
    container: categoryRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: productScrollYProgress } = useScroll({
    container: productRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(categoryScrollYProgress, "change", (latest) => {
    const categoryBreakpoints = categories.map((_, index) => index / categories.length);
    const closestCategoryIndex = categoryBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - categoryBreakpoints[acc]) ? index : acc;
    }, 0);

    if (closestCategoryIndex !== activeCategory) {
      setActiveCategory(closestCategoryIndex);
      setActiveProduct(0); // Reset product when category changes
    }
  });

  useMotionValueEvent(productScrollYProgress, "change", (latest) => {
    const products = categories[activeCategory].products;
    const productBreakpoints = products.map((_, index) => index / products.length);
    const closestProductIndex = productBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint+0.3);
      return distance < Math.abs(latest - productBreakpoints[acc]) ? index : acc;
    }, 0);

    setActiveProduct(closestProductIndex);
  });

  const backgroundColors = ["white", "var(--black)", "var(--neutral-900)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeProduct % linearGradients.length]);
  }, [activeProduct]);

  return (
    <div className="flex space-x-0 cursor-all-scroll ">
      <motion.div
        animate={{ backgroundColor: backgroundColors[activeCategory % backgroundColors.length] }}
        className="h-[30rem] lg:w-1/3 overflow-y-auto relative space-x-10  p-10  no-scrollbar "
        ref={categoryRef}
      >
        <div className="relative flex flex-col items-center px-4">
          <div className="max-w-2xl">
            {categories.map((category, index) => (
              <div key={category.title + index} className="mt-24">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCategory === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-[#C8A26B]"
                >
                  {category.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCategory === index ? 1 : 0.3 }}
                  className="text-kg text-[#e4b97b] max-w-sm mt-6"
                >
                  {category.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ backgroundColor: backgroundColors[activeProduct % backgroundColors.length] }}
        className="h-[30rem] md:w-2/3 flex justify-center md:justify-around overflow-y-auto relative space-x-10  p-10  no-scrollbar"
        ref={productRef}
      >
        <div className="relative flex flex-col items-center px-4">
          <div className="max-w-2xl">
            {categories[activeCategory].products.map((product, index) => (
              <div key={product.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeProduct === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-[#C8A26B]"
                >
                  {product.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeProduct === index ? 1 : 0.3 }}
                  className="text-kg text-[#e3b87b] max-w-sm mt-10"
                >
                  {product.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-20 overflow-hidden",
            contentClassName
          )}
        >
          {categories[activeCategory].products[activeProduct].content ?? null}
        </div>
      </motion.div>
    </div>
  );
};
