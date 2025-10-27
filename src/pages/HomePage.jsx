import React, { useState, useEffect} from "react";
import Navbar from "../components/navbar/Navbar";
import Filter from "../components/filter/filter";
import PropertyList from "../components/propertylist/PropertyList";
// import PropertyDetails from "../components/propertydetails/PropertyDetails";
import "./homepage.css";


export default function HomePage() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Fetch all properties on mount
  useEffect(() => {
    fetch("http://localhost:3000/properties")
    .then((res) => res.json())
    .then((data) => {
      setProperties(data);
      setFilteredProperties(data); // initially show all 
    })
    .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  // Function to handle search results from searchBar
  const handleSearch = (results) => {
    setFilteredProperties(results.length ? results : properties);
  }
  return (
    <div className="homepage-container">
      <Navbar properties={properties} onSearch={handleSearch}/>
      <div style={{ display: "flex" }} className="main-content">
        <aside className="sidebar">
          <Filter />
          </aside>

        <main className="properties-area">
          <PropertyList properties={filteredProperties}/>
          </main>
      </div>
    </div>
  );
}
