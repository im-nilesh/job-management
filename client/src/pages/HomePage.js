import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

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
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Header />
      <Hero />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="container flex-grow-1">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-muted">No jobs match your search.</p>
        ) : (
          filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
        )}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
