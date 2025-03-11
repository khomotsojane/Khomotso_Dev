import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce App",
    description: "A full-stack online marketing platform. Iknowaguy",
    link: "https://www.iknowaguy.co.za/",
  },
  {
    title: "Talent App",
    description: "A fullstack web application for women developers, GirlCode",
    link: "https://www.girlcode.co.za/",
  },
  {
    title: "Blockchain App",
    description: "A Web3 application.Unlocking the Power of Blockchain, NFTs, and DeFi",
    link: "https://www.w3ve.com",
  },
  {
    title: "E-Commerce Loan App",
    description: "Easy Online Loan Application with minimal documentation.",
    link: "https://tfs-loan-appication.vercel.app/",
  },
  {
    title: "Github Portfolio",
    description: "A personal projects showcasing my work.",
    link: "https://github.com/khomotsojane/",
  },
];

const Projects = () => {
  const pageStyle = {
    height: "100%",
    width: "100%",
    background: "linear-gradient(50deg, #000000, rgb(48, 4, 4))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "5%",
    color: "#fff",
  };

  const blobContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    maxWidth: "1200px",
    width: "100%",
  };

  return (
    <div>
      <div style={pageStyle}>
      <h2 style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "30px" }}>
        My Projects
      </h2>

      <div style={blobContainer}>
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            whileHover={{ scale: 1.1 }}
            style={{
              width: "250px",
              height: "250px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "20px",
              boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <div>
              <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>{project.title}</h3>
              <p style={{ fontSize: "16px" }}>{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
     
    </div>
   
    </div>
  );
};

export default Projects;
