import React from 'react'
import '../assets/Signup.css'
const Signup = () => {
  return (
    <>
    
    <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="text" placeholder="email address"/>
      <input type="password" placeholder="password"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
  </div>
</div>
    </>
  )
}

export default Signup