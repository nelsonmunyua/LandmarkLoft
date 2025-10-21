import React from "react";
import Navbar from "../components/navbar/Navbar";
import Filter from "../components/filter/filter";
import PropertyDetails from "../components/propertydetails/PropertyDetails";
//import "./homepage.css";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <div style={{ display: "flex" }} className="main-content">
        <aside className="sidebar">
          <Filter />
          </aside>

        <main className="properties-area">
          <PropertyDetails />
          </main>
      </div>
    </div>
  );
}
