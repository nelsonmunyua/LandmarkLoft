import React, { useState, useEffect } from "react";
import './searchbar.css';


export default function SearchBar({ properties = [], onSearch }) {
  const [query, setSearchQuery] = useState("");
  
   // Filter properties based on  search query
  useEffect(() => {
    const filtered =
      query.trim() === ""
        ? properties
        : properties.filter(
            (item) =>
              item.location.toLowerCase().includes(query.toLowerCase()) ||
              item.type.toLowerCase().includes(query.toLowerCase()) ||
              item.title?.toLowerCase().includes(query.toLowerCase())
          );

    onSearch(filtered);
  }, [query, properties]);
  
  return (
    <div>
        <input 
        type="text"
        placeholder="Search property by name, location, or type ..."
        value={query}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
         />
    </div>
    
  );
}
