import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Assuming React Router is used
import Agent from "./Agent";
import "./AgentPage.css"; // Optional CSS for styling the page

function AgentPage() {
  const { agentId } = useParams(); // Example: /agents/:agentId
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulated fetch function (replace with your real API)
    async function fetchAgent() {
      try {
        setLoading(true);
        // Replace the below URL with your actual data source/API
        const response = await fetch(`/api/agents/${agentId}`);
        if (!response.ok) throw new Error("Agent not found");
        const data = await response.json();
        setAgent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAgent();
  }, [agentId]);

  if (loading) return <p>Loading agent data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="agent-page">
      <h1>Agent Profile</h1>
      <Agent agent={agent} />
    </div>
  );
}

export default AgentPage;
