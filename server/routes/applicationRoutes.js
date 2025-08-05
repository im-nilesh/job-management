const express = require("express");
const Application = require("../models/application");
const Job = require("../models/job");
const router = express.Router();

// POST /apply/:jobId - submit application
router.post("/apply/:jobId", async (req, res) => {
  try {
    const { jobId } = req.params;
    const { name, email, resumeUrl } = req.body;

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ error: "Job not found" });

    const newApplication = new Application({
      jobId,
      name,
      email,
      resumeUrl,
    });

    const saved = await newApplication.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

module.exports = router;
