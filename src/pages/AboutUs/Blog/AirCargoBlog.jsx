import React from "react";
import "./AirCargoBlog.css";

const AirCargoBlog = () => {
  return (
    <section className="air-blog-section py-5">
      <div className="container">
        <div className="row g-4">

          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="tags-widget">
              <h5 className="widget-title">TAGS</h5>

              <div className="tags-container">
                <span>LOGISTICS</span>
                <span>HOW TO BUILD</span>
                <span>CARGO SERVICES</span>
                <span>TIPS</span>
                <span>LATEST OFFERS</span>
                <span>SEA & TRUCKING</span>
              </div>
            </div>
          </div>

          {/* Main Blog Card */}
          <div className="col-lg-9">
            <div className="blog-card">

              <div className="blog-image">
                <img
                  src="/public/assets/images/Airfreight2.jpg"
                  alt="Air Cargo"
                />
              </div>

              <div className="blog-content">
                <div className="row">
                  <div className="col-auto">

                    <div className="date-box">
                      <span>Mar</span>
                      <h2>26</h2>
                      <small>2026</small>
                    </div>

                  </div>

                  <div className="col">

                    <h3>
                      SHIPPING CONTAINER ALL INTERNATIONAL
                      TRANSPORT
                    </h3>

                    <div className="meta-info">
                      <span>
                        <i className="bi bi-person-fill"></i>
                        Posted By Razu Ahmed
                      </span>

                      <span>
                        <i className="bi bi-heart-fill"></i>
                        10 favorites
                      </span>

                      <span>
                        <i className="bi bi-chat-left-text-fill"></i>
                        12 comments
                      </span>
                    </div>

                    <p>
                      A fast and reliable update or shipment service related to transporting goods by air for timely global delivery.
                    </p>

                    <button className="read-btn">
                      CONTINUE READING
                    </button>

                  </div>
                </div>
              </div>

              <div className="blog-footer">

                <div>
                  <i className="bi bi-hand-thumbs-up"></i>
                  <i className="bi bi-chat"></i>
                </div>

                <div>
                  <i className="bi bi-heart-fill"></i>
                  <i className="bi bi-share-fill"></i>
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AirCargoBlog;