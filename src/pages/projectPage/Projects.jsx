import React, { useEffect, useState } from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === "project");
        setProjects(filtered);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="projects-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1 className="projects-title">🏗️ Development Projects</h1>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={
                project.image ||
                "https://via.placeholder.com/400x250?text=No+Image"
              }
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p className="location">{project.location}</p>
              <p className="desc">{project.description}</p>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
