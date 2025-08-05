const express = require("express");
const Job = require("../models/job");
const router = express.Router();

// GET /jobs - fetch all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// POST /jobs - create new job
router.post("/", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const saved = await newJob.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Failed to create job" });
  }
});

module.exports = router;
