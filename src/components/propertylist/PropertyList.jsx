import React from "react";
import "./propertylist.css";
import PropertyCard from "../propertcard/PropertyCard";
import properties from "/data/db.json";

export default function PropertyList() {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}