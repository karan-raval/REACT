import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const Login = () => {
  return (
    <>
    <Header/>
    <div class="login-container">
  <h1>Login</h1>
  <form id="loginForm">
    <div class="input-group">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" required>
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
    </div>
    <button type="submit">Login</button>
  </form>
</div>
    <Footer/>
    </>
  )
}

export default Login