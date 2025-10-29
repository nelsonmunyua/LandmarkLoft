import React, { useState, useEffect } from "react";
import "./Sell.css";

export default function Sell() {
  const [properties, setProperties] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    size_sqm: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL; // base URL from env

  // Fetch all properties on mount
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await fetch(`${apiUrl}/properties`);
      const data = await res.json();
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Create or Update property
  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = editId
      ? `${apiUrl}/properties/${editId}`
      : `${apiUrl}/properties`;
    const method = editId ? "PUT" : "POST";

    try {
      await fetch(endpoint, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setEditId(null);
      setFormData({
        title: "",
        type: "",
        location: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        size_sqm: "",
        image: "",
      });
      fetchProperties();
    } catch (error) {
      console.error("Error submitting property:", error);
    }
  };

  // Delete property
  const handleDelete = async (id) => {
    try {
      await fetch(`${apiUrl}/properties/${id}`, {
        method: "DELETE",
      });
      fetchProperties();
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  // Edit property
  const handleEdit = (property) => {
    setEditId(property.id);
    setFormData(property);
  };

  return (
    <div className="add-property-container">
      <h2>{editId ? "Edit Property" : "Add New Property"}</h2>

      {/* Form */}
      <form className="property-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type (e.g. Apartment)"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (Ksh)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
        />
        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
        />
        <input
          type="number"
          name="size_sqm"
          placeholder="Size (sqm)"
          value={formData.size_sqm}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit">
          {editId ? "Update Property" : "Add Property"}
        </button>
      </form>

      {/* Property List */}
      <div className="property-table">
        <h3>All Properties</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Location</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id}>
                <td>{property.title}</td>
                <td>{property.type}</td>
                <td>{property.location}</td>
                <td>Ksh{property.price}</td>
                <td>
                  <button onClick={() => handleEdit(property)}>Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(property.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {properties.length === 0 && (
              <tr>
                <td colSpan="5">No properties found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
