


import { useState } from "react";
import axios from "axios";
import "./ContactSection.css";

function ContactSection() {

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedback/submit",
        {
          fullName,
          company,
          email,
          phone,
          message,
        }
      );

      alert(response.data.message);

      setFullName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      alert("Feedback Submission Failed");
      console.log(error);
    }
  };

  return (
    <section className="contact-section py-5">
      <div className="container">

        <h3 className="main-title">
          WE ARE ALWAYS WITH <span>YOU :)</span>
        </h3>

        <div className="row mt-4">

          {/* Left Side */}
          <div className="col-lg-8">

            <div className="contact-image">
              <img
                src="/public/assets/images/Oceanfreight2.jpg"
                alt="Contact"
                className="img-fluid"
              />
            </div>

            <div className="feedback-form mt-4">

              <h4>QUICK FEEDBACK FORM</h4>

              <div className="title-line"></div>

              <form onSubmit={handleSubmit}>
                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Full Name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                </div>

                <button
                  type="submit"
                  className="submit-btn mt-3"
                >
                  Submit
                </button>

              </form>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-4">

            <div className="office-card mb-4">

              <div className="office-header">
                CORPORATE OFFICE
              </div>

              <div className="office-body">

                <p>
                  📍 <strong>Address:</strong><br />
                  Enter the complete pickup or delivery location, including street, city, state, and postal code.

                </p>

                <p>
                  ☎ <strong>Telephone No:</strong><br />
                  +923291034290
                </p>

                <p>
                  🏢 <strong>Fax No:</strong><br />
                  +88 01711 123456
                </p>

                <p>
                  ✉ <strong>Email:</strong><br />
                  uaxservice@gmail.com
                </p>

              </div>

            </div>

            <div className="office-card">

              <div className="office-header">
                SECTION OFFICE
              </div>

              <div className="office-body">

                <p>
                  📍 <strong>Address:</strong><br />
                   Enter the complete pickup or delivery location, including street, city, state, and postal code.

                </p>

                <p>
                  ☎ <strong>Telephone No:</strong><br />
                  +923291034290
                </p>

                <p>
                  🏢 <strong>Fax No:</strong><br />
                  +88 01711 123456
                </p>

                <p>
                  ✉ <strong>Email:</strong><br />
                  uaxservice@gmail.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;