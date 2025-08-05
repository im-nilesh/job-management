import React from "react";

function JobList({ jobs, onEdit, onDelete }) {
  return (
    <>
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
              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-outline-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={() => onEdit(job)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onDelete(job._id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default JobList;
