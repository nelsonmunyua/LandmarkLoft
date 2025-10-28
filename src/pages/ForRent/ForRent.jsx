import React, { useEffect, useState } from "react";
import "./ForRent.css";
import PropertyCard from "../../components/propertcard/PropertyCard";
import { useNavigate } from "react-router-dom";


const ForRent = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/properties")
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
         <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default ForRent;
