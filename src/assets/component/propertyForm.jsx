import React, { useState } from 'react';

// Initial state structure for the form data
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
  propertyType: 'house',   // Default selected option
  status: 'sale',          // Default listing status
  features: {
    garage: false,
    pool: false,
    garden: false,
    balcony: false,
  },
  availabilityDate: '',
  images: [],               // Holds selected image files
};

// PropertyForm component receives an optional onSubmit function prop
const PropertyForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialState); // Form state management

  // Generic input change handler for form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // If the input is one of the feature checkboxes
    if (name in formData.features) {
      setFormData((prev) => ({
        ...prev,
        features: {
          ...prev.features,
          [name]: checked, // true/false based on checkbox status
        },
      }));
    }
    // If the input is for file upload (images)
    else if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        images: Array.from(e.target.files), // Convert FileList to array
      }));
    }
    // Regular text/number/date input
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();       // Prevent page refresh
    onSubmit?.(formData);     // Call parent's onSubmit function if provided
  };

  return (
    <form onSubmit={handleSubmit} className="property-form">
      <h2>Add / Edit Property</h2>

      {/* Property Title */}
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

      {/* Property Description */}
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>

      {/* Property Price */}
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

      {/* Property Address */}
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

      {/* Number of Bedrooms */}
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

      {/* Number of Bathrooms */}
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

      {/* Total Square Footage */}
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

      {/* Property Type Dropdown. */}
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

      {/* Listing Status Dropdown */}
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

      {/* Property Features as Checkboxes */}
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
            {/* Capitalize feature nSame */}
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

      {/* Upload Images */}
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
