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
     <h1 className="text-2xl font-bold text-white">
        <a href="/">My Portfolio</a>
      </h1>

      <ul className="flex space-x-6 text-lg text-gray-300">
        <li>
          <a href="#/" className="hover:text-blue-400 transition">Home</a>
        </li>
        <li>
          <a href="#/aboutme" className="hover:text-blue-400 transition">About</a>
        </li>
        <li>
          <a href="#/projects" className="hover:text-blue-400 transition">Projects</a>
        </li>
        <li>
          <a href="#/skills" className="hover:text-blue-400 transition">Skills</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1iJJgkeJ7cGxXjmTm7HIo7a877kXb7S3P/view?usp=sharing/" className="hover:text-blue-400 transition">Resume</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Header;
