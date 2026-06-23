import "./ServiceProcess.css";

function ServiceProcess() {
  return (
    <section className="process-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="process-title">OUR SERVICE PROCESS</h2>
          <p className="process-subtitle">
             We streamline every step of shipping, from booking and handling to transportation and final delivery.

          </p>
        </div>

        <div className="row justify-content-center text-center">

          {/* Step 1 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="process-box">
              <div className="step-number">1</div>

              <div className="process-circle">
                <i className="bi bi-hand-index-thumb"></i>
              </div>

              <h6>SELECT FREIGHT</h6>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="process-box">
              <div className="step-number">2</div>

              <div className="process-circle">
                <i className="bi bi-journal-text"></i>
              </div>

              <h6>CREATE INVOICE</h6>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="process-box">
              <div className="step-number">3</div>

              <div className="process-circle">
                <i className="bi bi-wallet2"></i>
              </div>

              <h6>SECURE PAYMENT</h6>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="process-box">
              <div className="step-number">4</div>

              <div className="process-circle">
                <i className="bi bi-truck"></i>
              </div>

              <h6>FAST DELIVERY</h6>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;