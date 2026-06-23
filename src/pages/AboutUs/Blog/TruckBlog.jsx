import React from "react";
import "./TruckBlog.css";

const TruckBlog = () => {
  return (
    <section className="truck-blog-section py-5">
      <div className="container">

        <div className="blog-card">

          {/* Image */}
          <div className="blog-image">
            <img
              src="/public/assets/images/Carfreight3.jpg"
              alt="Truck"
            />
          </div>

          {/* Content */}
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
                  SHIPPING CONTAINER ALL INTERNATIONAL TRANSPORT
                </h3>

                <div className="meta">
                  <span>
                    <i className="bi bi-person-fill"></i>
                    Razu Ahmed
                  </span>

                  <span>
                    <i className="bi bi-heart"></i>
                    10 favorites
                  </span>

                  <span>
                    <i className="bi bi-chat-left-text"></i>
                    12 comments
                  </span>
                </div>

                <p>
                  A logistics update or service related to the safe and efficient transportation of goods by road using trucks.
                </p>

                <button className="read-btn">
                  CONTINUE READING
                  <i className="bi bi-chevron-right ms-2"></i>
                </button>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="blog-footer">

            <div className="left-icons">
              <i className="bi bi-hand-thumbs-up"></i>
              <i className="bi bi-chat"></i>
            </div>

            <div className="right-icons">
              <i className="bi bi-heart-fill"></i>
              <i className="bi bi-share-fill"></i>
              <i className="bi bi-chat-dots-fill"></i>
            </div>

          </div>

        </div>

        {/* Pagination */}
        <div className="pagination-wrapper mt-5">
          <button>
            <i className="bi bi-chevron-left"></i>
          </button>

          <button className="active">1</button>
          <button>2</button>
          <button>3</button>

          <button>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TruckBlog;