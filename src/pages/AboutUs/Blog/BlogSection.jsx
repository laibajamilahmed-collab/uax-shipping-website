import React from "react";
import "./BlogSection.css";

const latestPosts = [
  {
    id: 1,
    title: "Stay updated with our newest announcements, news,updates from the industry.",
    date: "10 June 2026",
    image:"/public/assets/images/Carfreight2.jpg",
  },
  {
    id: 2,
    title: "We regularly share insights, services, and company achievements to keep you informed.",
    date: "13 June 2026",
    image:"/public/assets/images/Oceanfreight1.jpg",
  },
  {
    id: 3,
    title: "Our latest posts highlight innovations, customer stories, and service improvements.",
    date: "12 June 2026",
    image:"/public/assets/images/Airfreight2.jpg",
  },
  {
    id: 4,
    title: "Follow us to never miss important updates and exciting developments.",
    date: "11 June 2026",
    image:"/public/assets/images/Airfreight1.jpg",
  },
];

function BlogSection() {
  return (
    <section className="blog-section py-5">
      <div className="container">
        <div className="row g-4">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="sidebar">

              {/* Search */}
              <div className="search-box mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter keywords..."
                />
              </div>

              {/* Categories */}
              <div className="category-box mb-4">
                <div className="sidebar-title">CATEGORY</div>

                <ul className="list-unstyled m-0">
                  <li>SEA FREIGHT</li>
                  <li>RAILWAY LOGISTICS</li>
                  <li>CARGO SERVICES</li>
                  <li>LATEST SHIPMENTS</li>
                </ul>
              </div>

              {/* Latest Posts */}
              <div className="latest-posts">
                <div className="sidebar-title dark">
                  LATEST POST
                </div>

                {latestPosts.map((post) => (
                  <div className="post-item" key={post.id}>
                    <img src={post.image} alt="" />

                    <div>
                      <h6>{post.title}</h6>
                      <small>{post.date}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <div className="blog-card">

              <div className="image-wrapper">
                <img
                  src="/public/assets/images/Oceanfreight2.jpg"
                  alt="Cargo Ship"
                  className="img-fluid"
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

                    <div className="meta">
                      <span>Posted By Razu Ahmed</span>
                      <span>10 favorites</span>
                      <span>12 comments</span>
                    </div>

                    <p>
                      A short update or announcement shared to inform, engage, or update our audience.
                    </p>

                    <button className="btn btn-danger">
                      CONTINUE READING
                    </button>
                  </div>
                </div>
              </div>

              <div className="blog-footer">
                <div>
                  <i className="bi bi-hand-thumbs-up me-3"></i>
                  <i className="bi bi-chat"></i>
                </div>

                <div>
                  <i className="bi bi-heart me-3"></i>
                  <i className="bi bi-share me-3"></i>
                  <i className="bi bi-chat-dots"></i>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogSection;