"use client";
import { FaShippingFast, FaTags, FaUsers, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaShippingFast size={40} />,
    title: "Comprehensive Supplier Network",
    description: "Access top global suppliers for quality products",
  },
  {
    icon: <FaTags size={40} />,
    title: "Tailored Product Development",
    description: "Create custom products to fit your needs",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Rigorous Quality Assurance",
    description: "Ensure high quality with strict controls.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Strategic Logistics Solutions",
    description: "Optimize shipping with effective logistics",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Strategic Logistics Solutions",
    description: "Optimize shipping with effective logistics",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Strategic Logistics Solutions",
    description: "Optimize shipping with effective logistics",
  },
];

const ServiceCard = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => (
  <motion.div
    className="bg-white border-2 hover:border-[#C8A26B] h-60 md:h-56 flex flex-col justify-center  rounded-lg  hover:bg-[#F8F5F0] transition-all duration-300 transform hover:-translate-y-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center justify-center mb-4 text-[#C8A26B]">
      {icon}
    </div>
    <h3 className="text-xl lg:text-2xl  mb-2 bellefair-regular text-center">
      {title}
    </h3>
    <p className="text-gray-700 inter-font text-sm dark:text-gray-500 text-center">
      {description}
    </p>
  </motion.div>
);

const Services = () => (
  <section className="py-16 bg-gradient-to-r from-white bellefair-regular">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl text-[#C8A26B] antialiased  text-center mb-8 ">
        Our Services
      </h2>
      <p className="text-center mb-12 inter-font-italic text-lg font-medium  italic">
      &quot; Indiana Merchandising, a Buying House which offers a wide range of services to meet all your needs.&quot;
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
