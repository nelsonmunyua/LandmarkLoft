import { useState } from 'react';
import './filter.css';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    propertyType: [],
    priceRange: '',
    minPrice: 400000,
    maxPrice: 800000
  });

  const propertyTypes = [
    'Single Family Home',
    'Condo/Townhouse',
    'Apartment',
    'Commercial',
    'Land',
    'Multi-Family'
  ];

  const priceRanges = [
    'Under $200K',
    '$200K - $500K',
    '$500K - $1M',
    '> $1M'
  ];

  const handlePropertyTypeChange = (type) => {
    const newTypes = filters.propertyType.includes(type)
      ? filters.propertyType.filter(t => t !== type)
      : [...filters.propertyType, type];
    
    const newFilters = { ...filters, propertyType: newTypes };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handlePriceRangeChange = (range) => {
    const newFilters = { ...filters, priceRange: range };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handlePriceSliderChange = (type, value) => {
    const newValue = parseInt(value);
    const newFilters = { 
      ...filters, 
      [type]: newValue 
    };
    
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  return (
    <div className="filter-container">
      <h3 className="filter-title">Filter by</h3>

      {/* Property Type */}
      <div className="filter-group">
        <h4 className="filter-subtitle">PROPERTY TYPE</h4>
        <div className="checkbox-group">
          {propertyTypes.map((type) => (
            <label key={type} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.propertyType.includes(type)}
                onChange={() => handlePropertyTypeChange(type)}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="filter-group">
        <h4 className="filter-subtitle">PRICE RANGE</h4>
        <div className="price-options">
          {priceRanges.map((range) => (
            <label key={range} className="radio-label">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === range}
                onChange={() => handlePriceRangeChange(range)}
                className="radio-input"
              />
              <span className="radiomark"></span>
              {range}
            </label>
          ))}
        </div>

        {/* Custom Price Range */}
        <div className="custom-price-range">
          <div className="price-slider-header">
            Under $200K - $600K
          </div>
          <div className="slider-container">
            <div className="slider-values">
              <span>{formatPrice(filters.minPrice)}</span>
              <span>{formatPrice(filters.maxPrice)}</span>
            </div>
            <div className="slider-track">
              <div 
                className="slider-filled-track"
                style={{
                  left: `${((filters.minPrice - 200000) / 800000) * 100}%`,
                  width: `${((filters.maxPrice - filters.minPrice) / 800000) * 100}%`
                }}
              ></div>
              <input
                type="range"
                min="200000"
                max="1000000"
                step="10000"
                value={filters.minPrice}
                onChange={(e) => handlePriceSliderChange('minPrice', e.target.value)}
                className="slider min-slider"
              />
              <input
                type="range"
                min="200000"
                max="1000000"
                step="10000"
                value={filters.maxPrice}
                onChange={(e) => handlePriceSliderChange('maxPrice', e.target.value)}
                className="slider max-slider"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;