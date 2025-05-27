import React, { useState } from "react";
import "./Offers.css";

const offers = [
  {
    title: "Summer Special: 30% Off",
    description: "Enjoy your summer vacation with an amazing 30% discount on select packages.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Family Package: Kids Travel Free",
    description: "Bring your family along and kids travel absolutely free on all domestic tours.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Early Bird Offer",
    description: "Book your tour 3 months in advance and get exclusive perks & gifts.",
    imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Early Bird Offer",
    description: "Book your tour 3 months in advance and get exclusive perks & gifts.",
    imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Early Bird Offer",
    description: "Book your tour 3 months in advance and get exclusive perks & gifts.",
    imageUrl: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
  }
];

const mainTourixaaBenefit = {
  icon: "🎁",
  title: "Special Gift for Every Booking",
  description: "Book any package with Tourixaa and receive an exclusive travel kit to make your journey memorable.",
};

const Benefits = () => (
  <section className="benefits-section">
    <h2>Why Choose Tourixaa?</h2>
    <div className="benefits-grid">
      {[
        { icon: "🛫", title: "Easy Booking", desc: "Seamless online booking with instant confirmation." },
        { icon: "💰", title: "Best Price Guarantee", desc: "Competitive pricing with no hidden charges." },
        { icon: "🌟", title: "24/7 Customer Support", desc: "Always here to assist you anytime, anywhere." },
        { icon: "🔒", title: "Secure Payments", desc: "Safe and encrypted payment gateways for your peace of mind." },
        { icon: "📱", title: "Mobile Friendly", desc: "Book and manage your trips easily from any device." },
        { icon: "🎉", title: "Exclusive Deals & Rewards", desc: "Access to special offers and loyalty rewards for frequent travelers." },
      ].map((item, idx) => (
        <div className="benefit-card" key={idx}>
          <span className="benefit-icon">{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default function Offers() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", package: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gift Claimed:", formData);
    alert("Gift claimed successfully! 🎁");
    setFormData({ name: "", email: "", package: "" });
    setShowModal(false);
  };

  return (
    <div className="offers-page">
      <h1>Exclusive Offers</h1>
      <div className="carousel">
        {offers.map((offer, index) => (
          <div className="offer-slide" key={index}>
            <img src={offer.imageUrl} alt={offer.title} />
            <div className="offer-content">
              <h2>{offer.title}</h2>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="main-benefit-section">
        <div className="main-benefit-card glow">
          <div className="benefit-icon">{mainTourixaaBenefit.icon}</div>
          <h3 className="benefit-title">{mainTourixaaBenefit.title}</h3>
          <p className="benefit-desc">{mainTourixaaBenefit.description}</p>
          <button className="claim-btn" onClick={() => setShowModal(true)}>Claim Your Gift 🎁</button>
        </div>
      </section>

      <Benefits />

      {showModal && (
        
    
        <div className="modal-backdrop">
          <div className="modal">
            <h2>🎁 Claim Your Gift</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
              <input type="text" name="package" placeholder="Interested Package (optional)" value={formData.package} onChange={handleChange} />
              <button type="submit" className="submit-btn">Submit</button>
            </form>
            <button className="close-btn" onClick={() => setShowModal(false)}>✖ Close</button>
          </div>
        </div>
    
      )}
    </div>
  );
}