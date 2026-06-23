import React, { useState } from "react";
import axios from "axios";
import "./LoginSection.css";

const LoginSection = () => {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      alert(response.data.message);

      console.log(response.data.user);

      if (remember) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <section className="login-section py-5">
      <div className="container">
        <div className="login-wrapper">

          {/* Left Side */}
          <div className="welcome-side">
            <div className="overlay">

              <div className="lock-icon">
                <i className="bi bi-lock-fill"></i>
              </div>

              <h3>Welcome To your account</h3>

              <p>
                Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>

              <button className="create-btn">
                CREATE A NEW ACCOUNT
              </button>

            </div>
          </div>

          {/* Right Side */}
          <div className="login-side">

            <h2>Login To Your Account</h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Email address:</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>

                                     <div className="mb-3">
                <label>Password:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />
              </div>             
              <div className="login-options">

                <div>
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() =>
                      setRemember(!remember)
                    }
                  />

                  <span className="ms-2">
                    Remember me
                  </span>
                </div>

                <a href="/">
                  Forgot your password?
                </a>

              </div>

              <button
                type="submit"
                className="login-btn"
              >
                Login
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LoginSection;