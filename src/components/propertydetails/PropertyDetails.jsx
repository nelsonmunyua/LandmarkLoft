import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BedDouble, Bath, Ruler, Heart, Share2, ArrowLeft } from "lucide-react";

import "./propertydetails.css";

export default function PropertyDetails() {
  // useState below fetches the property details
  const [propertyDetails, setPropertyDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/properties`)
      .then((res) => res.json())
      .then((data) => {
        const property = data.find((p) => p.id === parseInt(id));
        setPropertyDetails(property);
      })
      .catch((error) => {
        console.error("Error fetching Property Details", error);
      });
  }, [id]); // the id dependancy makes the this useEffect run whenever the id changes

  if (!PropertyDetails) {
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
            src={propertyDetails?.image}
            alt={propertyDetails?.title}
            className="details-main-image"
          />
          <span className={`property-badge ${propertyDetails?.type}`}>
            {propertyDetails?.type}
          </span>
          {propertyDetails?.project && (
            <span className="property-project">{propertyDetails?.project}</span>
          )}
        </div>

        {/* INFO SECTION */}
        <div className="details-info-section">
          <h1 className="details-title">{propertyDetails?.title}</h1>
          <p className="details-location">{propertyDetails?.location}</p>

          <div className="details-icons">
            <div>
              <BedDouble size={18} /> {propertyDetails?.bedrooms} Beds
            </div>
            <div>
              <Bath size={18} /> {propertyDetails?.bathrooms} Baths
            </div>
            <div>
              <Ruler size={18} /> {propertyDetails?.size_sqm} sqm
            </div>
          </div>

          <h2 className="details-price">
            KSh {propertyDetails?.price.toLocaleString()}
          </h2>

          <p className="details-description">{propertyDetails?.description}</p>

          {/* <div className="details-actions">
            <button className="details-btn primary">
              <Heart size={16} /> Save
            </button>
            <button className="details-btn secondary">
              <Share2 size={16} /> Share
            </button>
          </div> */}
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
