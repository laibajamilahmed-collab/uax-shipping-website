import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Image */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="/public/assets/images/chooseusimg.jpg"
              alt="Handshake"
              className="img-fluid why-img"
            />
          </div>

          {/* Content */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h2 className="why-title">WHY CHOOSE US?</h2>

            <div className="title-line"></div>

            <p className="why-text">
            
We provide reliable, fast, and cost-effective logistics solutions tailored to your shipping needs. Our experienced team ensures safe delivery and excellent customer support every step of the way.
            </p>
            <p className="why-text">
            
We are committed to delivering your cargo securely and on time, every time.

            </p>

            <a href="/About" className="read-more">
              READ MORE →
            </a>
          </div>

          {/* Features */}
          <div className="col-lg-4">

            <div className="feature-box">
              <div className="icon-circle">
                <i className="bi bi-arrow-repeat"></i>
              </div>

              <h6>WE ARE TRUSTED</h6>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="bi bi-lock-fill"></i>
              </div>

              <h6>THE BEST SECURITY</h6>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="bi bi-hand-thumbs-up-fill"></i>
              </div>

              <h6>100% GUARANTEE</h6>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="bi bi-geo-alt-fill"></i>
              </div>

              <h6>QUICK LOCATION</h6>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;