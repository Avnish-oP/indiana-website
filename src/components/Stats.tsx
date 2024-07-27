"use client";
import React from 'react';
import { useSpring, animated } from 'react-spring';

const stats = [
  { label: "Products Sold", value: 3500 },
  { label: "Total Revenue", value: 7500 },
  { label: "Active Clients", value: 850 },

];

const AnimatedNumber = ({ value }: { value: number }) => {
  const props = useSpring({
    number: value,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.span className="text-4xl font-bold text-[#C8A26B]">
      {props.number.to(n => Math.floor(n).toLocaleString())}
    </animated.span>
  );
};

const StatsBar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">Our Achievements</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex  items-center">
            <AnimatedNumber value={stat.value} />
            <p className="text-gray-800 text-lg ml-2">{stat.label}</p>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-[0.09rem] h-16 bg-gray-300 mx-6"></div>
            )}
          </div>
        ))}
      </div>
      <div className="md:hidden w-full h-1 bg-gray-300 my-6"></div>
    </div>
  );
};

export default StatsBar;
