import { useState } from "react";
import "./QuoteSection.css";

function QuoteSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    destinationFrom: "",
    destinationTo: "",
    shippingType: "",
    shippingDate: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.mobile ||
      !formData.destinationFrom ||
      !formData.destinationTo
    ) {
      setStatus({ loading: false, success: false, message: "Please fill all required fields." });
      return;
    }

    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, success: true, message: data.message });
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          destinationFrom: "",
          destinationTo: "",
          shippingType: "",
          shippingDate: "",
          message: "",
        });
      } else {
        setStatus({ loading: false, success: false, message: data.message || "Something went wrong." });
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      setStatus({ loading: false, success: false, message: "Server error. Please try again later." });
    }
  };

  return (
    <section className="quote-section">
      <div className="container-fluid p-0">
        <div className="row g-0">

          {/* Left Side */}
          <div className="col-lg-6 quote-left">

            <div className="quote-content">

              <h2>GET A FREE QUOTE</h2>

              <p>
                WE ALWAYS USE BEST & FASTEST FLEETS
              </p>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />

                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="destinationFrom"
                      className="form-control"
                      placeholder="Destination From"
                      value={formData.destinationFrom}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="destinationTo"
                      className="form-control"
                      placeholder="Destination To"
                      value={formData.destinationTo}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="shippingType"
                      className="form-control"
                      placeholder="Shipping Type"
                      value={formData.shippingType}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="date"
                      name="shippingDate"
                      className="form-control"
                      value={formData.shippingDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <textarea
                  rows="4"
                  name="message"
                  className="form-control mt-3"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>





                {status.message && (
                  <p
                    className="mt-3"
                    style={{ color: status.success ? "white" : "white", fontSize:19 }}
                  >
                    {status.message}
                    {status.success && window.alert("Submitted successfully")}
                  </p>
                )}


                <button type="submit" className="quote-btn mt-3" disabled={status.loading}>
                  {status.loading ? "SENDING..." : "SEND US QUOTE"}
                </button>

              </form>

            </div>

          </div>

          {/* Right Side Image */}
          <div className="col-lg-6">
            <div className="quote-image"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default QuoteSection;