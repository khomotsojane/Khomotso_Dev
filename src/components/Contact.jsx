import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const apiUrl = process.env.NODE_ENV === "production"
      ? "https://your-backend-url.vercel.app/send-email" 
      : "http://localhost:5000/send-email"; 

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(data.message);
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div>
    <Header/>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.formContainer}
        >
          <h2 style={styles.title}>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              style={styles.textarea}
            ></textarea>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
          {status && <p style={styles.status}>{status}</p>}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(50deg, #000000, rgb(48, 4, 4))",
    color: "white",
    textAlign: "center",
    padding: "5%",
  },
  formContainer: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
    width: "90%",
    maxWidth: "400px",
    backdropFilter: "blur(10px)",
  },
  title: {
    fontSize: "28px",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "5px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "5px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    background: "linear-gradient(50deg, #ff0000, #770000)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
  status: {
    color: "#FFD700",
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default Contact;
