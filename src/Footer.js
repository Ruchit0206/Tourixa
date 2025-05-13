import React from 'react';
import './Footer.css'; // Make sure to import this CSS file
import logo from  './logo.jpg'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-column">
          <img src={logo} alt="Tourixa" className="footer-logo" />
          <p>
           Tourixa is India’s first open travel platform that connects travelers with verified local agencies to deliver personalized and flexible trip experiences.
          </p>
          <div className="social-icons">
            <a href="/" target="_blank" rel="noreferrer" className='  '><i className="fab fa-instagram"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="footer-links">
          <div className="footer-section">
            <h4>Packages</h4>
            <ul>
              <li><a href="/">International</a></li>
              <li><a href="/">Domestic</a></li>
              <li><a href="/">Group Tour</a></li>
              <li><a href="/">Solo Tour</a></li>
              <li><a href="/">Heritage Tour</a></li>
              <li><a href="/">Nature and Tracking</a></li>
              <li><a href="/">Maharaja Express</a></li>
              <li><a href="/">Honeymoon Package</a></li>
              <li><a href="/">Senior Citizen</a></li>
              <li><a href="/">Business Places</a></li>

            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Link</h4>
            <ul>
              <li><a href="/" target="_blank" rel="noreferrer">new</a></li>
              <li><a href="/" target="_blank" rel="noreferrer">new </a></li>
              <li><a href="/" target="_blank" rel="noreferrer">new</a></li>
              <li><a href="/" target="_blank" rel="noreferrer">new</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/">About us</a></li>
              <li><a href="/">Packages</a></li>
              <li><a href="/">Tourixa App</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-column">
          <h4>TOURIXA</h4>
          <p>
            42 Maple Avenue, Suite 5B  
Springfield, IL 62704  
United States

          </p>
          <p><i className="fas fa-phone-alt"></i> (+91) 98765 43210</p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:ruchit@gmail.com">ruchit0206gmail@.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 <a href="https://tourixa-git-main-ruchit-patels-projects-b32f3c7a.vercel.app/" target="_blank" rel="noreferrer">Tourixa</a> All Rights Reserved.</p>
      </div>
    </div>
  );
}
