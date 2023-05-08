import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import AddEmployeeIcon from "../icons/addIcon/addIcon";
import "./navbar.styles.scss";

// In the navbar.js component, we will create a navigation bar that will link us to the required components using the following code.
// Here, we display our Navbar
export default function Navbar() {
  return (
    <div className="navbar-container">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
      <NavLink className="nav-link nav-link-home" to="/">
        Polaris
      </NavLink>

      <NavLink className="nav-link" to="/create">
        <AddEmployeeIcon />
      </NavLink>
    </div>
  );
}
