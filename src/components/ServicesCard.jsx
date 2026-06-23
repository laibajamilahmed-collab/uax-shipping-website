
import "./ServicesCard.css";

function  ServicesCard() {
  return (
    <section className="services-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="service-title">OUR SERVICES</h2>
          <p className="service-text fs-5">
             We offer comprehensive logistics, ensuring safe, efficient, and timely delivery of your goods worldwide.

          </p>
        </div>

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <img
                src="/assets/images/OurServicespic2.jpg"
                alt="Ocean Freight"
                className="img-fluid"
              />

              <div className="service-content">
                <h5>OCEAN FREIGHT SHIPPING</h5>

                <p>
                   A cost-effective shipping method used to transport large volumes of goods by sea across international routes.

                </p>

                <a href="/ocean-freight">READ MORE →</a>
              </div>

              <span className="corner"></span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <img
                src="/assets/images/OurServicespic1.jpg"
                alt="Air Freight"
                className="img-fluid"
              />

              <div className="service-content">
                <h5>AIR FREIGHT SHIPPING</h5>

                <p>
                   A fast and reliable transportation method used to ship goods by aircraft across domestic and international destinations.

                </p>

                <a href="/air-freight">READ MORE →</a>
              </div>

              <span className="corner"></span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <img
                src="/assets/images/OurServicespic3.jpg"
                alt="Car Shipping"
                className="img-fluid"
              />

              <div className="service-content">
                <h5>CAR Freight</h5>

                <p>
                 A transportation service used to safely move vehicles from one location to another location by truck, rail, ship, or air.

                </p>

                <a href="/car-freight">READ MORE →</a>
              </div>
                               
              <span className="corner"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



export default ServicesCard;