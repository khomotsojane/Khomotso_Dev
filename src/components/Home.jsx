import React from "react";
import Spline from "@splinetool/react-spline";
import d4 from "../assets/d4.jpg"
import d3 from "../assets/d3.jpg"
import d2 from "../assets/d2.jpg"
import { motion } from "framer-motion";
import Skills from "./Skills";
import AboutMe from "./Aboutme";
import Contact from "./Contact";
import Projects from "./Projects";
import Button from "./Button";
import Header from "./Header";

function Home() {
  const containerStyle = {
    height: "100vh",
    width: "100vw",
    
    color: "white",
    fontFamily: "'Lastica', Open Sans",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0 10%",
    textAlign: "left",
    position: "relative",
    overflowX: "hidden",
  };

  const videoBgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "-1",
  };

  const navbarStyle = {
    position: "absolute",
    top: "20px",
    left: "20px",
    display: "flex",
    gap: "15px",
    marginTop: "50px",
    paddingLeft: "10%",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "25px",
    padding: "5px 10px",
    transition: "all 0.3s ease",
  };

  const waveStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    background: "linear-gradient(50deg, #000000,rgb(48, 4, 4))",
    width: "100%",
    zIndex: "-1",
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  
  const secondPageStyle = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5% 10%",
    background: "linear-gradient(50deg, #000000,rgb(48, 4, 4))",
    position: "relative",
    overflowX: "hidden",
    color: "#fff",
  };

  const secondPageContentStyle = {
    position: "relative",
    zIndex: "1",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const videoBgStyle2 = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "-1",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  };

  const textRightStyle = {
    flex: 1,
    fontSize: "38px",
    fontWeight: "bold",
  };

  const imageLeftStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%", maxWidth: "600px", height: "auto"
  };

  const sectionStyle = {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(50deg, #000000, rgb(48, 4, 4))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    textAlign: "center",
    color: "#fff",
  };
  const sectionStyle2 = {
    height: "100vh",
    width: "100vw",
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



  const headerStyle = {
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "30px",
  };

  const cardContainer = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "1200px",
    width: "100%",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "20px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease-in-out",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  };

  const cardHover = {
    transform: "scale(1.05)",
  };

  return (
    <div>
    <Header/>
    
      <div style={containerStyle}>
        <video autoPlay loop muted playsInline style={videoBgStyle}>
          <source src="/16548256-hd_1080_1920_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div style={textContainerStyle}>
          <h4 style={{ fontSize: "100px", marginBottom: "5px" }}>
            KHOMOTSO <br /> SEKHAOLELO
          </h4>
          <p style={{ fontSize: "40px", marginTop: "0px" }}>
            Fullstack <br /> Web Developer
          </p>
         
     
        </div>
      </div>

   
      <div style={secondPageStyle}>
      
        <video autoPlay loop muted playsInline style={videoBgStyle2}>
          <source src="/16548256-hd_1080_1920_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={overlayStyle}></div> 

      
        <div style={secondPageContentStyle}>
        
          <div style={imageLeftStyle}>
          <Spline 
    scene="https://prod.spline.design/zuV4t6NqngFa1MK6/scene.splinecode" 
    style={{ width: "100%", height: "500px" }}
  />
          </div>

          <div style={textRightStyle}>
            Let’s turn your Website <br />
            into <span style={{ color: "#ffcc00" }}>3D Designs</span> <br />
            <span style={{ fontSize: "50px", color: "#ffffff" }}>WEB3 5.0</span>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
      <video autoPlay loop muted playsInline style={videoBgStyle}>
          <source src="/16548256-hd_1080_1920_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <h2 style={headerStyle}>My Services</h2>

      <div style={cardContainer}>
       
        <div style={{ ...cardStyle, ":hover": cardHover }}>
          <img
            src={d4}
            alt="Web Development"
            style={imageStyle}
          />
          <h3>Web Development</h3>
          <p>Building responsive and interactive websites using modern technologies.</p>
        </div>

        <div style={{ ...cardStyle, ":hover": cardHover }}>
          <img
            src={d3}
            alt="3D Web Design"
            style={imageStyle}
          />
          <h3>Mobile App Development</h3>
          <p>Building native and web technologies to create cross-platform apps that work on both iOS and Android devices.</p>
        </div>

       
        <div style={{ ...cardStyle, ":hover": cardHover }}>
          <img
            src={d2}
            alt="Web3 & Blockchain"
            style={imageStyle}
          />
          <h3>Support & Maintainance</h3>
          <p>Fixing bugs, ensuring functionality, and providing assistance to users.</p>
        </div>
      </div>
    </div>

    <Projects/>
    <AboutMe/>
    <Button />

    </div>
  );
}

export default Home;