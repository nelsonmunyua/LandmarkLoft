import React, { useEffect, useState } from "react";
import "./ForSale.css";
import { useNavigate } from "react-router-dom";

const ForSale = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        const sales = data.filter((item) => item.type === "sale");
        setProperties(sales);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="forsale-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1 className="forsale-title">🏠 Properties for Sale</h1>

      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={
                property.image
                  ? property.image
                  : "https://via.placeholder.com/400x250?text=No+Image"
              }
              alt={property.title}
              className="property-image"
            />
            <div className="property-info">
              <h2>{property.title}</h2>
              <p className="price">KSh {property.price.toLocaleString()}</p>
              <p className="location">{property.location}</p>
              <p className="desc">{property.description}</p>
              <div className="details">
                <span>🛏 {property.bedrooms} Beds</span>
                <span>🛁 {property.bathrooms} Baths</span>
                <span>📏 {property.size_sqm} sqm</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForSale;
