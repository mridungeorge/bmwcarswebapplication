import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* Other navigation links */}
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default NavBar;

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link> {/* Add Login link */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
