import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../assets/css/Login.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
     <Header />
      <div classnameName="body">
      <div classname="login-container">
        <h1>Signup</h1>
        <form id="loginForm">
          <div classname="input-group">
            <label for="username">Username</label>
            <input type="text"  name="username" required />
          </div>
          <div classname="input-group">
            <label for="username">Email</label>
            <input type="email" name="email" required />
          </div>
          <div classname="input-group">
            <label for="password">Password</label>
            <input type="password"  name="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      <p>Alredy have account ? <Link to={'/login'}>Login</Link></p>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup