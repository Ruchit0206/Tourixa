import React from 'react';
import './Footer.css';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-column">
          
          <a href="/#"><img
            src={logo}
            alt="Tourixaa"
            className="footer-logo"
            
            style={{ cursor: 'pointer' }}
          /></a>
          <p>
            Tourixaa is India’s first open travel platform that connects travelers with verified local agencies to deliver personalized and flexible trip experiences.
          </p>
          <div className="social-icons">
            <a href="/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
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
              <li><Link to="/International">International</Link></li>
              <li><Link to="/Domestic">Domestic</Link></li>
              <li><Link to="/Group-Tour">Group Tour</Link></li>
              <li><Link to="/Solo-Tour">Solo Tour</Link></li>
              <li><Link to="/Heritage-Tour">Heritage Tour</Link></li>
              <li><Link to="/Nature-and-Tracking">Nature & Tracking</Link></li>
              <li><Link to="/Maharaja-Express">Maharaja Express</Link></li>
              <li><Link to="/Honeymoon-Package">Honeymoon Package</Link></li>
              <li><Link to="/Senior-Citizen">Senior Citizen</Link></li>
              <li><Link to="/Business-Packages">Business Packages</Link></li>
              <li><Link to="/Children-Places">Children Places</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li><Link to="/Museum">Museum</Link></li>
              <li><Link to="/Video">Video</Link></li>
              <li><Link to="/3D-Model">3D Model</Link></li>
              <li><Link to="/360-Video">360 Video</Link></li>
              <li><Link to="/VR-Tour">VR Tour</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/Aboutus">About Us</Link></li>
              <li><Link to="/Packages">Packages</Link></li>
              <li><Link to="/Tourixaa-App">Tourixaa App</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-column">
          <h4>TOURIXAA</h4>
          <p>42 Maple Avenue, Suite 5B<br/>Springfield, IL 62704<br/>United States</p>
          <p><i className="fas fa-phone-alt"></i> (+91) 98765 43210</p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:tourixaa@gmail.com">tourixaa@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 <a href="https://tourixa-git-main-ruchit-patels-projects-b32f3c7a.vercel.app/" target="_blank" rel="noreferrer">Tourixaa</a> — All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
