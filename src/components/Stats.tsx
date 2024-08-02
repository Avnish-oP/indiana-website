"use client";
import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const splitNumber = (number: number) => {
  return number.toString().split('');
};

const AnimatedDigit = ({ digit, index }: { digit: string; index: number }) => {
  const props = useSpring({
    from: { transform: `translateY(${index % 2 === 0 ? -20 : 20}px)` },
    to: { transform: 'translateY(0px)' },
    config: config.stiff,
    reset: true,
    delay: index * 100, // Stagger the animations
  });

  return (
    <animated.span style={props} className="inline-block">
      {digit}
    </animated.span>
  );
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const digits = splitNumber(value);

  return (
    <span className="text-4xl text-[#C8A26B]">
      {digits.map((digit, index) => (
        <AnimatedDigit key={index} digit={digit} index={index} />
      ))}
    </span>
  );
};

const StatsBar = () => {
  const stats = [
    { label: "Products Sold", value: 3500 },
    { label: "Total Revenue", value: 7500 },
    { label: "Active Clients", value: 850 },
    { label: "New Clients", value: 1200 },  // Added fourth stat
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust as needed
  });

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
      <h2 className="text-3xl font-extra mb-8 text-gray-800 text-center">Our Achievements</h2>
      <div ref={ref} className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            {inView && <AnimatedNumber value={stat.value} />}
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
