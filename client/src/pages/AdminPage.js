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
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">🛠️ Admin Job Management</h2>

      <div className="row">
        {/* Create Job Form */}
        <div className="col-lg-5 mb-5">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Create New Job</h5>
            </div>
            <div className="card-body">
              {["title", "company", "location", "description"].map((field) => (
                <div className="mb-3" key={field}>
                  <label className="form-label text-capitalize">{field}</label>
                  <input
                    className="form-control"
                    placeholder={`Enter ${field}`}
                    value={newJob[field]}
                    onChange={(e) =>
                      setNewJob({ ...newJob, [field]: e.target.value })
                    }
                  />
                </div>
              ))}
              <button className="btn btn-success w-100" onClick={handleCreate}>
                ➕ Add Job
              </button>
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="col-lg-7">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-semibold">All Posted Jobs</h5>
            <span className="badge bg-secondary">{jobs.length} jobs</span>
          </div>

          {jobs.length === 0 ? (
            <p className="text-muted">No jobs added yet.</p>
          ) : (
            jobs.map((job) => (
              <div key={job._id} className="card mb-3 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title mb-1">{job.title}</h5>
                  <h6 className="text-muted mb-2">
                    {job.company} · {job.location}
                  </h6>
                  <p className="card-text">{job.description}</p>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDelete(job._id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
