"use client";
import { FaShippingFast, FaTags, FaUsers, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaShippingFast size={40} />,
    title: "Fast Shipping",
    description: "We ensure quick and safe delivery of your merchandise.",
  },
  {
    icon: <FaTags size={40} />,
    title: "Competitive Pricing",
    description: "We offer the best prices for high-quality products.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Customer Support",
    description: "Our support team is available 24/7 to assist you.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Market Analysis",
    description: "We provide detailed market insights to help your business grow.",
  },
];

const ServiceCard = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => (
  <motion.div
    className="bg-white border-2 hover:border-[#C8A26B] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center justify-center mb-4 text-[#C8A26B]">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-2 bellefair-regular text-center">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-500 text-center">
      {description}
    </p>
  </motion.div>
);

const Services = () => (
  <section className="py-16 bg-gradient-to-r from-white bellefair-regular">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl text-[#C8A26B] antialiased font-bold text-center mb-8 ">
        Our Services
      </h2>
      <p className="text-center mb-12 text-lg bellefair-regular italic">
      &quot; Indiana Buying House offers a range of services to meet all your needs.&quot;
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
