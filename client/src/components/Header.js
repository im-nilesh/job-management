import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          JobBoard
        </Link>
        <div className="d-flex">
          <Link className="btn btn-outline-light btn-sm" to="/admin">
            Admin Panel
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
