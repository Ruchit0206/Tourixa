import React from 'react';
import './Advertisement.css';
import adImage from '../../logo.jpeg';

const Advertisement = () => {
  return (
    <div className="ad-section">
      <img src={adImage} alt="Advertisement" />
    </div>
  );
};

export default Advertisement;