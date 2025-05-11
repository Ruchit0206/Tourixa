import React from "react";
import "./Navbar.css";
import logo from "./logo.jpg";
// import logo1 from './logo1.jpeg';
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/#">
          <img src={logo} alt="logo" />&nbsp;<p>Tourixa</p>
          
        </a>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Left */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                <i className="fa-solid fa-house me-1"></i>
                <span className="nav-text">{props.first}</span>
              </a>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-mountain-sun"></i>
                <span className="nav-text"> {props.second}</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/#">
             <i className="fa-solid fa-globe"></i> International 
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <img src="https://flagcdn.com/w40/in.png" alt="India Flag" width="20" /> Domestic
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <i className="fa-solid fa-people-group"></i> Group Tour
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                   <i className="fa-solid fa-person-hiking"></i> Solo Tour
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <i className="fa-solid fa-gopuram"></i> Heritage Tour
                  </a>
                </li>
               
                <li>
                  <a className="dropdown-item" href="/#">
                   <i className="fa-solid fa-tree"></i> Nature and Tracking
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <i className="fa-solid fa-train-subway"></i> Maharaja Express
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <i className="fa-solid fa-umbrella-beach"></i> Honeymoon Package
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                   <i className="fa-solid fa-person-cane"></i> Senior Citizen
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                   <i className="fa-solid fa-user-tie"></i> Business Places
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <i className="fa-solid fa-children"></i> Children Places
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                <i className="fa-solid fa-tags"></i>
                <span className="nav-text"> {props.third}</span>
              </a>
            </li>
               <li className="nav-item">
              <a className="nav-link active" href="/#">
                <i className="fa-solid fa-route"></i> 
                <span className="nav-text"> {props.fourth}</span>
              </a>
            </li>
            {/* dropdown start */}
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ><i className="fa-solid fa-web-awesome"></i>
                <span className="nav-text"> {props.fifth}</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/#">
                    <i className="fa-solid fa-bolt me-1"></i> Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <i className="fa-solid fa-plus me-1"></i> Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    <i className="fa-solid fa-ellipsis me-1"></i> Something else
                  </a>
                </li>
              </ul>
            </li>
            
            {/* dropdown end */}
          </ul>

          {/* Right */}
          <div className="ruchit ms-auto">
            <ul className="navbar-nav d-flex flex-column flex-lg-row">
            
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  <i className="fa-solid fa-circle-user"></i>
                  <span className="nav-text">&nbsp;Profile</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string.isRequired,
};
