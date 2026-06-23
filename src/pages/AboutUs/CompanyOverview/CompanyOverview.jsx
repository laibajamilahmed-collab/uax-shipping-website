import React from "react";
import "./CompanyOverview.css";

const CompanyOverview = () => {
  const features = [
    {
      icon: "fas fa-handshake",
      title: "WE ARE TRUSTED",
    },
    {
      icon: "fas fa-lock",
      title: "THE BEST SECURITY",
    },
    {
      icon: "fas fa-thumbs-up",
      title: "100% GUARANTEE",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "QUICK LOCATION",
    },
  ];

  return (
    <section className="company-overview-section">
      <div className="container">
        <div className="row g-4">

          {/* Sidebar */}
          <div className="col-lg-3">

            <div className="sidebar-card">

              <div className="sidebar-title">
                COMPANY OVERVIEW
              </div>

              <ul className="sidebar-menu">
                <li>
                  ASPIRATION & VISION
                  <i className="fas fa-angle-right"></i>
                </li>

                <li>
                  STRATEGIES
                  <i className="fas fa-angle-right"></i>
                </li>

                <li>
                  QUALITY POLICY
                  <i className="fas fa-angle-right"></i>
                </li>
              </ul>

            </div>

            {/* Latest News */}

            <h5 className="news-heading">
              LATEST NEWS
            </h5>

            <div className="news-card">
              <div className="news-content">
                <h6>News Title</h6>
                <small>by Admin</small>
                <p>Stay informed with the latest updates, and industry insights from our company and the logistics world.</p>
              </div>

              <div className="news-date">
                28
                <span>FEB</span>
              </div>
            </div>

            <div className="news-card">
              <div className="news-content">
                <h6>News Title</h6>
                <small>by Admin</small>
                <p>Stay informed with the latest updates, and industry insights from our company and the logistics world.</p>
              </div>

              <div className="news-date">
                28
                <span>FEB</span>
              </div>
            </div>

            <button className="quote-btn">
              SEND US QUOTE
            </button>

            {/* Testimonial */}

            <h5 className="testimonial-title">
              CLIENTS TESTIMONIAL
            </h5>

            <div className="testimonial-card">

              <img
                src="/public/assets/images/Testimonials1.jpg"
                alt=""
              />

              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>

                <p>
                   We proudly serve a diverse range of clients.
                </p>

                <i className="fas fa-quote-right"></i>
              </div>

            </div>

          </div>

          {/* Main Content */}

          <div className="col-lg-9">

            <h2 className="overview-title">
              COMPANY OVERVIEW
            </h2>

            <img
              src="/public/assets/images/Oceanfreight3.jpg"
              alt=""
              className="overview-image"
            />

            <div className="overview-content">
              <p>
                Our company is a trusted provider of comprehensive logistics and freight solutions, serving businesses and individuals worldwide. We specialize in air, ocean, and land transportation services tailored to meet diverse shipping needs.
              </p>

              <p>
                With years of industry experience, we are committed to delivering reliable, efficient, and cost-effective logistics solutions. Our skilled team works closely with clients to ensure smooth operations and timely deliveries.
              </p>

              <p>
                We utilize modern technology and a strong transportation network to enhance service quality and visibility. Customer satisfaction, safety, and transparency are at the core of everything we do. By maintaining high standards and continuous improvement, we build lasting relationships with our customers.
              </p>
            </div>

            {/* Why Choose Us */}

            <div className="choose-us">

              <h4>
                WHY CHOOSE US?
              </h4>

              <div className="red-line"></div>

              <div className="row mt-4">

                {features.map((item, index) => (
                  <div
                    className="col-6 col-md-3"
                    key={index}
                  >
                    <div className="feature-box">

                      <div className="feature-icon">
                        <i className={item.icon}></i>
                      </div>

                      <h6>{item.title}</h6>

                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;