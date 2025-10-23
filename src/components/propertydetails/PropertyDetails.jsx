import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  BedDouble,
  Bath,
  Ruler,
  Heart,
  Share2,
  ArrowLeft,
} from "lucide-react";
import data from "/data/db.json";
import "./propertydetails.css";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = data.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="property-details-container">
        <p>Property not found.</p>
        <Link to="/" className="back-btn">
          ← Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="property-details-container">
      {/* Back button */}
      <Link to="/" className="back-btn">
        <ArrowLeft size={18} /> Back to Listings
      </Link>

      <div className="property-details-card">
        {/* IMAGE SECTION */}
        <div className="details-image-section">
          <img
            src={property.image}
            alt={property.title}
            className="details-main-image"
          />
          <span className={`property-badge ${property.type}`}>
            {property.type}
          </span>
          {property.project && (
            <span className="property-project">{property.project}</span>
          )}
        </div>

        {/* INFO SECTION */}
        <div className="details-info-section">
          <h1 className="details-title">{property.title}</h1>
          <p className="details-location">{property.location}</p>

          <div className="details-icons">
            <div>
              <BedDouble size={18} /> {property.bedrooms} Beds
            </div>
            <div>
              <Bath size={18} /> {property.bathrooms} Baths
            </div>
            <div>
              <Ruler size={18} /> {property.size_sqm} sqm
            </div>
          </div>

          <h2 className="details-price">
            KSh {property.price.toLocaleString()}
          </h2>

          <p className="details-description">{property.description}</p>

          <div className="details-actions">
            <button className="details-btn primary">
              <Heart size={16} /> Save
            </button>
            <button className="details-btn secondary">
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="map-section">
        <h3>Location Map</h3>
        <img
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
          alt="Map"
          className="map-image"
        />
      </div>
    </div>
  );
}
