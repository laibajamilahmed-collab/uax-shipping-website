import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ServiceBanner from "../components/ServiceBanner/ServiceBanner";

import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <Navbar />

      <ServiceBanner />

      <div className="container py-5">

        <h2>Our Services</h2>

        <div className="row">

          <div className="col-md-6">

            <div className="card p-4">

              <h4>Air Freight</h4>

              <Link
                className="btn btn-danger"
                to="/air-freight"
              >
                View Details
              </Link>

            </div>

          </div>

          <div className="col-md-6">

            <div className="card p-4">

              <h4>Ocean Shipping</h4>

              <Link
                className="btn btn-danger"
                to="/ocean-shipping"
              >
                View Details
              </Link>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Services;