import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Button = () => {
  return (
    <a
      href="#/contact" 
      className="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition duration-300 flex items-center space-x-2"
    >
      <FaEnvelope className="text-xl" />
      <span className="hidden md:inline text-sm font-semibold">Contact Us</span>
    </a>
  );
};

export default Button;
