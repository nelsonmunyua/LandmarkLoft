import React from "react";
import "./propertycard.css";
import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <span className={`property-badge ${property.type}`}>
          {property.type}
        </span>
        {property.project && (
          <span className="property-project">{property.project}</span>
        )}
      </div>

      <div className="property-content">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">{property.location}</p>

        <div className="property-details">
          <span>🛏 {property.bedrooms} Beds</span>
          <span>🛁 {property.bathrooms} Baths</span>
          <span>📏 {property.size_sqm} sqm</span>
        </div>

        <p className="property-price">
          KSh {property.price.toLocaleString()}
        </p>

        <p className="property-description">
          {property.description}
        </p>

         <div className="actions">
          <Link to="/propertydetails" className="view-details-btn">
            View Details
          </Link>
      </div>
    </div>
    </div>
  );
}
