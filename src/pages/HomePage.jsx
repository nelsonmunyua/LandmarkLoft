import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Filter from "../components/filter/Filter";
import PropertyList from "../components/propertylist/PropertyList";
import "./homepage.css";

export default function HomePage() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Fetch all properties on mount
  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data); // initially show all properties
      })
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  // Handle search results from Navbar
  const handleSearch = (results) => {
    const newResults = results.length ? results : properties;
    setSearchResults(newResults);
    setFilteredProperties(newResults);
  };

  // Handle filters from Filter component
  const handleFilterChange = (filters) => {
    let results = [...(searchResults.length ? searchResults : properties)];

    // Property Type Filter
    if (filters.propertyType.length > 0) {
      results = results.filter((p) =>
        filters.propertyType.includes(p.type)
      );
    }

    // Property Category Filter
    if (filters.propertyCategory.length > 0) {
      results = results.filter((p) =>
        filters.propertyCategory.includes(p.category)
      );
    }

    // Price Range (radio options)
    if (filters.priceRange) {
      switch (filters.priceRange) {
        case "Under ksh 200000":
          results = results.filter((p) => p.price < 200000);
          break;
        case "Ksh 200000 - Ksh 500000":
          results = results.filter(
            (p) => p.price >= 200000 && p.price <= 500000
          );
          break;
        case "Ksh 500000 - ksh 1M":
          results = results.filter(
            (p) => p.price > 500000 && p.price <= 1000000
          );
          break;
        case "> Ksh 1M":
          results = results.filter((p) => p.price > 1000000);
          break;
        default:
          break;
      }
    }

    // Custom Price Range (slider)
    results = results.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    // If no filters selected, show all
    if (
      filters.propertyType.length === 0 &&
      filters.propertyCategory.length === 0 &&
      !filters.priceRange &&
      filters.minPrice === 400000 &&
      filters.maxPrice === 800000
    ) {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(results);
    }
  };

  return (
    <div className="homepage-container">
      <Navbar properties={properties} onSearch={handleSearch} />

      <div className="main-content" style={{ display: "flex" }}>
        {/* <aside className="sidebar">
          <Filter onFilterChange={handleFilterChange} />
        </aside> */}

        <main className="properties-area">
          {filteredProperties.length > 0 ? (
            <PropertyList properties={filteredProperties} />
          ) : (
            <p style={{ padding: "20px" }}>No properties match your filters.</p>
          )}
        </main>
      </div>
    </div>
  );
}
