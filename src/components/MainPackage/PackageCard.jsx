import React, { useState } from 'react';
import './PackageCard.css';
import sampleImage from '../../logo.jpeg';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const PackageCard = ({
  title,
  location,
  rating,
  originalPrice,
  discountedPrice,
  vendor,
  features = []
}) => {
  const [liked, setLiked] = useState(false);
  const discountAmount = originalPrice - discountedPrice;

  return (
    <div className="package-card">
      <div className="image-section">
        <img src={sampleImage} alt="Travel" />
        
        <div
          className="wishlist-icon"
          title={liked ? 'Remove from Wishlist' : 'Add to Wishlist'}
          onClick={() => setLiked(!liked)}
        >
          {liked ? <FaHeart color="red" size={20} /> : <FaRegHeart color="black" size={20} />}
        </div>
        {discountAmount > 10000 && <div className="deal-tag">Best Deal</div>}
      </div>

      <div className="package-details">
        <h3>{title}</h3>
        <div className="rating">{'⭐'.repeat(Math.floor(rating)) + '☆'} ({rating})</div>
        <p className="location">📍 {location}</p>

        {/* Dynamic Features List */}
        <ul>
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="price">
          <span className="old">₹{originalPrice.toLocaleString('en-IN')}</span>
          <span className="new">₹{discountedPrice.toLocaleString('en-IN')}</span>
        </div>
        <button className="book-button">Book Now</button>
        <p className="vendor">Offered By: <span>{vendor}</span></p>
      </div>
    </div>
  );
};


export default PackageCard;
