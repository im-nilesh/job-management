import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

function HomePage() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Available Jobs</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by title or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default HomePage;
