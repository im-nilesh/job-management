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
      alert("Failed to submit application");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">📄 Apply for this Job</h2>

      {submitted ? (
        <div className="alert alert-success text-center">
          ✅ Application submitted successfully!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="card p-4 shadow-sm col-lg-6 mx-auto"
        >
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              value={form.name}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Resume URL</label>
            <input
              type="url"
              className="form-control"
              name="resumeUrl"
              onChange={handleChange}
              value={form.resumeUrl}
              required
            />
          </div>

          <button className="btn btn-success w-100" type="submit">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}

export default ApplyPage;
