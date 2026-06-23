import React, { useState } from "react";
import "./OrderTrackingSection.css";

const OrderTrackingSection = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      sku: "U5-ZPSC-65F2",
      product: "The point of using Lorem Ipsum is that",
      qty: 2,
      weight: "10kg",
      tax: "Y",
      status: "Processing",
    },
    {
      id: 2,
      sku: "U5-ZP3C-65F3",
      product: "The point of using Lorem Ipsum is that",
      qty: 2,
      weight: "10kg",
      tax: "Y",
      status: "Confirm",
    },
    {
      id: 3,
      sku: "U5-ZP4C-65F4",
      product: "The point of using Lorem Ipsum is that",
      qty: 2,
      weight: "10kg",
      tax: "Y",
      status: "Processing",
    },
  ]);

  const removeOrder = (id) => {
    setOrders(orders.filter((item) => item.id !== id));
  };

  return (
    <section className="order-section">
      <div className="container">
        <h2 className="section-title">
          YOUR CURRENT ORDER
        </h2>

        <div className="row g-4">

          {/* Table */}
          <div className="col-lg-9">
            <div className="table-responsive shadow-sm">

              <table className="table order-table align-middle">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>SKU#</th>
                    <th>PRODUCT NAME</th>
                    <th>QTY</th>
                    <th>WT</th>
                    <th>TAX</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.sku}</td>
                      <td>{item.product}</td>
                      <td>{item.qty}</td>
                      <td>{item.weight}</td>
                      <td>{item.tax}</td>
                      <td>
                        <span
                          className={
                            item.status === "Confirm"
                              ? "status confirm"
                              : "status processing"
                          }
                        >
                          {item.status}
                        </span>
                      </td>

                      <td>
                        <button
                          className="action-btn"
                          onClick={() =>
                            removeOrder(item.id)
                          }
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="tracking-card">

              <div className="card-header-red">
                SELECT YOUR FREIGHT
              </div>

              <button className="tracking-btn active">
                AIR FREIGHT TRACKING
                <i className="fas fa-chevron-right"></i>
              </button>

              <button className="tracking-btn">
                OCEAN FREIGHT TRACKING
                <i className="fas fa-chevron-right"></i>
              </button>

              <button className="tracking-btn">
                ROAD & RAIL FREIGHT TRACKING
                <i className="fas fa-chevron-right"></i>
              </button>

              <button className="order-btn">
                YOUR ORDER LIST
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderTrackingSection;