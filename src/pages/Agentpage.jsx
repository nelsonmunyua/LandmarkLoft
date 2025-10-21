// src/components/Agent.jsx
import React from "react";
import "./agent.css"; // Make sure this file exists and is in the same folder

function Agent({ agent }) {
  if (!agent) return <p>No agent data available.</p>;

  return (
    <div className="agent-card">
      <img src={agent.image} alt={agent.name} className="agent-image" />
      <div className="agent-details">
        <h2>{agent.name}</h2>
        <p className="agent-title">{agent.title}</p>
        <p className="agent-contact">
          📞 <a href={`tel:${agent.phone}`}>{agent.phone}</a>
          <br />
          ✉️ <a href={`mailto:${agent.email}`}>{agent.email}</a>
        </p>
        <div className="agent-socials">
          {agent.socials?.linkedin && (
            <a href={agent.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {agent.socials?.twitter && (
            <a href={agent.socials.twitter} target="_blank" rel="noreferrer">
              Twitter
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Agent;
