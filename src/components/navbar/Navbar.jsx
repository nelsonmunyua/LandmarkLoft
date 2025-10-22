// Navbar.jsx
// Works with React Router if you replace <a> with <Link> later.

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  // Toggle state for the mobile hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/*Left Section: Logo */}
      <div className="nav-logo">Urbanün</div>

      {/*Center Section: Links*/}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/forsale" onClick={() => setIsOpen(false)}>
            For Sale
          </Link>
        </li>
        <li>
          <Link to="/forrent" onClick={() => setIsOpen(false)}>
            For Rent
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/sell" onClick={() => setIsOpen(false)}>
            Sell
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
      </ul>

      {/*Center: Search Bar (desktop only)*/}
      <div className="nav-search">
        <input type="text" placeholder="Search by location or price..." />
      </div>

      {/*Right Section: User Profile*/}
      <div className="nav-user">
        <p>Hi, Jimmy!</p>
        <img
          src="https://via.placeholder.com/35"
          alt="user avatar"
          className="user-avatar"
        />
      </div>

      {/*Mobile Hamburger Menu */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
