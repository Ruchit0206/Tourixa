import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import SuccessPage from "./SuccessPage";
import ProgressBar from "./ProgressBar";
import "./International.css";

function International() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: "",
    name: "",
    email: "",
    phone: "",
    budget: "",
    hotel: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const resetForm = () => {
    setFormData({
      destination: "",
      departureDate: "",
      returnDate: "",
      travelers: "",
      name: "",
      email: "",
      phone: "",
      budget: "",
      hotel: "",
    });
    setStep(1);
  };

  return (
    <div className="form-container">
      <h1>International Trip Booking</h1>
      <ProgressBar step={step} />

      {step === 1 && (
        <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          onSuccess={nextStep}
        />
      )}
      {step === 3 && <SuccessPage resetForm={resetForm} />}
    </div>
  );
}

export default International;
