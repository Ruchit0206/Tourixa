// homepage.js
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Homepage.css";
import Secondpage from "./components/Secondpage/Secondpage";
import AboutUs from "./components/AboutUs/Aboutus";
import { Link } from "react-router-dom";
import TravelCarousel from "./components/Thirdpage/TravelCarouseli";
import TravelCarouseld from "./components/Thirdpage/TravelCarouseld";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const greetings = [
    "नमः",
    "Namaste!",
    "નમસ્તે!",
    "नमस्कार!",
    "নমস্কার!",
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!",
    "నమస్తే!",
    "Vadakkam!",
  ];

  useEffect(() => {
    const launchDate = new Date("2025-06-01T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSecondPage = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="video-container">
        <div className="hero-content">
          <p className="subtitle">Launching Soon</p>
          <h1>
            Discover The <span>Trip</span> Crafted By You
          </h1>

          <p className="description">
            <span className="AnimationNamaste">
              <TypeAnimation
                sequence={greetings.flatMap((greet) => [greet, 2000])}
                speed={80}
                repeat={Infinity}
                cursor={true}
              />
            </span>
            <br />
            Our team is working hard to bring you a powerful user experience.
            Stay tuned!
          </p>

          <div className="button-group">
            <Link className="nav-link active" to="/underde/Login As Traveller">
              <button className="cta-btn">Login As Traveller</button>
            </Link>

            <a
              href="https://tourixxa-3yet8jh1g-ruchit-patels-projects-b32f3c7a.vercel.app/login" // replace with your real agency URL
              target="_blank"
              rel="noopener noreferrer"
              className="join-agency-btn"
            >
              <button className="cta-btn">Join As Agency</button>
            </a>

            <Link to="VideoUpload">
              <button className="cta-btn">Upload Travel Moments</button>
            </Link>
          </div>

          <div className="open-source-text">
            India's First Open Travel Platform
          </div>

          {timeLeft.days !== undefined && (
            <div className="countdown">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </div>
          )}

          {/* 🔥 Modern Start Journey button */}
          <div
            className="start-journey modern-btn"
            onClick={scrollToSecondPage}
          >
             {/* <img src="https://placeaa-seven.vercel.app/static/media/spiral.6e188be20c53c6fdce60d3f1a7b0ea1f.svg" alt="start journey"/> */}
            {/* ⬇ Start Your Journey ⬇ */}
            Start Your Journey
            <img src="https://placeaa-seven.vercel.app/static/media/spiral.6e188be20c53c6fdce60d3f1a7b0ea1f.svg" alt="start journey" style={{transform:"rotate(180deg)"}}/>
          </div>
        </div>
      </div>

      <div id="next-section"  >
          {/* <div id="next-section" style={{ paddingTop: "50px" }}> */}
                    <AboutUs />
      </div>
      <TravelCarousel />
      <TravelCarouseld />
      <Secondpage />

      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
      {showBackToTop && (
        <button
          className="inquiry-button"
          onClick={() => (window.location.href = "International")}
          aria-label="Inquiry"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9412/9412919.png"
            width="20px"
            alt="Inquiry"
            className="inquiry-icon"
          />
          <span className="inquiry-text">Inquiry</span>
        </button>
      )}

      {showBackToTop && (
        <button
          className="community-button"
          onClick={() => (window.location.href = "Community")}
          aria-label="Community"
        >
          <i className="fa-solid fa-users-rectangle"></i>
          <span className="community-text">Community</span>
        </button>
      )}
    </div>
  );
}
