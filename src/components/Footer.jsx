import React from "react";
import "./Footer.css";

const quickLinks = [
  "Company Overview",
  "Our Services",
  "Media & Publications",
  "Blog",
  "Contact Us",
  "Tracking",
  "About Us",
];

const usefulLinks = [
  "Create Shipping",
  "Tracking",
  "Shipment History",
  "Quote",
  "Button Accordion",
  "Tracking Result",
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">

        <div className="row gy-5">

          {/* Company Info */}
          <div className="col-lg-3 col-md-6">
            
            <p className="footer-text">
         Fast, secure, and reliable transportation of goods from the sender to the destination.

            </p>

            <ul className="contact-list">
              <li>
                <i className="fas fa-phone-alt"></i>
                +9233409658
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                uaxservice@gmail.com
              </li>

              <li>
                <i className="fas fa-fax"></i>
                +88 02 123456
              </li>
            </ul>

            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>

              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>

              <a href="#">
                <i className="fas fa-rss"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">QUICK LINKS</h4>

            <ul className="footer-links">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a href="/">
                    <i className="fas fa-angle-right"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">USEFUL LINKS</h4>

            <ul className="footer-links">
              {usefulLinks.map((item, index) => (
                <li key={index}>
                  <a href="/">
                    <i className="fas fa-angle-right"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-title">OPENING HOURS</h4>

            <div className="hours">
              <div className="hour-item">
                <span>Mon to Fri:</span>
                <span>09:30AM - 05:30PM</span>
              </div>

              <div className="hour-item">
                <span>Sun:</span>
                <span>Closed</span>
              </div>
            </div>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
              />

              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p>
              COPYRIGHT © 2025 <span>WORLD SHIPPING</span>.
              ALL RIGHTS RESERVED
            </p>

            <p>
              DESIGN & DEVELOPMENT BY:
              <span> YOUR COMPANY</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;