import React, { useState } from "react";
import "./ShipmentForm.css";

function ShipmentForm() {
  const [formData, setFormData] = useState({
    company_Name: "",
    contact: "",
    city: "",
    email: "",
    destination_Company: "",
    destination_City: "",
    packaging_Type: "",
    weight: "",
    pickup_Choice: "",
    delivery_Details: "",
    card_Type: "",
    card_Number: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully ✔");
        console.log(data);

        // optional reset
        setFormData({
          company_Name: "",
          contact: "",
          city: "",
          email: "",
          destination_Company: "",
          destination_City: "",
          packaging_Type: "",
          weight: "",
          pickup_Choice: "",
          delivery_Details: "",
          cardType: "",
          card_Number: "",
          agree: false,
        });
      } else {
        alert("Error submitting form ❌");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Submited Succesfuly");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="shipment-section">
      <div className="container">

        <h2 className="main-title">
          Create New Shipping
        </h2>

        <form className="shipment-card" onSubmit={handleSubmit}>

          {/* STEP 1 */}
          <h4>1. Where From</h4>

          <div className="row">

            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Company Name" required name="companyName" value={formData.companyName} onChange={handleChange} />
            </div>

            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Contact" name="contact" value={formData.contact} onChange={handleChange} />
            </div>

            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="City" required name="city" value={formData.city} onChange={handleChange} />
            </div>

            <div className="col-md-6 mb-3">
              <input type="email" className="form-control" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            </div>

          </div>

          {/* STEP 2 */}
          <h4>2. Where Going</h4>

          <div className="row">

            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Destination Company" name="destinationCompany" value={formData.destinationCompany} onChange={handleChange} />
            </div>

            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Destination City" name="destinationCity" value={formData.destinationCity} onChange={handleChange} />
            </div>

          </div>

          {/* STEP 3 */}
          <h4>3. Package Information</h4>

          <div className="row">

            <div className="col-md-6 mb-3">
              <select className="form-select" name="packagingType" value={formData.packagingType} onChange={handleChange}>
                <option value="">Select Packaging</option>
                <option>Customer Packaging</option>
                <option>Small Box</option>
                <option>Large Box</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <input type="number" className="form-control" placeholder="Weight" name="weight" value={formData.weight} onChange={handleChange} />
            </div>

          </div>

          {/* STEP 4 */}
          <h4>4. Shipping Method</h4>

          <div className="mb-3">
            <select className="form-select" name="pickupChoice" value={formData.pickupChoice} onChange={handleChange}>
              <option value="">Select Method</option>
              <option>Pickup</option>
              <option>Drop Off</option>
            </select>
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Delivery Details" name="deliveryDetails" value={formData.deliveryDetails} onChange={handleChange} />
          </div>

          {/* STEP 5 */}
          <h4>5. Payment</h4>

          <div className="row">

            <div className="col-md-6 mb-3">
              <select className="form-select" name="cardType" value={formData.cardType} onChange={handleChange}>
                <option value="">Select Card</option>
                <option>Visa</option>
                <option>Master Card</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Card Number" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
            </div>

          </div>

          {/* STEP 6 */}
          <h4>6. Review & Terms</h4>

          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
            <label className="form-check-label">
              I agree to Terms & Conditions
            </label>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="btn btn-success submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Complete Shipment"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default ShipmentForm;