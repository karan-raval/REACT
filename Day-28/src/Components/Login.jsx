import React from 'react'
import '../assets/Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
       <div className="wrapper">
         <div className="title">
            Login Form
         </div>
         <form action="#">
            <div className="field">
               <input type="text" required/>
               <label>Email Address</label>
            </div>
            <div className="field">
               <input type="password" required/>
               <label>Password</label>
            </div>
            <div className="content">
               <div className="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label >Remember me</label>
               </div>
               <div className="pass-link">
                  <a>Forgot password?</a>
               </div>
            </div>
            <div className="field">
               <input type="submit" value="Login"/>
            </div>
            <div className="signup-link">
               Not a member? <Link to={'/signup'}>Signup now</Link>
            </div>
         </form>
      </div>
    </>
  )
}

export default Login