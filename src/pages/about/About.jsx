import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ←
      </button>

      {/* Hero Section */}
      <header className="about-hero">
        <h1>About Urbanün Real Estate</h1>
        <p>
          Connecting people to their dream homes with transparency, trust, and
          technology.
        </p>
      </header>

      {/* Mission Section */}
      <section className="about-card">
        <h2>🎯 Our Mission</h2>
        <p>
          At <strong>Urbanün</strong>, our mission is to simplify the real
          estate process. We use modern digital tools to make it easier for you
          to buy, sell, or rent properties with confidence and clarity.
        </p>
      </section>

      {/* Vision Section */}
      <section className="about-card">
        <h2>🌍 Our Vision</h2>
        <p>
          We envision a connected real estate world where every property
          transaction is smooth, verified, and stress-free. Whether you’re a
          first-time buyer or an investor, we’re here to make your journey
          seamless.
        </p>
      </section>

      {/* Values Section */}
      <section className="about-card">
        <h2>💡 Our Values</h2>
        <ul>
          <li>Integrity and Transparency</li>
          <li>Customer-Centered Innovation</li>
          <li>Speed and Reliability</li>
          <li>Data-Driven Insights</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>🤝 Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Team member"
            />
            <h3>Nelson</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/women/46.jpg"
              alt="Team member"
            />
            <h3>Sumeya</h3>
            <p>Real Estate Expert</p>
          </div>
          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/men/47.jpg"
              alt="Team member"
            />
            <h3>Julius</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
