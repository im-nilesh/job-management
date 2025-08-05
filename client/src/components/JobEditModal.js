import React, { useEffect, useState } from "react";

function JobEditModal({ job, onSave }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (job) {
      setForm({
        title: job.title,
        company: job.company,
        location: job.location,
        description: job.description,
      });
    }
  }, [job]);

  const handleSave = () => {
    if (job) {
      onSave({ ...form, _id: job._id });
    }
  };

  return (
    <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content shadow">
          <div className="modal-header">
            <h5 className="modal-title">Edit Job</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            {["title", "company", "location", "description"].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label">{field}</label>
                <input
                  className="form-control"
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                />
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobEditModal;
