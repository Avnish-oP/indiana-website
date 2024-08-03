"use client";
import React from 'react';
import { useSpring, animated } from 'react-spring';

const stats = [
  { label: "Products Sold", value: 3500 },
  { label: "Total Revenue", value: 7500 },
  { label: "Active Clients", value: 850 },
  { label: "Total Countries", value: 15 },

];

const AnimatedNumber = ({ value }: { value: number }) => {
  const props = useSpring({
    number: value,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.span className="text-5xl text-black hover:text-[#C8A26B] transition-all duration-500">
      {props.number.to(n => Math.floor(n).toLocaleString())}
    </animated.span>
  );
};

const StatsBar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
      <h2 className="text-4xl  font-extra mb-8 text-gray-800 text-center">Our Achievements</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex  items-center">
            <AnimatedNumber value={stat.value} />
            <p className="text-gray-800 text-base text-nowrap  ml-4 ">{stat.label}</p>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-[0.09rem] h-16 bg-[#C8A26B] mx-6"></div>
            )}
          </div>
        ))}
      </div>
      {/* <div className="md:hidden w-full h-1 bg-[#C8A26B] my-6"></div> */}
    </div>
  );
};

export default StatsBar;