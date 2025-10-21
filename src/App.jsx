// src/App.jsx
import React from "react";
import Agent from "./components/propertyagent/Agent.jsx"; // Adjust the path if your Agent.jsx file is elsewhere

export default App;

const agentData = {
  name: "Sarah Johnson",
  title: "Senior Real Estate Agent",
  phone: "+1 (555) 123-4567",
  email: "sarah.johnson@example.com",
  image: "https://via.placeholder.com/300x200", // You can use a real image URL here
  socials: {
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjrealty",
  },
};

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Meet Our Agent</h1>
      <Agent agent={agentData} />
    </div>
  );
}
