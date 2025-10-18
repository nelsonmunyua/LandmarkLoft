import React from 'react'
import"./PropertCard.css"

export default function PropertyCard({ property }) {
    const { image, title, location, price, bedrooms, bathrooms } = property;


  return (
      <div className="propety-card">
          <img src={image} alt={title} className="property-image" />
          
          <div className="property-info">
              <h3>{title}</h3>
              <p className="property-location">{location}</p>
              <p className="property-price">${price.toLocaleString()}</p>

              <div className="property-details">
                  <span>{bedrooms}</span>
                  <span>{bathrooms}</span>
              </div>
          </div>
    </div>
  )
}
