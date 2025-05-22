import React, { useState } from 'react';

function StepTwo({ formData, setFormData, prevStep, onSuccess }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      onSuccess();
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 2: Personal Details</h2>

      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <label htmlFor="budget">Budget (₹)</label>
      <input
        type="number"
        id="budget"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
      />

      <label htmlFor="hotel">Hotel Preference</label>
      <input
        type="text"
        id="hotel"
        name="hotel"
        value={formData.hotel}
        onChange={handleChange}
      />

      <button type="button" onClick={prevStep}>
        ⬅ Back
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StepTwo;
