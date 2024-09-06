import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../App.css'
const Login = () => {

  return (
    <>
      <div className="center">
        <h1>Login</h1>
        <form>
          <div className="txt_field">
            <input type="email" required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member?
            <Link className="link" to={'/signup'}>Signup</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
