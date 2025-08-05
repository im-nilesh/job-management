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
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">💼 Explore Job Listings</h2>

      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredJobs.length === 0 ? (
        <p className="text-muted text-center">No jobs match your search.</p>
      ) : (
        filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
      )}
    </div>
  );
}

export default HomePage;
