import React from "react";
import "./AirFreightSection.css";

const advantages = [
  {
    icon: "fas fa-handshake",
    title: "WE ARE TRUSTED",
    desc: "Trusted by businesses and individuals for reliable, secure, and efficient logistics solutions",
  },
  {
    icon: "fas fa-lock",
    title: "THE BEST SECURITY",
    desc: "We use advanced security measures to ensure your cargo remains safe throughout the shipping process.Our team carefully monitors and protects every shipment from pickup to final delivery.",
  },
  {
    icon: "fas fa-award",
    title: "100% GUARANTEE",
    desc: " We guarantee reliable, secure, and timely delivery of your shipments with complete customer satisfaction.",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "QUICK LOCATION",
    desc: "Strategically located to provide fast and efficient logistics services across local and international markets.Our extensive network ensures smooth transportation and timely delivery to every destination.",
  },
];

const AirFreightSection = () => {
  return (
    <section className="airfreight-section">
      <div className="container">
        <div className="row g-5 align-items-start">

          {/* Left Side */}
          <div className="col-lg-6">
            <h2 className="section-title">
              AIR FREIGHT
            </h2>

            <div className="gallery">
              <div className="main-image">
                <img
                  src="/public/assets/images/Airfreight3.jpg"
                  alt="Air Freight"
                />
              </div>

              <div className="row g-3 mt-1">
                <div className="col-6">
                  <div className="small-image">
                    <img
                      src="/public/assets/images/Airfreight2.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="small-image">
                    <img
                      src="/public/assets/images/Airfreight1.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <h2 className="section-title">
              OUR ADVANTAGES
            </h2>

            <div className="title-line"></div>

            {advantages.map((item, index) => (
              <div
                className="advantage-item"
                key={index}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div className="advantage-icon">
                  <i className={item.icon}></i>
                </div>

                <div className="advantage-content">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AirFreightSection;