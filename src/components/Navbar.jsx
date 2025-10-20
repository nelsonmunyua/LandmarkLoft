// Navbar.jsx
// Works with React Router if you replace <a> with <Link> later.

import React, { useState } from "react";
import "./Navbar.css";

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
