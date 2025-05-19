import React from 'react';
import './Footer.css'; // Make sure to import this CSS file
import logo from  './logo.jpg'
import { Link } from 'react-router-dom';

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
              <li> <Link className="nav-link active" to="/underde/international">International</Link></li>
              <li> <Link className="nav-link active" to="/underde/domestic">Domestic</Link></li>
              <li> <Link className="nav-link active" to="/underde/Group Tour">Group Tour</Link></li>
              <li> <Link className="nav-link active" to="/underde/Solo Tour">Solo Tour</Link></li>
              <li> <Link className="nav-link active" to="/underde/Heritage Tour">Heritage Tour</Link></li>
              <li> <Link className="nav-link active" to="/underde/Nature and Tracking">Nature and Tracking</Link></li>
              <li> <Link className="nav-link active" to="/underde/Maharaja Express">Maharaja Express</Link></li>
              <li> <Link className="nav-link active" to="/underde/Honeymoon Package">Honeymoon Package</Link></li>
              <li> <Link className="nav-link active" to="/underde/Senior Citizen">Senior Citizen</Link></li>
              <li> <Link className="nav-link active" to="/underde/Business Packages">Business Packages</Link></li>
              <li> <Link className="nav-link active" to="/underde/Children Places">Children Places</Link></li>
              

            </ul>
          </div>
          <div className="footer-section">
            <h4>Feature</h4>
            <ul>
              <li><Link className="nav-link active" to="/underde/Museum">Museum </Link> </li>
              <li><Link className="nav-link active" to="/underde/Video">Video </Link></li>
              <li><Link className="nav-link active" to="/underde/3D Model">3D Model </Link></li>
              <li><Link className="nav-link active" to="/underde/360 Video">360 Video </Link></li>
              <li><Link className="nav-link active" to="/underde/VR Tour">VR Tour </Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              
             <li> <Link className="nav-link active" to="/underde/About Us">About Us</Link></li>
              <li><Link className="nav-link active" to="/underde/Packages">Packages</Link></li>
              <li><Link className="nav-link active" to="/underde/Tourixa App">Tourixa App</Link></li>
              
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
          <p><i className="fas fa-envelope"></i> <a href="mailto:ruchit@gmail.com">tourixa@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 <a href="https://tourixa-git-main-ruchit-patels-projects-b32f3c7a.vercel.app/" target="_blank" rel="noreferrer">Tourixa</a> All Rights Reserved.</p>
      </div>
    </div>
  );
}
