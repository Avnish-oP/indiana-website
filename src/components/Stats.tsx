"use client";
import React from 'react';
import { useSpring, animated } from 'react-spring';


const stats = [
  { label: "Products Sold", value: 3500, maxValue: 5000 },
  { label: "Total Revenue", value: 7500, maxValue: 10000 },
  { label: "Active Clients", value: 850, maxValue: 1000 },
];

const ProgressBar = ({ value, maxValue }: { value: number; maxValue: number }) => {
  const percentage = (value / maxValue) * 100;
  
  const springProps = useSpring({
    width: `${percentage}%`,
    from: { width: '0%' },
    config: { duration: 1000 }
  });

  return (
    <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
    
      <animated.div
        className="h-full bg-[#C8A26B] rounded-full"
        style={springProps}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
        <AnimatedNumber value={value} />
      </div>
    </div>
  );
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const props = useSpring({
    number: value,
    from: { number: 0 },
    to: { number: value },
    config: { duration: 1000 },
  });

  return (
    <animated.span className="text-lg">
      {props.number.to(n => Math.floor(n).toLocaleString())}
    </animated.span>
  );
};

const StatsBar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-8">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">Our Achievements</h2>
      <div className="space-y-10 md:flex md:space-y-0 md:space-x-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-800 font-medium">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.maxValue.toLocaleString()}</p>
            </div>
            <ProgressBar value={stat.value} maxValue={stat.maxValue} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
