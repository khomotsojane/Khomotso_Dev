import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import khomotso from "../assets/Khomotso1231.png";

function AboutMe() {
  return (
    <div>
      <div style={styles.aboutContainer}>
      
      <div style={styles.bgContainer}>
        <img src={khomotso} alt="Background" style={styles.bgImage} />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.title}
        >
          About Khomotso Sekhaolelo
        </motion.h1>
      </div>

    
      <div style={styles.textContainer}>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={styles.aboutText}
        >
          I'm a passionate Fullstack Web Developer dedicated to crafting 
          beautiful, high-performance websites and applications. With expertise 
          in modern technologies, 3D web design, and Web3 innovations, I bring 
          ideas to life with creativity and functionality.
        </motion.p>
      </div>
      
    </div>
    <Footer/>
    </div>
    
  );
}


const styles = {
  aboutContainer: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(50deg, #000000, rgb(48, 4, 4))",
    position: "relative",
    textAlign: "center",
    color: "#fff",
    padding: "5%",
  },
  bgContainer: {
    position: "relative",
    width: "100%",
    maxHeight: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    maxWidth: "800px",
    height: "auto",
    opacity: "0.3",
  },
  title: {
    position: "absolute",
    fontSize: "50px",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
  },
  textContainer: {
    maxWidth: "800px",
    marginTop: "-30px",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
  },
  aboutText: {
    fontSize: "22px",
    lineHeight: "1.6",
  },
};

export default AboutMe;
