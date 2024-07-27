"use client";
import React from "react";
import Image from "next/image";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

// const Founders = () => {
//   return (
//     <section className="bg-white py-20 text-[#C8A26B] gilda-display-regular">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold mb-4">Meet Our Founders</h2>
//         <p className="text-xl italic mb-20">"Success is best when it's shared."</p>
//         <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
//           {[{ image: "https://picsum.photos/id/237/200/300", name: "Founder 1" }, { image: "https://picsum.photos/id/238/200/300", name: "Founder 2" }, { image: "https://picsum.photos/id/239/200/300", name: "Founder 3" }].map((founder, index) => (
//             <div key={index} className="relative group w-60 h-80 flex-shrink-0">
//               <div className="absolute inset-0 bg-[#C8A26B] transform skew-y-3 group-hover:skew-y-0 transition-transform duration-300"></div>
//               <div className="relative z-10 flex flex-col justify-end items-end h-full p-4 bg-white shadow-lg">
//                 <Image src={founder.image} alt={founder.name} width={200} height={400} className="w-full h-full object-cover mb-2" />
//                 <h3 className="text-2xl font-bold mt-2">{founder.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const Founders = () => {
  const founders = [
    {
      image: "https://picsum.photos/id/238/200/300",
      name: "Founder 1",
      designation: "CEO",
      linkedin: "https://www.linkedin.com/in/founder1",
    },
    {
      image: "https://picsum.photos/id/240/200/300",
      name: "Founder 2",
      designation: "CTO",
      linkedin: "https://www.linkedin.com/in/founder2",
    },
    {
      image: "https://picsum.photos/id/239/200/300",
      name: "Founder 3",
      designation: "COO",
      linkedin: "https://www.linkedin.com/in/founder3",
    },
  ];

  return (
    <section className="bg-white py-20 text-[#C8A26B] gilda-display-regular">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Meet Our Founders</h2>
        <p className="text-xl italic mb-20">
        &quot; Success is best when it&apos;s shared.&quot;
        </p>
        <div className="flex flex-col gap-0 md:flex-row justify-center items-center mb-8 space-y-10 md:space-y-0 md:space-x-8">
          {founders.map((founder, index) => (
            <div key={index} className="relative group  w-[25rem] h-[28rem] flex-shrink-0 ">
              <div className="absolute -right-4  -top-8 left-10 -bottom-20 inset-0 border-2 opacity-50 border-gray-400 group-hover:border-[#C8A26B] group-hover:bg-[#F8F5F0] transition-all group-hover:opacity-100 rounded-xl p-4  duration-300"></div>
              <div className="relative  z-10 flex  justify-center -space-x-4 items-center h-full p-4">
                <Image
                  src={founder.image}
                  width={200}
                  height={400}
                  alt={founder.name}
                  className="w-full h-full object-cover  rounded-xl mb-2 hover:scale-100 transition-transform duration-300"
                />
                <h3 className="text-2xl relative left-4 text-nowrap bg-clip-text -rotate-90  opacity-75 from-[#C8A26B] to-white font-bold  antialiased  group-hover:opacity-100 group-hover:bg-[#C8A26B] transition-opacity duration-300">
                  {founder.designation}
                </h3>
                
              </div>
              <div className="flex justify-center items-start gap-2 z-20 ">
              <Link className="cursor-pointer" href="https://www.linkedin.com/in/">
              <FaLinkedin className="w-8 h-8 text-[#C8A26B] hover:text-[#0e76a8] transition-colors duration-300"/>
              </Link>
                
               
                <h3 className="text-2xl bg-clip-text text-nowrap text-transparent bg-gradient-to-b from-[#C8A26B] to-gray-200 font-bold   antialiased   transition-opacity duration-300">
                  {founder.name}
                </h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
