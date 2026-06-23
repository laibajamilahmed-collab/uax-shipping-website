
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">

        {/* Logo */}
        <Link  to="/">
           <img className="logo" src="/public/assets/images/Logo.jpeg" alt="logo" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                HOME
              </Link>
            </li>

            {/* Services */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/services"
                role="button"
                data-bs-toggle="dropdown"
              >
                SERVICES
              </Link>

              <ul className="dropdown-menu">

                <li>
                  <Link className="dropdown-item" to="/Our Services">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/air-freight">
                    Air Freight
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ocean-freight">
                    Ocean Freight
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/car-freight">
                    Car Freight
                  </Link>
                </li>
              </ul>
            </li>

            {/* Shipping */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/shipping"
                role="button"
                data-bs-toggle="dropdown"
              >
                SHIPPING
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/CreateShipment">
                    Create New Shipment
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/ShipmentList">
                    Current Shipment List
                  </Link>
                </li>
              </ul>
            </li>

            {/* Booking */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/booking"
                role="button"
                data-bs-toggle="dropdown"
              >
                TRACKING
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/tracking">
                    Tracking
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/login">
                    Customer Login
                  </Link>
                </li>
                    <li>
                  <Link className="dropdown-item" to="/register">
                    Customer Register
                  </Link>
                </li>

              </ul>
            </li>

            {/* Blog */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/blog"
                role="button"
                data-bs-toggle="dropdown"
              >
                ABOUT US
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/About">
                    Company Overview
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/Blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT US
              </Link>
            </li>

            {/* Search Icon */}
            <li className="nav-item ms-lg-3">
              <button className="search-btn">
                <i className="bi bi-search"></i>
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;