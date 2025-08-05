import React from "react";

function JobForm({ job, setJob, handleSubmit }) {
  return (
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
              value={job[field]}
              onChange={(e) => setJob({ ...job, [field]: e.target.value })}
            />
          </div>
        ))}
        <button className="btn btn-success w-100" onClick={handleSubmit}>
          ➕ Add Job
        </button>
      </div>
    </div>
  );
}

export default JobForm;
