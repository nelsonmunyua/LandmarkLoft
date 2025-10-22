import React from "react";
import "./Sell.css";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const navigate = useNavigate();

  return (
    <div className="sell-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1 className="sell-title">💼 Sell Your Property</h1>
      <p className="sell-intro">
        Want to sell your house or land? Fill in your property details and we’ll
        connect you with thousands of potential buyers.
      </p>

      <form className="sell-form">
        <label>Property Title</label>
        <input type="text" placeholder="Enter property title" />

        <label>Location</label>
        <input type="text" placeholder="Enter property location" />

        <label>Price (KSh)</label>
        <input type="number" placeholder="Enter asking price" />

        <label>Image URL</label>
        <input type="url" placeholder="Paste image link" />

        <label>Description</label>
        <textarea rows="4" placeholder="Describe your property..." />

        <button type="submit">Submit Property</button>
      </form>
    </div>
  );
};

export default Sell;
