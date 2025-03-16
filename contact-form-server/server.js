const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: "http://localhost:5173", 
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
}));

app.use(express.json());

app.post("/send-email", (req, res) => {
 
  res.status(200).json({ message: "Email sent successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`${PORT}`)
});
