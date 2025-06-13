import React from 'react';
import './Advertisement.css';

const Advertisement = () => {
  return (
    <div className="ad-container">
      <div className="ad-content">
        <h2>🔥 Limited Time Offer!</h2>
        <p>Book your dream vacation now and get up to <span className="highlight">25% OFF</span> on selected packages!</p>
        <button className="ad-button">Explore Deals</button>
      </div>
    </div>
  );
};

export default Advertisement;
