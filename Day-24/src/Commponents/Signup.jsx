import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Signup = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://mock-server-app2-dll0.onrender.com/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((Res) => console.log(Res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container">
        <div className="title">Signup</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name<sup>*</sup></span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">
                  Username<sup>*</sup>
                </span>
                <input type="text" onChange={handleChange} placeholder="Enter your username" required />
              </div>
              <div className="input-box">
                <span className="details">
                  Email<sup>*</sup>
                </span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number<sup>*</sup></span>
                <input type="text" onChange={handleChange} placeholder="Enter your number" />
              </div>
              <div className="input-box">
                <span className="details">
                  Password <sup>*</sup>
                </span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="button">
              <input type="button" value="Submit" />
            </div>
            <div className="signup">
              <span className="signup">
                Already have an account ?
                <label for="check">
                  <Link className="link" to={"/"}>
                    Login
                  </Link>
                </label>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
