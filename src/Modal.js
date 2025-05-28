// Modal.js
import React from "react";
import "./Modal.css";  // You can style modal as you like

export default function Modal({ show, onClose, title, description }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{title}</h2>
        <div>{description}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
