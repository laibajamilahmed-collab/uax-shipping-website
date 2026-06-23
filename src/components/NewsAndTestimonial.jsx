import React, { useEffect, useState } from "react";
import "./NewsAndTestimonial.css";

const newsData = [
  {
    day: "28",
    month: "FEB",
    title: "News Title",
    author: "Admin",
    description:
      " Stay updated with the latest company announcements, industry trends, and logistics insights from around the world.",
  },
  {
    day: "23",
    month: "MAR",
    title: "News Title",
    author: "Admin",
    description:
      " Stay updated with the latest company announcements, industry trends, and logistics insights from around the world.",
  },
];

const testimonials = [
  {
    image: "/public/assets/images/Testimonials1.jpg",
    text: " Our clients consistently praise our reliable service, timely deliveries, and professional handling of their cargo. Their trust and satisfaction motivate us to maintain the highest standards in logistics.",
  },
  {
    image:"/public/assets/images/Testimonials2.jpg",
    text: "Professional service, excellent communication and outstanding support throughout the project.",
  },
];

const NewsAndTestimonial = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="news-testimonial-section">
      <div className="container">
        <div className="row g-4">

          {/* News Section */}
          <div className="col-lg-5">
            <div className="section-heading">
              <h3>LATEST NEWS</h3>
              <div className="heading-line"></div>
            </div>

            {newsData.map((news, index) => (
              <div
                className="news-card"
                key={index}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="date-box">
                  <h2>{news.day}</h2>
                  <span>{news.month}</span>
                </div>

                <div className="news-content">
                  <h5>{news.title}</h5>
                  <small>
                    By <strong>{news.author}</strong>
                  </small>
                  <p>{news.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Section */}
          <div className="col-lg-7">
            <div className="section-heading">
              <h3>TESTIMONIAL</h3>
              <div className="heading-line"></div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-image">
                <img
                  src={testimonials[active].image}
                  alt="testimonial"
                />
              </div>

              <div className="testimonial-content">
                <div className="quote-top">
                  <i className="fas fa-quote-left"></i>
                </div>

                <p>{testimonials[active].text}</p>

                <div className="quote-bottom">
                  <i className="fas fa-quote-right"></i>
                </div>

                <div className="dots">
                  {testimonials.map((_, index) => (
                    <span
                      key={index}
                      className={
                        active === index
                          ? "dot active"
                          : "dot"
                      }
                      onClick={() => setActive(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsAndTestimonial;