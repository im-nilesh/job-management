const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    name: String,
    email: String,
    resumeUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
