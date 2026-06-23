import React, { useState } from "react";
import axios from "axios";
import "./ShipmentTracking.css";

const ShipmentTracking = () => {
  const [activeTab, setActiveTab] = useState("number");
  const [trackingId, setTrackingId] = useState("");
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingId) {
      alert("Please enter a Tracking ID");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:5000/api/tracking/${trackingId}`
      );

      setShipment(response.data.shipment);
    } catch (error) {
      alert("Shipment Not Found");
      setShipment(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="tracking-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="tracking-title">
            TRACK A SHIPMENT
          </h2>

          <p className="tracking-subtitle">
            Track your shipment by entering your tracking ID below.
          </p>
        </div>

        <div className="row justify-content-center g-4">

          <div className="col-lg-8">

            <div className="tracking-card">

              <div className="tracking-tabs">

                <button
                  className={activeTab === "number" ? "active" : ""}
                  onClick={() => setActiveTab("number")}
                >
                  Track by Number
                </button>

                <button
                  className={activeTab === "reference" ? "active" : ""}
                  onClick={() => setActiveTab("reference")}
                >
                  Track by Reference
                </button>

              </div>

              <div className="tracking-content">

                <h4>AIR FREIGHT TRACKING</h4>

                <div className="tracking-form">

                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) =>
                      setTrackingId(e.target.value)
                    }
                    placeholder={
                      activeTab === "number"
                        ? "Enter Tracking ID"
                        : "Enter Reference Number"
                    }
                  />

                  <button onClick={handleTrack}>
                    {loading ? "TRACKING..." : "TRACK"}
                  </button>

                </div>

                <div className="tracking-links">
                  <a href="/">NEED HELP ?</a>
                  <span>|</span>
                  <a href="/">YOUR ORDER LIST</a>
                </div>

                {shipment && (
                  <div
                    className="mt-4 p-3 border rounded bg-light"
                  >
                    <h5>Shipment Details</h5>

                    <p>
                      <strong>Tracking ID:</strong>{" "}
                      {shipment.tracking_id}
                    </p>

                    <p>
                      <strong>Customer:</strong>{" "}
                      {shipment.customer_name}
                    </p>

                    <p>
                      <strong>Origin:</strong>{" "}
                      {shipment.origin}
                    </p>

                    <p>
                      <strong>Current Location:</strong>{" "}
                      {shipment.current_location}
                    </p>

                    <p>
                      <strong>Destination:</strong>{" "}
                      {shipment.destination}
                    </p>

                    <p>
                      <strong>Shipment Type:</strong>{" "}
                      {shipment.shipment_type}
                    </p>

                    <p>
                      <strong>Status:</strong>{" "}
                      {shipment.status}
                    </p>

                    <p>
                      <strong>Estimated Delivery:</strong>{" "}
                      {shipment.estimated_delivery}
                    </p>
                  </div>
                )}

              </div>

            </div>
          </div>

          <div className="col-lg-3">

            <div className="freight-box">

              <div className="freight-title">
                SELECT YOUR FREIGHT
              </div>

              <ul>

                <li className="active">
                  AIR FREIGHT TRACKING
                  <span>›</span>
                </li>

                <li>
                  OCEAN FREIGHT TRACKING
                  <span>›</span>
                </li>

                <li>
                  ROAD & RAIL FREIGHT TRACKING
                  <span>›</span>
                </li>

              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ShipmentTracking;