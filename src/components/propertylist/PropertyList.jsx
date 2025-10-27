import React, {useEffect, useState } from "react";
import "./propertylist.css";
import PropertyCard from "../propertcard/PropertyCard";


export default function PropertyList() {
  // Use state to store the array of fetched properties.
  const [properties, setProperties] = useState([]);
 // Use effecthook is used to fetch the data from the json-server
  useEffect(() => {
    fetch("http://localhost:3000/properties")
    .then((res) => res.json())
    .then((data) => {
      setProperties(data);
    })
    .catch((error) => {
      console.error("Error fetching properties", error);
    });
  }, []); //Empty dependancies array ensures this runs on mount

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}