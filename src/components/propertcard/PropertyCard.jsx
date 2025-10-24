import React from "react";
import "./propertycard.css";
import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
   const {
    id,
    image,
    title,
    type,
    location,
    price,
    bedrooms,
    bathrooms,
    size_sqm,
    project,
    description
  } = property;

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt={title} />
        <span className={`property-badge ${type}`}>
          {type}
        </span>
        {property.project && (
          <span className="property-project">{project}</span>
        )}
      </div>

      <div className="property-content">
        <h3 className="property-title">{title}</h3>
        <p className="property-location">{location}</p>

        <div className="property-details">
          <span>🛏 {bedrooms} Beds</span>
          <span>🛁 {bathrooms} Baths</span>
          <span>📏 {size_sqm} sqm</span>
        </div>

        <p className="property-price">KSh {price.toLocaleString()}</p>

        <p className="property-description">{description}</p>

        <div className="actions">
          <Link to={`property/${id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
// good job  guys
