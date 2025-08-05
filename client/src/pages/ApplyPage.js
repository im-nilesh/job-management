import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ApplyPage() {
  const { jobId } = useParams();
  const [form, setForm] = useState({ name: "", email: "", resumeUrl: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/apply/${jobId}`, form);
      setSubmitted(true);
    } catch (err) {
      alert("Error submitting application");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Apply for Job</h2>
      {submitted ? (
        <p className="alert alert-success">
          Application submitted successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name:</label>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Resume URL:</label>
            <input
              className="form-control"
              name="resumeUrl"
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ApplyPage;
