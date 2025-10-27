import React, { useEffect, useState } from "react";
import PropertyCard from "../../components/propertcard/PropertyCard";
import "./ForSale.css";
import { useNavigate } from "react-router-dom";

const ForSale = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/properties")
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
          
          <PropertyCard key={property.id} property={property}/>

        ))}
      </div>
    </div>
  );
};

export default ForSale;
