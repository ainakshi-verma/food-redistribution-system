const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    // IMPORTANT: load routes AFTER connection
    const authRoutes = require("./routes/auth");
    app.use("/api", authRoutes);

    app.get("/", (req, res) => {
      res.send("Backend is running...");
    });

    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.log("MongoDB connection failed:", err);
  }
}

startServer();