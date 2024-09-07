import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../App.css'
const Login = () => {
  const dispatch = useDispatch()
  const value = useSelector((s)=>s)
  console.log(value)
  const [state,setState] = useState({
      email : "",
      password : ""
  })
  const handleChange = (e)=>{
      setState({...state,[e.target.name] : e.target.value})
  }
  const handleSubmit = (e)=>{
       e.preventDefault()
      fetchapi(dispatch,state.email)
  }

  return (
    <>
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input type="email" required   onChange={handleChange} />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" required   onChange={handleChange} />
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
