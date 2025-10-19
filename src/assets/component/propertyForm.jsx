// PropertyForm.js

import React, { useState } from 'react';
import './PropertyForm.css'; // Importing external CSS

// Initial form state with default values
const initialState = {
  title: '',
  description: '',
  price: '',
  address: '',
  city: '',
  state: '',
  bedrooms: '',
  bathrooms: '',
  squareFootage: '',
  propertyType: 'house', // Default value
  status: 'sale',        // Default value
  features: {
    garage: false,
    pool: false,
    garden: false,
    balcony: false,
  },
  availabilityDate: '',
  images: [], // Image files will be stored here
};

// Main component
const PropertyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialState); // State to track form input

  // Handle all form input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // Handle checkboxes (features)
    if (name in formData.features) {
      setFormData((prev) => ({
        ...prev,
        features: {
          ...prev.features,
          [name]: checked,
        },
      }));
    }

    // Handle file uploads (images)
    else if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(files), // Convert FileList to array
      }));
    }

    // Handle all other inputs
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onSubmit?.(formData); // Call the parent submit function if passed
  };

  return (
    <form onSubmit={handleSubmit} className="property-form">
      <h2>Add / Edit Property</h2>

      {/* Title */}
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>

      {/* Description */}
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>

      {/* Price */}
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>

      {/* Address */}
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>

      {/* City */}
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </label>

      {/* State */}
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </label>

      {/* Bedrooms */}
      <label>
        Bedrooms:
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        />
      </label>

      {/* Bathrooms */}
      <label>
        Bathrooms:
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
        />
      </label>

      {/* Square Footage */}
      <label>
        Square Footage:
        <input
          type="number"
          name="squareFootage"
          value={formData.squareFootage}
          onChange={handleChange}
          required
        />
      </label>

      {/* Property Type (select dropdown) */}
      <label>
        Property Type:
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
        >
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </select>
      </label>

      {/* Status (For sale or rent) */}
      <label>
        Status:
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
      </label>

      {/* Features (checkboxes) */}
      <fieldset>
        <legend>Features:</legend>
        {Object.keys(formData.features).map((feature) => (
          <label key={feature}>
            <input
              type="checkbox"
              name={feature}
              checked={formData.features[feature]}
              onChange={handleChange}
            />
            {feature.charAt(0).toUpperCase() + feature.slice(1)}
          </label>
        ))}
      </fieldset>

      {/* Availability Date */}
      <label>
        Availability Date:
        <input
          type="date"
          name="availabilityDate"
          value={formData.availabilityDate}
          onChange={handleChange}
        />
      </label>

      {/* Image Upload */}
      <label>
        Images:
        <input
          type="file"
          name="images"
          onChange={handleChange}
          multiple
        />
      </label>

      {/* Submit Button */}
      <button type="submit">Submit Property</button>
    </form>
  );
};

export default PropertyForm;
