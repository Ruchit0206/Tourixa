import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Offers.css";

const offers = [
  {
    title: "Summer Special: 30% Off",
    description:
      "Enjoy your summer vacation with an amazing 30% discount on select packages.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Family Package: Kids Travel Free",
    description:
      "Bring your family along and kids travel absolutely free on all domestic tours.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Family Package: Kids Travel Free",
    description:
      "Bring your family along and kids travel absolutely free on all domestic tours.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Family Package: Kids Travel Free",
    description:
      "Bring your family along and kids travel absolutely free on all domestic tours.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Early Bird Offer",
    description:
      "Book your tour 3 months in advance and get exclusive perks & gifts.",
    imageUrl:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
  },
];

const GiftClaimForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onCancel]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: `Gift claim request from ${name}`,
    };

    emailjs
      .send(
        "service_lr9tfn8",
        "template_es04yxe",
        templateParams,
        "rysnNr2iULZpL1x7V"
      )
      .then(
        () => {
          setSubmitting(false);
          onSubmit();
          setName("");
          setEmail("");
          setPhone("");
        },
        (error) => {
          setSubmitting(false);
          alert(
            "Oops! Something went wrong while sending your request. Please try again."
          );
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div
      className="modal-overlay"
      onClick={onCancel}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2
          id="modal-title"
          style={{
            color: "#ca8a04",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Please Fill Your Details
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={firstInputRef}
            aria-label="Full Name"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email Address"
            required
          />
          <input
  type="tel"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  aria-label="Phone Number"
  required
  inputMode="numeric"
  pattern="[0-9]*"
  onKeyPress={(e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }}
/>

          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            style={{ marginTop: "10px", backgroundColor: "#aaa" }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

const SuccessMessage = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="success-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 id="success-title" style={{ color: "#ca8a04" }}>
          Congratulations!
        </h2>
        <p>
          You have successfully claimed your exclusive travel kit. Our team will
          contact you soon!
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default function Offers() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleClaimClick = () => {
    setShowFormModal(true);
  };

  const handleFormSubmit = () => {
    setShowFormModal(false);
    setShowSuccessModal(true);
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
          <div className="benefit-icon">🎁</div>
          <h3 className="benefit-title">Special Gift & Package Offer</h3>
          <p className="benefit-desc">
            Book any package with <strong>Tourixaa</strong> and receive an
            exclusive travel kit along with a premium combo of useful items to
            enhance your journey.
          </p>
          <div className="package-details">
            <h4 className="package-title">What You'll Get:</h4>
            <ul className="package-items-list">
              <li>🥤 Branded Water Bottle</li>
              <li>☕ Premium Coffee Packet</li>
              <li>🪥 Travel Comb</li>
              <li>🍳 Kitchen</li>
              <li>🖊️ Quality Pen</li>
              <li>📒 Diary for memorable moments</li>
              <li>And many more..</li>
            </ul>
          </div>

          <button className="claim-btn" onClick={handleClaimClick}>
            Claim Your Gift 🎁
          </button>
        </div>
      </section>

      {showFormModal && (
        <GiftClaimForm
          onSubmit={handleFormSubmit}
          onCancel={() => setShowFormModal(false)}
        />
      )}
      {showSuccessModal && (
        <SuccessMessage onClose={() => setShowSuccessModal(false)} />
      )}
    </div>
  );
}
