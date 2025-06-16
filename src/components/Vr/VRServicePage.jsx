import React, { useState, useEffect } from 'react';
import './VRServicePage.css';
import video from "../../newvideo.mp4";
// import Lottie from 'lottie-react';

import {
  FaVrCardboard,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCheckCircle
} from 'react-icons/fa';

const VRServicePage = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  const testimonials = [
    {
      quote: "The VR experience was amazing! I could feel the vibe of Goa before booking the trip!",
      name: "Aayushi S.",
      stars:"⭐⭐⭐⭐⭐"
    },
    {
      quote: "Convenient and professional service. Highly recommended for family vacation planning!",
      name: "Rohan M.",
      stars:"⭐⭐⭐⭐⭐"
    },
    {
      quote: "This helped me finalize my honeymoon destination in minutes!",
      name: "Neha D.",
      stars:"⭐⭐⭐⭐⭐"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, 4000);
  return () => clearInterval(interval);
}, [testimonials.length]);
// const [showFeedback, setShowFeedback] = useState(false);



  const faqData = [
    {
      question: "How long is each demo?",
      answer: "About 15–20 minutes per destination."
    },
    {
      question: "Do I need special equipment?",
      answer: "No, we bring everything to your home."
    },
    {
      question: "Is it suitable for kids and seniors?",
      answer: "Yes, it's safe and fun for all age groups."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const [city, setCity] = useState('');
  const [available, setAvailable] = useState(null);

  const checkAvailability = () => {
    const availableCities = ['Ahmedabad', 'Surat', 'Mumbai', 'Delhi', 'Bangalore','Vadodara','Patna'];
    setAvailable(availableCities.includes(city.trim()));
  };
  return (
    <div className="vr-page">
      {/* 🎁 First-Time Offer Banner */}
      <div className="first-time-offer">
        🎉 First-time users get a free 10-minute VR destination tour!
      </div>

      {/* 🎯 Hero Section */}
      <section className="vr-hero">
        <div className="vr-hero-content">
          <h1>Experience Travel in Virtual Reality</h1>
          <p>We bring the world to your living room with Tourixa's exclusive VR service.</p>
          <button className="vr-btn" onClick={toggleForm}>Book a Free Demo</button>
        </div>
      </section>

      {/* ✨ Features */}
      <section className="vr-features">
        <h2>Why Try Our VR Experience?</h2>
        <div className="vr-cards">
          <div className="vr-card"><FaVrCardboard className="vr-icon" /><h3>Immersive Preview</h3><p>Get a 3D tour before you travel.</p></div>
          <div className="vr-card"><FaMapMarkerAlt className="vr-icon" /><h3>At Your Doorstep</h3><p>We come to you with our mobile VR kit.</p></div>
          <div className="vr-card"><FaRupeeSign className="vr-icon" /><h3>Minimal Cost</h3><p>Affordable pricing for every traveler.</p></div>
          <div className="vr-card"><FaCheckCircle className="vr-icon" /><h3>Easy Booking</h3><p>Instant online scheduling.</p></div>
        </div>
      </section>

      {/* 🎥 Demo Video */}
      <section className="vr-demo-video">
        <h2>See It In Action</h2>
        <div className="video-containervr">
          <video className="vr-demo-video-inner" width="50%" height="400" muted autoPlay loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* 🏙️ Destination Availability Checker */}
      <section className="city-checker">
        <h2>Check VR Availability in Your City</h2>
        <div className="city-checker-form">
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={checkAvailability}>Check</button>
        </div>
        {available !== null && (
          <p className={`city-checker-result ${available ? 'available' : 'unavailable'}`}>
            {available ? '🎉 Service available in your city!' : '😔 Oops! We are not in this city yet — but we are expanding soon. Stay tuned!'}
          </p>
        )}
      </section>
      {/* ❤️ Testimonials */}
      <section className="vr-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="carousel-container">
          <div className="testimonial-card">
            <p>"{testimonials[currentSlide].quote}"</p>
            <p>"{testimonials[currentSlide].stars}"</p>
            <span>- {testimonials[currentSlide].name}</span>
          </div>
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={currentSlide === index ? 'dot active' : 'dot'}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ */}
      <section className="vr-faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqData.map((item, index) => (
            <li key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                {item.question}
                <span className="arrow">{openFAQ === index ? '▲' : '▼'}</span>
              </div>
              {openFAQ === index && <div className="faq-answer">{item.answer}</div>}
            </li>
          ))}
        </ul>
      </section>
      

      {/* 🔐 Safety Promise */}
  <section className="vr-safety">
  <h2>Your Safety is Our Priority</h2>
  <ul >
    <li typeof='none'>Fully Sanitized VR Equipment</li>
    <li>Masked & Trained Team</li>
    <li>No Physical Contact During Setup</li>
  </ul>
</section>


      {/* 🔢 Trust Counter */}
      <section className="trust-counter">
        <div className="counter-item">
          <h3>10,000+</h3>
          <p>VR Tours Delivered</p>
        </div>
        <div className="counter-item">
          <h3>98%</h3>
          <p>Customer Satisfaction</p>
        </div>
        <div className="counter-item">
          <h3>300+</h3>
          <p>Cities Covered</p>
        </div>
         <div className="counter-item">
    <h3>5,000+</h3>
    <p>Happy Travelers</p>
  </div>
  <div className="counter-item">
    <h3>40+</h3>
    <p>Service Cities</p>
  </div>
  <div className="counter-item">
    <h3>24/7</h3>
    <p>Support</p>
  </div>
      </section>

      {/* 🚀 CTA */}
      <section className="vr-cta">
        <h2>Ready to Explore Virtually?</h2>
        <p>Feel the adventure before the journey. Book your home VR session today!</p>
        <button className="vr-btn" onClick={toggleForm}>Get Started</button>
      </section>

      {/* 📝 Booking Form Modal */}
      {showForm && (
        <div className="vr-form-modal">
          <div className="vr-form-content">
            <span className="vr-form-close" onClick={toggleForm}>✕</span>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScQqRjKg6boS7fI3Mt1VJGX8i7kRaZWn2cqbNu_nP9bHEGHlQ/viewform?usp=dialog"
              width="100%"
              height="500"
              frameBorder="0"
              title="VR Booking Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}

      {/* 💬 WhatsApp Floating Button */}
      <a
        href="https://wa.me/919979683808"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        📲 Chat with Us
      </a>
    


    

    </div>
  );
};

export default VRServicePage;
