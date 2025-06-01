import React, { useState } from "react";
import StepOne from "./StepOne";
import PackagesList from "./PackagesList";  // Import new component
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
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const resetForm = () => {
    setFormData({
      destination: "",
      departureDate: "",
      returnDate: "",
      travelers: "",
    });
    setStep(1);
  };

  return (
    <div className="form-container">
      <h1>Tourixaa International Booking</h1>
      <ProgressBar step={step} />

      {step === 1 && (
        <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}

      {step === 2 && (
        <PackagesList
          formData={formData}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}

      {step === 3 && <SuccessPage resetForm={resetForm} />}
    </div>
  );
}

export default International;
