import React from "react";
import FAvideo from "../assets/16548256-hd_1080_1920_30fps.mp4"
import { FaLinkedin } from "react-icons/fa";

const videoBgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "-1",
  };

const Footer = () => {
  return (
    <footer className="relative h-[400px] text-white">
   
      <video autoPlay loop muted playsInline style={videoBgStyle}>
          <source src={FAvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

     
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto px-5 flex flex-col items-center justify-center h-full text-center">
        
        <h2 className="text-3xl font-bold">Khomotso Sekhaolelo</h2>
        <p className="text-lg text-gray-300 mt-2">Creating amazing digital experiences.</p>

   
        <div className="flex space-x-6 mt-4">
          <a href="#/" className="hover:text-red-400 transition">Home</a>
          <a href="#/aboutme" className="hover:text-red-400 transition">About</a>
          <a href="#/projects" className="hover:text-red-400 transition">Projects</a>
          <a href="#/skills" className="hover:text-red-400 transition">Skills</a>
        </div>

      
        <div className="flex space-x-5 mt-6">
          <a href="https://www.linkedin.com/in/khomotso-sekhaolelo-6697b715a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-700 transition" />
          </a>
        </div>

       
        <div className="text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
