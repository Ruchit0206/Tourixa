import React from 'react';
import './FilterBar.css';
// import { FaClock, FaStar, FaBus, FaPalette, FaSort } from 'react-icons/fa';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-item">
       
        <select><option>Duration</option></select>
      </div>
      <div className="filter-item">
        
        <select><option>Hotel Rating</option></select>
      </div>
      <div className="filter-item">
       
        <select><option>Transportation</option></select>
      </div>
      <div className="filter-item">
        
        <select><option>Theme</option></select>
      </div>
      <div className="filter-item">
     
        <select><option>Sort by</option></select>
      </div>
    </div>
  );
};

export default FilterBar;
