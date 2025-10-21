import React from "react";
import "./PropertyCard.css";
export default function PropertyCard() {
  return (
    <div className="property-card">
      {" "}
      <img
        src="https://sailgloberesourceltd.com/wp-content/uploads/2022/09/IMG-20220915-WA0004.jpg"
        alt="property"
        className="property-image"
      />{" "}
      <div className="property-info">
        {" "}
        <div>Title:</div> <h3>Olive Properties</h3> <div>Location:</div>{" "}
        <p className="property-location">Nairobi</p> <div>Price:</div>{" "}
        <p className="property-price">$1,000,000</p> <div>Status:</div>{" "}
        <p className="property-status">For Sale</p> <div>Type:</div>{" "}
        <p className="property-type">Villa</p>{" "}
        <div className="property-details">
          {" "}
          <span>Bedrooms: 5</span> <span>Bathrooms: 3</span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
