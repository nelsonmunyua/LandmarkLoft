import React from "react";
import "./propertylist.css";
import PropertyCard from "../propertcard/PropertyCard";


export default function PropertyList({ properties = [] }) {
  // Use state to store the array of fetched properties.
  
 
  return (
    <div className="property-list">
      {properties.length > 0 ? (properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      )) ): (
        <p>No properties found.</p>
      )}
    </div>
  );
}