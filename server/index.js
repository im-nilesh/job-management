const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/jobs", jobRoutes);
app.use("/", applicationRoutes); // handles /apply/:jobId

// Test route
app.get("/", (req, res) => {
  res.send("Job Board API is running.");
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
