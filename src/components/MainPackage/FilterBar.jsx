import React from 'react';
import './FilterBar.css';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <select><option>Duration</option></select>
      <select><option>Hotel Rating</option></select>
      <select><option>Transportation</option></select>
      <select><option>Theme</option></select>
      <select><option>Sort by</option></select>
    </div>
  );
};

export default FilterBar;