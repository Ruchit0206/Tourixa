import React from 'react';
import './ProgressBar.css';

function ProgressBar({ step }) {
  return (
    <div className="progress-container">
      <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
      <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
      <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
    </div>
  );
}

export default ProgressBar;
