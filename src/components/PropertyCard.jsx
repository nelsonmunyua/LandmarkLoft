import React from 'react'
import"./PropertyCard.css"

export default function PropertyCard() {
   

  return (
    <div className="property-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlu6DGo9rD_5Ypmuctli8uge_VwDRVpJvC1g&s"
        alt="property image"
        className="property-image"
      />

      <div className="property-info">
        <h3>Olive Properies</h3>
        <p className="property-location">Nairobi</p>
        <p className="property-price">$70,000</p>

        <div className="property-details">
          <span>4 bedrooms</span>
          <div></div>
          <span>3 bathrooms </span>
        </div>
      </div>
    </div>
  );
}
