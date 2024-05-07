import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Static/logo512.png";
import "./Navbar.css";

const Navbar = () => {
  // Get the current location to set the active class on corresponding navbar link
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} width={"75px"} alt="React Logo" />
        </div>
        <div className="toolName">React</div>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === "/home" ? "active" : ""}>
          <Link to="/home">Home</Link>
        </li>
        <li className={location.pathname === "/intrafleet" ? "active" : ""}>
          <Link to="/intrafleet">Intra-fleet</Link>
        </li>
        <li className={location.pathname === "/interfleet" ? "active" : ""}>
          <Link to="/interfleet">Inter-fleet</Link>
        </li>
        <li className={location.pathname === "/performance" ? "active" : ""}>
          <Link to="/performance">Vehicle Performance</Link>
        </li>
        <li
          className={location.pathname === "/electrification" ? "active" : ""}
        >
          <Link to="/electrification">Electrification</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
