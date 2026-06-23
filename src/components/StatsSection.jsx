import React, { useEffect, useState } from "react";
import "./StatsSection.css";

const statsData = [
  {
    id: 1,
    icon: "fas fa-folder-open",
    count: 578,
    label: "PROJECT DONE",
  },
  {
    id: 2,
    icon: "fas fa-users",
    count: 347,
    label: "PERMANENT CLIENTS",
  },
  {
    id: 3,
    icon: "fas fa-truck",
    count: 128,
    label: "OWNED VEHICLES",
  },
  {
    id: 4,
    icon: "fas fa-user",
    count: 67,
    label: "SUPPORT MEMBER",
  },
];

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <h2>{count}</h2>;
};

const StatsSection = () => {
  return (
    <section className="stats-section mt-5">
      <div className="overlay"></div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {statsData.map((item, index) => (
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
              key={item.id}
            >
              <div
                className="stat-card"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="icon-box">
                  <i className={item.icon}></i>
                </div>

                <div className="stat-content">
                  <Counter end={item.count} />
                  <span>{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;