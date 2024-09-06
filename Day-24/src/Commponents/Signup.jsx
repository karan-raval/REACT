import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Signup = () => {
  return (
    <>
    <div className="container">
          <div className="title">Signup</div>
          <div className="content">
            <form>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input type="text" placeholder="Enter your name"  />
                </div>
                <div className="input-box">
                  <span className="details">Username<sup>*</sup></span>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email<sup>*</sup></span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input type="text" placeholder="Enter your number"  />
                </div>
                <div className="input-box">
                  <span className="details">Password <sup>*</sup></span>
                  <input
                    type="text"
                    placeholder="Enter your password"
                  
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="text"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              
              <div className="button">
                <input type="button"  value="Submit" />
              </div>
              <div className="signup">
                <span className="signup">
                  Already have an account ?
                  <label for="check" >
                  <Link className='link' to={'/'}>Login</Link>
                  </label>
                </span>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Signup