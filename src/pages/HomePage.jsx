import React from "react";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";
import "./homepage.css";

export default function HomePage() {
  return (
    <div className="homepage-container">
      {/* <Navbar /> */}
      <div className="main-content">
        <aside className="sidebar">{/* <Filter /> */}</aside>

        <main className="properties-area">{/* <PropertyList /> */}</main>
      </div>
    </div>
  );
}
