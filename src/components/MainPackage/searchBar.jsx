import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="from-to-group">
        <div className="location-box">
          <input type="text" className="location-input" placeholder='ig.AHMEDABAD'/>
          <p className="location-label">Gujarat, IND</p>
        </div>
        <div className="to-chip">To</div>
        <div className="location-box">
          <input type="text" className="location-input" placeholder='ig.AHMEDABAD' />
<p className="location-label">Gujarat, IND</p>

        </div>
      </div>

      <div className="info-block">
        <p className="info-title">Starting Date</p>
        <input type='date' className="info-date"/>
      </div>

      <div className="info-block">
        <p className="info-title">Budget Per Person</p>
       <select><option selected disabled>Select Budget</option>
       <option selected disabled>Select Budget</option>
       <option selected disabled>Select Budget</option>
       <option selected disabled>Select Budget</option>
       </select>
      </div>

      <div className="info-block">
        <p className="info-title">Budgets & Guests</p>
        <p className="info-value">1 Adult</p>
      </div>

      <div className="search-button-container">
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
