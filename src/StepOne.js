import React, { useState } from 'react';
import destinations from './destinations';  // adjust path if needed

function StepOne({ formData, setFormData, nextStep }) {
  const [errors, setErrors] = useState({});
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.destination) newErrors.destination = "Select a destination";
    if (!formData.departureDate) newErrors.departureDate = "Select departure date";
    if (!formData.returnDate) newErrors.returnDate = "Select return date";
    if (formData.departureDate && formData.returnDate) {
      if (formData.returnDate < formData.departureDate)
        newErrors.returnDate = "Return date can't be before departure date";
    }
    if (!formData.travelers || formData.travelers < 1)
      newErrors.travelers = "Number of travelers must be at least 1";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      nextStep();
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 1: Trip Details</h2>

      <label htmlFor="destination">Destination</label>
      <select
        id="destination"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
      >
        <option value="">-- Select --</option>
        {destinations.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {errors.destination && <p className="error">{errors.destination}</p>}

      <label htmlFor="departureDate">Departure Date</label>
      <input
        type="date"
        id="departureDate"
        name="departureDate"
        value={formData.departureDate}
        min={today}
        onChange={handleChange}
      />
      {errors.departureDate && <p className="error">{errors.departureDate}</p>}

      <label htmlFor="returnDate">Return Date</label>
      <input
        type="date"
        id="returnDate"
        name="returnDate"
        value={formData.returnDate}
        min={formData.departureDate || today}
        onChange={handleChange}
      />
      {errors.returnDate && <p className="error">{errors.returnDate}</p>}

      <label htmlFor="travelers">Number of Travelers</label>
      <input
        type="number"
        id="travelers"
        name="travelers"
        value={formData.travelers}
        min="1"
        onChange={handleChange}
      />
      {errors.travelers && <p className="error">{errors.travelers}</p>}

      <button type="submit">Next</button>
    </form>
  );
}

export default StepOne;
