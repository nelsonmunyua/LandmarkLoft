import { useState } from 'react';
import './filter.css';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    type: [], // sale/rent
    category: [], // apartment, house, etc.
    location: [],
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    minBathrooms: '',
    maxBathrooms: '',
    minSize: '',
    maxSize: '',
    project: [] // new/existing
  });

  // These should come from props or be fetched from your data
  const locations = ['Westlands', 'Kilimani', 'Karen', 'Upper Hill', 'Runda', 'Langata', 'CBD', 'South C', 'Kikuyu', 'Lavington', 'Parklands', 'Muthaiga', 'Ngong Road', 'Donholm', 'Ruiru', 'Ngara', 'Kileleshwa', 'Kasarani', 'Thika Road', 'Kitengela', 'Garden Estate', 'Highridge', 'Roysambu', 'Kahawa', 'Athi River', 'Hurlingham', 'Kitisuru', 'Rongai', 'Naivasha', 'Spring Valley', 'Mombasa Road'];
  
  const categories = ['apartment', 'flat', 'bungalow', 'mansion', 'house', 'commercial', 'maisonette', 'farmhouse', 'land', 'farm', 'villa'];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleArrayFilterChange = (key, value) => {
    const currentArray = filters[key] || [];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    
    handleFilterChange(key, newArray);
  };

  const clearFilters = () => {
    const resetFilters = {
      type: [],
      category: [],
      location: [],
      minPrice: '',
      maxPrice: '',
      minBedrooms: '',
      maxBedrooms: '',
      minBathrooms: '',
      maxBathrooms: '',
      minSize: '',
      maxSize: '',
      project: []
    };
    setFilters(resetFilters);
    onFilterChange?.(resetFilters);
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h3 className="filter-title">Filter Properties</h3>
        <button onClick={clearFilters} className="clear-filters-btn">
          Clear All
        </button>
      </div>

      {/* Transaction Type */}
      <div className="filter-group">
        <h4 className="filter-subtitle">TRANSACTION TYPE</h4>
        <div className="checkbox-group">
          {['sale', 'rent'].map((type) => (
            <label key={type} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={() => handleArrayFilterChange('type', type)}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Property Category */}
      <div className="filter-group">
        <h4 className="filter-subtitle">PROPERTY TYPE</h4>
        <div className="checkbox-group">
          {categories.map((category) => (
            <label key={category} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => handleArrayFilterChange('category', category)}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="filter-group">
        <h4 className="filter-subtitle">LOCATION</h4>
        <div className="checkbox-group location-group">
          {locations.map((location) => (
            <label key={location} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.location.includes(location)}
                onChange={() => handleArrayFilterChange('location', location)}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
              {location}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="filter-group">
        <h4 className="filter-subtitle">PRICE RANGE</h4>
        <div className="range-inputs">
          <div className="range-input-group">
            <label>Min Price</label>
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="range-input"
            />
          </div>
          <div className="range-input-group">
            <label>Max Price</label>
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              className="range-input"
            />
          </div>
        </div>
      </div>

      {/* Bedrooms */}
      <div className="filter-group">
        <h4 className="filter-subtitle">BEDROOMS</h4>
        <div className="range-inputs">
          <div className="range-input-group">
            <label>Min</label>
            <select
              value={filters.minBedrooms}
              onChange={(e) => handleFilterChange('minBedrooms', e.target.value)}
              className="range-select"
            >
              <option value="">Any</option>
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}+</option>
              ))}
            </select>
          </div>
          <div className="range-input-group">
            <label>Max</label>
            <select
              value={filters.maxBedrooms}
              onChange={(e) => handleFilterChange('maxBedrooms', e.target.value)}
              className="range-select"
            >
              <option value="">Any</option>
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bathrooms */}
      <div className="filter-group">
        <h4 className="filter-subtitle">BATHROOMS</h4>
        <div className="range-inputs">
          <div className="range-input-group">
            <label>Min</label>
            <select
              value={filters.minBathrooms}
              onChange={(e) => handleFilterChange('minBathrooms', e.target.value)}
              className="range-select"
            >
              <option value="">Any</option>
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}+</option>
              ))}
            </select>
          </div>
          <div className="range-input-group">
            <label>Max</label>
            <select
              value={filters.maxBathrooms}
              onChange={(e) => handleFilterChange('maxBathrooms', e.target.value)}
              className="range-select"
            >
              <option value="">Any</option>
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="filter-group">
        <h4 className="filter-subtitle">SIZE (sqm)</h4>
        <div className="range-inputs">
          <div className="range-input-group">
            <label>Min</label>
            <input
              type="number"
              placeholder="Min sqm"
              value={filters.minSize}
              onChange={(e) => handleFilterChange('minSize', e.target.value)}
              className="range-input"
            />
          </div>
          <div className="range-input-group">
            <label>Max</label>
            <input
              type="number"
              placeholder="Max sqm"
              value={filters.maxSize}
              onChange={(e) => handleFilterChange('maxSize', e.target.value)}
              className="range-input"
            />
          </div>
        </div>
      </div>

      {/* Project Type */}
      <div className="filter-group">
        <h4 className="filter-subtitle">PROJECT TYPE</h4>
        <div className="checkbox-group">
          {['New', 'Existing'].map((projectType) => (
            <label key={projectType} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.project.includes(projectType)}
                onChange={() => handleArrayFilterChange('project', projectType)}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
              {projectType}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// CORRECTED Filter utility function
export const filterProperties = (properties, filters) => {
  return properties.filter(property => {
    // Transaction type filter
    if (filters.type && filters.type.length > 0 && !filters.type.includes(property.type)) {
      return false;
    }

    // Category filter
    if (filters.category && filters.category.length > 0 && !filters.category.includes(property.category)) {
      return false;
    }

    // Location filter
    if (filters.location && filters.location.length > 0 && !filters.location.includes(property.location)) {
      return false;
    }

    // Price filter - handle empty strings and different scales
    const minPrice = filters.minPrice ? parseInt(filters.minPrice) : null;
    const maxPrice = filters.maxPrice ? parseInt(filters.maxPrice) : null;
    
    if (minPrice !== null && property.price < minPrice) {
      return false;
    }
    if (maxPrice !== null && property.price > maxPrice) {
      return false;
    }

    // Bedrooms filter
    const minBedrooms = filters.minBedrooms ? parseInt(filters.minBedrooms) : null;
    const maxBedrooms = filters.maxBedrooms ? parseInt(filters.maxBedrooms) : null;
    
    if (minBedrooms !== null && property.bedrooms < minBedrooms) {
      return false;
    }
    if (maxBedrooms !== null && property.bedrooms > maxBedrooms) {
      return false;
    }

    // Bathrooms filter
    const minBathrooms = filters.minBathrooms ? parseInt(filters.minBathrooms) : null;
    const maxBathrooms = filters.maxBathrooms ? parseInt(filters.maxBathrooms) : null;
    
    if (minBathrooms !== null && property.bathrooms < minBathrooms) {
      return false;
    }
    if (maxBathrooms !== null && property.bathrooms > maxBathrooms) {
      return false;
    }

    // Size filter
    const minSize = filters.minSize ? parseInt(filters.minSize) : null;
    const maxSize = filters.maxSize ? parseInt(filters.maxSize) : null;
    
    if (minSize !== null && property.size_sqm < minSize) {
      return false;
    }
    if (maxSize !== null && property.size_sqm > maxSize) {
      return false;
    }

    // Project type filter
    if (filters.project && filters.project.length > 0 && !filters.project.includes(property.project)) {
      return false;
    }

    return true;
  });
};

export default Filter;