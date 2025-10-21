import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <header className="about-hero">
        <h1>About Our Real Estate Platform</h1>
        <p>
          We make it easier for you to find, buy, and sell properties with
          confidence and transparency.
        </p>
      </header>

      {/* Mission Section */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify the real estate process by providing a
          modern, user-friendly, and transparent platform for property listings.
          Whether you’re looking to buy, sell, or rent, our platform connects
          you with the right people at the right time.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Easy property listing and management tools</li>
          <li>Smart filters to find properties by price, size, and location</li>
          <li>Secure and verified listings</li>
          <li>Fast and responsive customer support</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="about-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team is made up of passionate developers, designers, and real
          estate experts working together to bring you the best property
          experience possible.
        </p>
      </section>
    </div>
  );
}

export default About;
