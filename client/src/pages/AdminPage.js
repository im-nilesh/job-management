import React, { useEffect, useState } from "react";
import axios from "axios";

import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import JobEditModal from "../components/JobEditModal";

function AdminPage() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await axios.get("http://localhost:5000/jobs");
    setJobs(res.data);
  };

  const handleCreate = async () => {
    await axios.post("http://localhost:5000/jobs", newJob);
    setNewJob({ title: "", company: "", location: "", description: "" });
    fetchJobs();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/jobs/${id}`);
    fetchJobs();
  };

  const handleEditSave = async () => {
    await axios.put(`http://localhost:5000/jobs/${editingJob._id}`, editingJob);
    setEditingJob(null);
    fetchJobs();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">🛠️ Admin Job Management</h2>

      <div className="row">
        <div className="col-lg-5 mb-5">
          <JobForm
            job={newJob}
            setJob={setNewJob}
            handleSubmit={handleCreate}
          />
        </div>
        <div className="col-lg-7">
          <JobList jobs={jobs} onEdit={setEditingJob} onDelete={handleDelete} />
        </div>
      </div>

      <JobEditModal
        job={editingJob}
        setJob={setEditingJob}
        onSave={handleEditSave}
      />
    </div>
  );
}

export default AdminPage;
