import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control form-control-lg shadow-sm"
            placeholder="🔍 Search by title or location..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
