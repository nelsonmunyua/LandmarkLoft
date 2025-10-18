// Navbar.jsx
// A clean, responsive, and modern navigation bar component.
// Includes logo, navigation links, search bar, and user profile avatar.

import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  // State to toggle mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/*Left Section: Logo */}
      <div className="navbar-logo">
        <h2>Urbanün</h2>
      </div>

      {/*Center Section: Nav Links (hidden on mobile) */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#">For Sale</a>
        </li>
        <li>
          <a href="#">For Rent</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      {/*Center Search Bar (desktop only) */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search by location, price, or type..."
        />
      </div>

      {/*Right Section: User Info */}
      <div className="navbar-user">
        <p>Hi, Welcome User !</p>
        <img
          src="https://via.placeholder.com/35"
          alt="User avatar"
          className="user-avatar"
        />
      </div>

      {/*Hamburger Icon (mobile only)*/}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
