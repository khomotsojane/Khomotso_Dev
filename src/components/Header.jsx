import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-lg shadow-md text-white py-4 px-6 flex justify-between items-center z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold cursor-pointer">
        <a href="/">My Portfolio</a>
      </h1>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li><a href="/#" className="text-lg hover:text-yellow-400 transition duration-300">Home</a></li>
        <li><a href="http://localhost:5173/#/aboutme" className="text-lg hover:text-yellow-400 transition duration-300">About</a></li>
        <li><a href="http://localhost:5173/#/projects" className="text-lg hover:text-yellow-400 transition duration-300">Projects</a></li>
        <li><a href="http://localhost:5173/#/skills" className="text-lg hover:text-yellow-400 transition duration-300">Skills</a></li>
      </ul>
    </motion.nav>
  );
};

export default Header;
