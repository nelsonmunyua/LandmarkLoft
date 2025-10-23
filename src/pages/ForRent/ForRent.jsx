import React, { useEffect, useState } from "react";
import "./ForRent.css";
import { useNavigate } from "react-router-dom";


const ForRent = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        const rentProps = data.filter((item) => item.type === "rent");
        setProperties(rentProps);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="forrent-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1 className="forrent-title">🏘️ Properties for Rent</h1>

      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={
                property.image ||
                "https://via.placeholder.com/400x250?text=No+Image"
              }
              alt={property.title}
              className="property-image"
            />
            <div className="property-info">
              <h2>{property.title}</h2>
              <p className="price">
                KSh {property.price.toLocaleString()} / month
              </p>
              <p className="location">{property.location}</p>
              <p className="desc">{property.description}</p>
              <div className="details">
                <span>🛏 {property.bedrooms} Beds</span>
                <span>🛁 {property.bathrooms} Baths</span>
              </div>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForRent;
