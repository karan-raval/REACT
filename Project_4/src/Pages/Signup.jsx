import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../assets/css/Login.css'

const Signup = () => {
  return (
    <>
     <Header />
      <div className="body">
      <div class="login-container">
        <h1>Signup</h1>
        <form id="loginForm">
          <div class="input-group">
            <label for="username">Username</label>
            <input type="text"  name="username" required />
          </div>
          <div class="input-group">
            <label for="username">Email</label>
            <input type="email" name="email" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password"  name="password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup