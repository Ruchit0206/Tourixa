import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';

const destinations = [
  { value: 'paris', label: 'Paris, France' },
  { value: 'tokyo', label: 'Tokyo, Japan' },
  { value: 'newyork', label: 'New York, USA' },
  { value: 'london', label: 'London, UK' },
  { value: 'sydney', label: 'Sydney, Australia' },
  { value: 'dubai', label: 'Dubai, UAE' },
];

const travelPackages = [
  {
    id: 1,
    destination: 'paris',
    description: 'Romantic getaway to Paris',
    maxTravelers: 4,
    availableFrom: '2025-06-01',
    availableTo: '2025-06-30',
    price: 1200,
  },
  {
    id: 2,
    destination: 'tokyo',
    description: 'Vibrant life of Tokyo',
    maxTravelers: 5,
    availableFrom: '2025-06-01',
    availableTo: '2025-06-20',
    price: 1400,
  },
];

const InquireUs = () => {
  const today = new Date();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    departureDate: null,
    returnDate: null,
    travelers: 1,
    userName: '',
    userEmail: '',
  });
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStepOne = () => {
    const newErrors = {};
    if (!formData.destination) newErrors.destination = 'Select a destination';
    if (!formData.departureDate) newErrors.departureDate = 'Select departure date';
    if (!formData.returnDate) newErrors.returnDate = 'Select return date';
    if (formData.departureDate && formData.returnDate && new Date(formData.returnDate) < new Date(formData.departureDate)) {
      newErrors.returnDate = "Return date can't be before departure";
    }
    if (!formData.userName.trim()) newErrors.userName = 'Enter your name';
    if (!formData.userEmail.trim()) newErrors.userEmail = 'Enter your email';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.userEmail)) newErrors.userEmail = 'Invalid email';
    }
    return newErrors;
  };

  const handleStepOneSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateStepOne();
    if (Object.keys(validationErrors).length === 0) {
      setStep(2);
    } else {
      setErrors(validationErrors);
    }
  };

  const availablePackages = travelPackages.filter(
    (pkg) =>
      pkg.destination === formData.destination &&
      formData.travelers <= pkg.maxTravelers
  );

  const handleSubmitFinal = () => {
    const selectedPkg = availablePackages.find((p) => p.id === parseInt(selectedPackageId));
    if (!selectedPkg) return alert('Select a package');

    const params = {
      to_email: formData.userEmail,
      user_name: formData.userName,
      package_destination: selectedPkg.destination,
      package_description: selectedPkg.description,
      package_price: selectedPkg.price,
      travelers: formData.travelers,
      departure_date: formData.departureDate.toISOString().split('T')[0],
      return_date: formData.returnDate.toISOString().split('T')[0],
    };

    emailjs
      .send('service_lr9tfn8', 'template_qx9knhg', params, 'rysnNr2iULZpL1x7V')
      .then(() => setStep(3))
      .catch((err) => {
        console.error(err);
        alert('Failed to send. Try again.');
      });
  };

  const resetForm = () => {
    setFormData({
      destination: '',
      departureDate: null,
      returnDate: null,
      travelers: 1,
      userName: '',
      userEmail: '',
    });
    setSelectedPackageId(null);
    setStep(1);
    setErrors({});
  };

  return (
    <PageLayout>
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">Plan Your Trip</h1>

      {step === 1 && (
        <form onSubmit={handleStepOneSubmit} className="space-y-6 input-style">
          <div>
            <label className="block font-medium mb-1">Destination</label>
            <Dropdown
              value={formData.destination}
              options={destinations}
              onChange={(e) => handleChange('destination', e.value)}
              placeholder="Choose a destination"
              className="w-full"
            />
            {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Departure Date</label>
              <Calendar
                value={formData.departureDate}
                onChange={(e) => handleChange('departureDate', e.value)}
                minDate={today}
                showIcon
                className="w-full"
                dateFormat="yy-mm-dd"
              />
              {errors.departureDate && <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Return Date</label>
              <Calendar
                value={formData.returnDate}
                onChange={(e) => handleChange('returnDate', e.value)}
                minDate={formData.departureDate || today}
                showIcon
                className="w-full"
                dateFormat="yy-mm-dd"
              />
              {errors.returnDate && <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Travelers</label>
            <InputNumber
              value={formData.travelers}
              onValueChange={(e) => handleChange('travelers', e.value)}
              min={1}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <InputText
                value={formData.userName}
                onChange={(e) => handleChange('userName', e.target.value)}
                className="w-full"
              />
              {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Your Email</label>
              <InputText
                value={formData.userEmail}
                onChange={(e) => handleChange('userEmail', e.target.value)}
                className="w-full"
              />
              {errors.userEmail && <p className="text-red-500 text-sm mt-1">{errors.userEmail}</p>}
            </div>
          </div>

          <div className="text-center mt-6">
            <Button
              label="Next Step"
              icon="pi pi-arrow-right"
              type="submit"
              className="bg-teal-600 border-0 text-white px-6 py-3 rounded-lg hover:bg-teal-700 text-base shadow-md"
            />
          </div>
        </form>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold text-center mb-6">Select a Package</h2>
          {availablePackages.length ? (
            availablePackages.map((pkg) => (
              <Card key={pkg.id} className={`mb-4 ${selectedPackageId == pkg.id ? 'ring-2 ring-teal-500' : ''}`}>
                <div className="flex items-start gap-4">
                  <input
                    type="radio"
                    name="package"
                    checked={selectedPackageId == pkg.id}
                    value={pkg.id}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="mt-2"
                  />
                  <div>
                    <h3 className="font-bold capitalize">{pkg.destination}</h3>
                    <p>{pkg.description}</p>
                    <p><strong>Available:</strong> {pkg.availableFrom} – {pkg.availableTo}</p>
                    <p><strong>Price:</strong> ${pkg.price}</p>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">No packages available for this destination.</p>
          )}

          <div className="flex justify-center gap-4 mt-6">
            <Button label="Back" onClick={() => setStep(1)} className="p-button-secondary" />
            <Button
              label="Submit"
              icon="pi pi-check"
              disabled={!selectedPackageId}
              onClick={handleSubmitFinal}
              className="bg-teal-600 border-0 text-white px-5 py-2 rounded-lg hover:bg-teal-700 text-base shadow-md"
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">🎉 Thank you!</h2>
          <p>Your inquiry has been submitted successfully.</p>
          <Button
            label="Submit Another"
            icon="pi pi-refresh"
            onClick={resetForm}
            className="mt-6 bg-blue-600 border-0 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          />
        </div>
      )}
    </div>
    </PageLayout>
  );
};

export default InquireUs;
