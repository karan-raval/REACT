import React from 'react'

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
                    onChange={(d) => setName(d.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email<sup>*</sup></span>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    onChange={(d) => setEmail(d.target.value)}
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
                    onChange={(d) => setPassword(d.target.value)}
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
                <input type="button" onClick={handleClick} value="Submit" />
              </div>
              <div className="signup">
                <span className="signup">
                  Already have an account ?
                  <label for="check" onClick={() => setState("Login")}>
                    Login
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