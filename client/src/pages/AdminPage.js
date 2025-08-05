import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPage() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:5000/jobs", newJob);
      setNewJob({ title: "", company: "", location: "", description: "" });
      fetchJobs();
    } catch (err) {
      console.error("Error creating job:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>

      <div className="mb-4">
        <h4>Add New Job</h4>
        {["title", "company", "location", "description"].map((field) => (
          <input
            key={field}
            className="form-control mb-2"
            placeholder={field}
            value={newJob[field]}
            onChange={(e) => setNewJob({ ...newJob, [field]: e.target.value })}
          />
        ))}
        <button className="btn btn-success" onClick={handleCreate}>
          Add Job
        </button>
      </div>

      <h4>Existing Jobs</h4>
      {jobs.map((job) => (
        <div key={job._id} className="card mb-3">
          <div className="card-body">
            <h5>{job.title}</h5>
            <p>
              {job.company} – {job.location}
            </p>
            <p>{job.description}</p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(job._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;
