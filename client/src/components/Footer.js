import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-3">
      <div className="container text-center">
        <small>
          &copy; {new Date().getFullYear()} JobBoard | All Rights Reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
