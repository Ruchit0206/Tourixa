import React, { useState } from "react";
import packages from "../Inquiry/packages";
import emailjs from "emailjs-com";

function PackagesList({ formData, prevStep, nextStep }) {
  const { destination, travelers, userName, userEmail, departureDate, returnDate } = formData;

  const [selectedPackageId, setSelectedPackageId] = useState(null);

  // Filter packages based on selected destination and max travelers
  const filteredPackages = packages.filter((pkg) => {
    if (pkg.destination !== destination) return false;
    if (parseInt(travelers) > pkg.maxTravelers) return false;
    return true;
  });

  const handleSelect = (e) => {
    setSelectedPackageId(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedPackageId) {
      alert("Please select a package before submitting.");
      return;
    }

    const selectedPackage = filteredPackages.find(
      (pkg) => String(pkg.id) === selectedPackageId
    );

    if (!selectedPackage) {
      alert("Selected package not found.");
      return;
    }

    const templateParams = {
  to_email: userEmail,
  user_name: userName || "Guest",
  user_email: userEmail || "Not provided",
  package_destination: selectedPackage.destination,
  package_description: selectedPackage.description,
  package_price: selectedPackage.price,
  travelers: travelers,
  departure_date: departureDate,
  return_date: returnDate,
};


    emailjs
      .send(
        "service_lr9tfn8",   // Your EmailJS service ID
        "template_qx9knhg",  // Your EmailJS template ID
        templateParams,
        "rysnNr2iULZpL1x7V" // Your EmailJS public key
      )
      .then(
        (response) => {
          alert("Booking email sent successfully!");
          nextStep();
        },
        (error) => {
          alert("Failed to send email. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div>
      <h2>Available Packages</h2>

      {filteredPackages.length > 0 ? (
        filteredPackages.map((pkg) => (
          <div key={pkg.id} className="package-card" style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px", display: "flex", alignItems: "center" }}>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer", width: "100%" }}>
              <input
                type="checkbox"
                name="packageSelect"
                value={pkg.id}
                checked={selectedPackageId === String(pkg.id)}
                onChange={handleSelect}
                style={{ width: "20px", marginRight: "1rem" }}
              />
              <div>
                <h3>{pkg.destination}</h3>
                <p>{pkg.description}</p>
                <p><strong>Max Travelers:</strong> {pkg.maxTravelers}</p>
                <p><strong>Available:</strong> {pkg.availableFrom} to {pkg.availableTo}</p>
                <p><strong>Price:</strong> ${pkg.price}</p>
              </div>
            </label>
          </div>
        ))
      ) : (
        <p>No packages found matching your criteria.</p>
      )}

      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit} disabled={!selectedPackageId} style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default PackagesList;
