import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title mb-1">{job.title}</h5>
        <h6 className="text-muted mb-2">
          {job.company} · {job.location}
        </h6>
        <p className="card-text">{job.description}</p>
        <Link to={`/apply/${job._id}`} className="btn btn-primary btn-sm">
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
