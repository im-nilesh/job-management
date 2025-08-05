const mongoose = require("mongoose");
require("dotenv").config();

const Job = require("./models/job");

const jobs = [
  {
    title: "Frontend Developer",
    company: "CodeCraft",
    location: "Bangalore",
    description: "Work with React to build dynamic UIs.",
  },
  {
    title: "Backend Developer",
    company: "TechSavvy",
    location: "Remote",
    description: "Node.js developer with MongoDB experience.",
  },
  {
    title: "Full Stack Engineer",
    company: "DevWorks",
    location: "Mumbai",
    description: "Build end-to-end features using MERN stack.",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Job.deleteMany({});
    await Job.insertMany(jobs);
    console.log("✅ Job data seeded!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
  });
