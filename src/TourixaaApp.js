// TourixaaApp.jsx
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./TourixaaApp.css";
import newvideo from "./newvideo.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";

const TourixaaApp = () => {
  // Countdown Timer logic
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-07-01T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [progress, setProgress] = useState(0);

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Progress circle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 50) return prev + 1;
        clearInterval(interval);
        return 50;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tourixaa-outer">
      {/* Animated Cloud Background */}
      <div className="animated-bg">
        <svg className="cloud cloud-1" xmlns="http://www.w3.org/2000/svg" width="100" height="60" fill="#bbdefb" viewBox="0 0 100 60">
          <circle cx="30" cy="30" r="30" />
          <circle cx="70" cy="30" r="30" />
        </svg>
        <svg className="cloud cloud-2" xmlns="http://www.w3.org/2000/svg" width="80" height="50" fill="#e3f2fd" viewBox="0 0 80 50">
          <circle cx="20" cy="25" r="25" />
          <circle cx="60" cy="25" r="25" />
        </svg>
      </div>

      {/* Loader Circle */}
      <div className="loader-container">
        <div className="progress-circle">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="progress-text">{progress}%</div>
        </div>
      </div>

      {/* Glass Card Content */}
      <div className="doingflex">
        <div className="glass-card">
          <h1 className="app-name">Tourixaa App</h1>
          <p className="tagline">Your Ultimate Travel Companion</p>
          <h2>We're Launching Soon 🚀</h2>
          <p className="info-text">
            Our app is currently under development. We’re crafting an amazing travel experience for you. Stay tuned!
          </p>

          {/* Social Links */}
          <div className="social-icons1">
            <a href="https://instagram.com/tourixaa" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:contact@tourixaa.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://twitter.com/tourixaa" target="_blank" rel="noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          {/* Countdown Timer */}
          <div className="countdown-timer">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <span key={unit} className="time-box">
                <strong>{value !== undefined ? value : 0}</strong> {unit}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Teaser Video Carousel */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="teaser-carousel">
        <div>
          <video autoPlay loop muted>
            <source src={newvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video autoPlay loop muted>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video autoPlay loop muted>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Carousel>
    </div>
  );
};

export default TourixaaApp;
