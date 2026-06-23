import React, { useState } from "react";
import "./Quote.css";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Quote Request Submitted!");
  };

  return (
    <section className="quote-section">
      <div className="container">
        <div className="row g-5">

          {/* Left Content */}
          <div className="col-lg-7">
            <div className="content-area fade-up">

              <div className="download-buttons">
                <button className="download-btn">
                  Download Brochure
                </button>

                <button className="download-btn">
                  Download Pricelist
                </button>
              </div>

              <div className="content-text">
                <p>
                  Request a personalized shipping quote and discover cost-effective logistics solutions tailored to your needs. Our team carefully evaluates your cargo requirements to provide accurate pricing and efficient transportation options.
                </p>

                <p>
                  We are committed to transparency, reliability, and exceptional customer service throughout the process. Whether you need air, ocean, or land freight services, we offer flexible solutions for businesses and individuals.
                </p>

                <p>
                  Simply share your shipment details, and we will prepare a competitive quote promptly. Our streamlined process ensures quick responses and hassle-free booking. Get in touch today and let us help move your cargo safely and efficiently to its destination.
                </p>

                <p>
                Our dedicated support team is always available to answer your questions and guide you through every step of the shipping process.
Choose us for dependable logistics services that prioritize speed, security, and customer satisfaction.
                </p>
              </div>

            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-5">
            <div className="quote-card fade-up">

              <div className="quote-header">
                GET A QUOTE ON RENOVATION
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control custom-input"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control custom-input"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="phone"
                    className="form-control custom-input"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    rows="5"
                    name="message"
                    className="form-control custom-input"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="quote-btn"
                >
                  GET A FREE QUOTE
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Quote;