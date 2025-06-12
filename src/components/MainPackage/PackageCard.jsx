import React from 'react';
import './PackageCard.css';
import sampleImage from '../../logo.jpeg';

const PackageCard = () => {
  return (
    <div className="package-card">
      <div className="image-section">
        <img src={sampleImage} alt="Travel" />
        <div className="badge">Customizable</div>
        <button className="compare-button">Compare</button>
      </div>
      <div className="package-details">
        <h3>2N SHIMLA | 3N KULLU | 3N MANALI</h3>
        <ul>
          <li>Round Trip Flights</li>
          <li>3 Star Hotel</li>
          <li>2 Activities</li>
          <li>Airport Pickup & Drop</li>
        </ul>
        <div className="price">
          <span className="old">₹21850</span>
          <span className="new">₹10580</span>
        </div>
        <button className="book-button">Book Now</button>
        <p className="vendor">Offered By: <span>Adventure Travels</span></p>
      </div>
    </div>
  );
};

export default PackageCard;