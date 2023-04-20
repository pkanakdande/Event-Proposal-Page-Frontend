import React from "react";
import "./VendorProp.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div className="venlogo">
        <b>LOGO</b>
      </div>
      <div className="name">
        <b>Vendor Name</b>
      </div>
      <div class="dropdown">
        <div className="imgven"></div>
        <div class="dropdown-content">
          <Link to="/">Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
