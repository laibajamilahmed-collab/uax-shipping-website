import React from "react";
import "./ServiceBanner.css";

const ServiceBanner = () => {
  return (
    <section className="service-banner">
      <div className="banner-overlay"></div>

      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6">
            <div className="banner-content">
              <h1>OUR SERVICES</h1>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-lg-end">
            <div className="banner-message">
              <h4>
                We freight to all over the world. The best logistic
                company. <span>FAST</span> and <span>SAFELY!</span>
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;