"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#C8A26B] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 md:w-1/3 text-center md:text-left">
            <Image className="" src="/logo.svg" width={150} height={100} alt="Indiana Merchandise" />
            <h2 className="text-3xl font-bold mb-4">Indiana Merchandise</h2>
            <p className="text-lg">
              Providing the best quality products with exceptional service.
            </p>
          </div>
          <div className="mb-8 md:mb-0 md:w-1/3 text-center">
            <h3 className="text-2xl font-bold mb-4 ">Contact Us</h3>
            <p>
              <strong>Email:</strong> info@indianabuyinghouse.com
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Address:</strong> 1234 Street Name, City, State, Country
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4 ">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="https://facebook.com" className="text-white hover:text-gray-200 transition-colors duration-300">
                <FaFacebookF size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-white hover:text-gray-200 transition-colors duration-300">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-gray-200 transition-colors duration-300">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com" className="text-white hover:text-gray-200 transition-colors duration-300">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-200 pt-4">
          <p className="text-sm">&copy; 2024 Indiana Merchandise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
