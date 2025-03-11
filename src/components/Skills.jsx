import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";


const skills = [
  { name: "HTML5", logo: "https://cdn-icons-png.flaticon.com/512/919/919827.png" },
  { name: "CSS3", logo: "https://cdn-icons-png.flaticon.com/512/919/919826.png" },
  { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/919/919828.png" },
  { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { name: "React.js", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "Vue.js", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111374.png" },
  { name: "React Native", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "Firebase", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968945.png" },
  { name: "REST APIs", logo: "https://cdn-icons-png.flaticon.com/512/2693/2693820.png" },
  { name: "UI/UX", logo: "https://cdn-icons-png.flaticon.com/512/2965/2965301.png" },
  { name: "Docker", logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
  { name: "Kubernetes", logo: "https://cdn-icons-png.flaticon.com/512/919/919849.png" },
  { name: "Framer", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
  { name: "Figma", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
  { name: "PHP", logo: "https://cdn-icons-png.flaticon.com/512/919/919830.png" },
  { name: "SQL", logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png" },
  
 
  
];

const Skills = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h2 className="text-5xl font-bold mb-10 text-blue-400">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 rounded-full shadow-lg p-5 flex flex-col items-center justify-center w-32 h-32"
          >
            <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
            <p className="text-center font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Skills;
