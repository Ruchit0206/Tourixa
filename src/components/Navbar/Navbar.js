import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../logo.jpeg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import confetti from 'canvas-confetti';

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
   const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const handleMouseEnter = (id) => {
    if (window.innerWidth > 991) {
      setDropdownOpen(id);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 991) {
      setDropdownOpen(null);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" onMouseLeave={handleMouseLeave}>
      <div className="container-fluid">
        <div className="navbar-left">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Tourixaa Logo" />
          </Link>
          <button
            className={`navbar-toggler ${isOpen ? "open" : ""}`}
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? "show fullscreen-overlay" : ""
          }`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav d-flex flex-column flex-lg-row align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                <span className="nav-text">{props.first}</span>
              </a>
            </li>

            {/* Dropdowns */}
            {[
              {
                id: "second", label: props.second, links: [
                  { to: "/MainPage", text: "🌐 International" },
                  { to: "/underde/domestic", text: "🇮🇳 Domestic" },
                  { to: "/underde/group Tour", text: "👥 Group Tour" },
                  { to: "/underde/Solo Tour", text: "🥾 Solo Tour" },
                  { to: "/underde/Nature and Tracking", text: "🌲 Nature" },
                  { to: "/underde/Maharaja Express", text: "🚆 Maharaja Express" },
                  { to: "/underde/Honeymoon Package", text: "🏖️ Honeymoon" },
                  { to: "/underde/Spiritual Places", text: "🧘‍♂️ Spiritual" },
                  { to: "/Offers", text: "👶 Children Places" },
                ]
              },
              {
                id: "fourth", label: props.fourth, links: [
                  { to: "/underde/Ai Tour Planner", text: "🤖 AI Tour Planner" },
                  { to: "/underde/Plan With Us", text: "📝 Plan With Us" },
                ]
              },
              {
                id: "fifth", label: props.fifth, links: [
                  { to: "/underde/Museum", text: "🏛️ Museum" },
                  { to: "/underde/Video", text: "🎥 Video" },
                  { to: "/underde/3D Model", text: "📦 3D Model" },
                  { to: "/underde/360 Video", text: "🔄 360 Video" },
                  { to: "/underde/VR Tour", text: "🕶️ VR Tour" },
                ]
              },
              {
                id: "six", label: props.six, links: [
                  { to: "/underde/Museum", text: "🏛️ Heritage Tour" },
                  { to: "/underde/Video", text: "🎥 Forgotten Traditions" },
                  { to: "/underde/3D Model", text: "📦 Festival Experience Tours" },
                ]
              },
              {
                id: "corporate", label: props.seven, links: [
                  { to: "/underde/Corporate Packages", text: "💼 Corporate Packages" },
                  { to: "/underde/Business Meetings", text: "🏢 Business Meetings & Events" },
                  { to: "/underde/Team Offsite", text: "👨‍💼 Team Offsite Packages" },
                  { to: "/underde/Executive Retreats", text: "🌴 Executive Retreats" },
                ]
              },
            ].map((item) => (
              <li
                key={item.id}
                className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="nav-link active"
                  onClick={() => handleDropdownToggle(item.id)}
                >
                  <span className="nav-text">
                    {item.label}
                    <span className="dropdown-icon d-lg-none">▼</span>
                  </span>
                </div>
                <ul className={`dropdown-menu ${dropdownOpen === item.id ? "show" : ""}`}>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link className="nav-link active" to={link.to}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* ✅ OFFERS Element */}
   <li className="nav-item">
  <Link
    to="/Offers"
    className="nav-link active"
    onMouseEnter={handleConfetti}
    style={{
      color: '#fff',
      background: 'linear-gradient(45deg, #ff0066, #ffcc00)',
      padding: '6px 14px',
      borderRadius: '12px',
      fontWeight: 'bold',
      boxShadow: '0 0 10px rgba(255, 204, 0, 0.8)',
      animation: 'sparkle 1s infinite alternate',

    }}
  >
    <span className="nav-text">🎁 Offers</span>
  </Link>
</li>
            {/* ✅ Profile */}
            <li className="nav-item">
              <Link to="/Profile" className="nav-link active profile-link">
                <span className="nav-text">Profile</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
  fifth: PropTypes.string.isRequired,
  six: PropTypes.string.isRequired,
  seven: PropTypes.string.isRequired,
};
