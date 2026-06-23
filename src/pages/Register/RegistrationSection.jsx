
import React, { useState } from "react";
import axios from "axios";
import "./RegistrationSection.css";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          firstName,
          lastName,
          email,
          phone,
          password,
          confirmPassword,
        }
      );

      alert(response.data.message);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <section className="registration-section py-5">
      <div className="container">

        <div className="row registration-box">

          {/* Left Side */}
          <div className="col-lg-6 registration-left">

            <div className="left-content">

              <div className="lock-icon">
                <i className="bi bi-unlock-fill"></i>
              </div>

              <h4>Welcome To new account</h4>

              <p>
                Create an account to access our logistics
                services and manage your shipments with ease.
                Register today for a faster, more secure,
                and personalized shipping experience.
              </p>

              <h6>
                IF YOU HAVE ACCOUNT ALREADY,
                PLEASE LOGIN IN
              </h6>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 registration-right">

            <h2 className="register-title">
              Registration
            </h2>

            <div className="title-line"></div>

            <form onSubmit={handleSubmit}>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label>First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) =>
                      setFirstName(e.target.value)
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) =>
                      setLastName(e.target.value)
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Phone:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    required
                  />
                </div>

                
                      <div className="col-md-6 mb-3">
                  <label>Password:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={password}
                    name="password"
                    onChange={(e)=>
                    setPassword ( e.target.value)}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Confirm Password:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={(e)=>
                     setConfirmPassword(e.target.value)   
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                className="register-btn"
              >
                Registration
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Registration;