import React from "react";
import "../assets/Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="User Name" />
            <input type="text" placeholder="email address" />
            <input type="password" placeholder="password" />
            <button type="submit">create</button>
            <p className="message">
              Already registered? <Link to={'/'}>Login Now</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
