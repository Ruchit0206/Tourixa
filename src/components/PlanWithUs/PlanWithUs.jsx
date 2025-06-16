// Enhanced PlanWithUs.jsx with Modern Trends
import React, { useState, useEffect } from 'react';
import './PlanWithUs.css';
import {
  FaRegHandshake,
  FaMapMarkedAlt,
  FaSmile,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaCalculator,
  
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PlanWithUs() {
  const [showFAQ, setShowFAQ] = useState(null);
  const [budget, setBudget] = useState(0);
  const [people, setPeople] = useState(1);
  const [days, setDays] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleFAQ = (index) => {
    setShowFAQ(showFAQ === index ? null : index);
  };

  const calculateBudget = () => {
    const basePerPerson = 2000;
    const total = basePerPerson * people * days;
    setBudget(total);
    if (total > 0) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="plan-container">
      <motion.h1 className="plan-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        Plan Your Perfect Journey With Us ✈️
      </motion.h1>

      <motion.p className="plan-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Let’s create unforgettable memories together.
      </motion.p>

      <motion.div className="promo-banner" animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
        🎉 Get 10% OFF on early bookings! Offer ends in 3 days.
      </motion.div>

      <div className="plan-steps">
        {[{
          icon: <FaMapMarkedAlt />, title: "Choose Destination", desc: "Explore top destinations or tell us your dream location."
        }, {
          icon: <FaRegHandshake />, title: "Customize Your Package", desc: "Select travel dates, hotels, and activities."
        }, {
          icon: <FaCheckCircle />, title: "Confirm & Pack", desc: "Get your full itinerary instantly after booking."
        }, {
          icon: <FaSmile />, title: "Enjoy & Share", desc: "Travel peacefully while we handle everything!"
        }].map((step, idx) => (
          <div className="step" key={idx} data-aos="fade-up">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      
      <div className="pricing-section">
        <h2>Popular Plans</h2>
        <div className="pricing-grid">
          {[{
            title: 'Budget Plan', price: '₹7,999', desc: 'Perfect for short getaways', features: ['2 Nights / 3 Days', 'Standard Hotel', 'Local Transport']
          }, {
            title: 'Comfort Plan', price: '₹14,999', desc: 'For relaxed vacations', features: ['4 Nights / 5 Days', 'Premium Hotel', 'City Tour']
          }, {
            title: 'Luxury Plan', price: '₹25,000+', desc: 'For a premium experience', features: ['6 Nights / 7 Days', '5-Star Hotel', 'All-inclusive']
          }].map((card, i) => (
            <div className="pricing-card glass" key={i} data-aos="zoom-in">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <h4>{card.price}</h4>
              <ul>
                {card.features.map((feat, j) => <li key={j}>{feat}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="budget-calculator modern">
        <FaCalculator className="calc-icon" />
        <h2>Budget Estimator</h2>

        <div className="input-group">
          <h4>👥 Number of People</h4>
          <input type="number" placeholder="Enter people count" value={people} onChange={(e) => setPeople(e.target.value)} />
        </div>

        <div className="input-group">
          <h4>📆 Number of Days</h4>
          <input type="number" placeholder="Enter days" value={days} onChange={(e) => setDays(e.target.value)} />
        </div>

        <button className="estimate-btn" onClick={calculateBudget}>💰 Estimate Cost</button>

        {budget > 0 && <p className="budget-result">Estimated Budget: ₹{budget}</p>}
      </div>

      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>We’ll craft a travel plan that’s as unique as you are 💫</p>
        <button className="plan-btn" onClick={() => window.open('https://forms.gle/YOUR_FORM_ID', '_blank')}>Fill Planning Form</button>
      </div>

      <div className="faq-section">
        <h2>FAQs</h2>
        {[{
          q: "Can I plan for international trips?",
          a: "Yes! We support both domestic and international travel."
        }, {
          q: "Is there a cancellation policy?",
          a: "We offer flexible cancellation based on the agency terms."
        }, {
          q: "Do you provide visa support?",
          a: "Yes, we help with documentation and application guidance."
        }].map((item, idx) => (
          <div className="faq-card" key={idx}>
            <div className="faq-question" onClick={() => toggleFAQ(idx)}>
              {item.q} {showFAQ === idx ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {showFAQ === idx && <div className="faq-answer">{item.a}</div>}
          </div>
        ))}
      </div>
      {/* <div className="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0976561940783!2d72.8354954751339!3d19.143720350443726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7bf0032890b%3A0x7e7b015105b78d7b!2sMumbai!5e0!3m2!1sen!2sin!4v1718459871525!5m2!1sen!2sin" width="100%" height="300" style={{ borderRadius: '12px' }} allowFullScreen="" loading="lazy" title="Popular Locations"></iframe>
      </div> */}


      {/* WhatsApp Floating Button */}
       <a
        href="https://wa.me/919979683808"
        className="whatsapp-float-plan"
        target="_blank"
        rel="noopener noreferrer"
      >
        📲 Chat with Us
      </a>
   
    </div>
  );
}