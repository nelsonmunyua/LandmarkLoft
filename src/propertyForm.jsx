import React, { useState } from 'react';

const PropertyForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('apartment');
  const [status, setStatus] = useState('sale');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [area, setArea] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyData = {
      title,
      address,
      price,
      type,
      status,
      bedrooms,
      bathrooms,
      area,
      yearBuilt,
      imageUrl,
      description,
    };

    if (onSubmit) {
      onSubmit(propertyData);
    }

    // Clear form
    setTitle('');
    setAddress('');
    setPrice('');
    setType('apartment');
    setStatus('sale');
    setBedrooms('');
    setBathrooms('');
    setArea('');
    setYearBuilt('');
    setImageUrl('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Property</h2>

      <div>
        <label>Title:</label><br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Address:</label><br />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Price ($):</label><br />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Type:</label><br />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      <div>
        <label>Status:</label><br />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
      </div>

      <div>
        <label>Bedrooms:</label><br />
        <input
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />
      </div>

      <div>
        <label>Bathrooms:</label><br />
        <input
          type="number"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        />
      </div>

      <div>
        <label>Square Footage (sq ft):</label><br />
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>

      <div>
        <label>Year Built:</label><br />
        <input
          type="number"
          value={yearBuilt}
          onChange={(e) => setYearBuilt(e.target.value)}
        />
      </div>

      <div>
        <label>Image URL:</label><br />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div>
        <label>Description:</label><br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit">Submit Property</button>
    </form>
  );
};

export default PropertyForm;

