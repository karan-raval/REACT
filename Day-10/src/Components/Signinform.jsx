import React from "react";
import { useState } from "react";

const Signinform = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedemail, setIsFocusedemail] = useState(false);
  const [isFocusedname, setIsFocusedname] = useState(false);
  const [isFocusednumber, setIsFocusednumber] = useState(false);
  const [isFocuseduser, setIsFocuseduser] = useState(false);
  const [isblur, setisbliur] = useState(false);
  const [isbluremail, setisbluremail] = useState(false);
  const [obj, setObj] = useState({
    firstname: "",
    lastname: "",
    pnumber: "",
    email: "",
    password: "",
  });
  const [arr, setarr] = useState([]);
  const [viewPass, setviewPass] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setObj({ ...obj, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setarr([...arr, obj]);
    setObj({
      firstname: "",
      lastname: "",
      pnumber: "",
      email: "",
      password: "",
    });
  };
  const handleBluremail =()=>{
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


    if (regex.test(obj.email)) {
      setisbluremail(false);
    } else {
      setisbluremail(true);
    }
  }
  const handleBlur = () => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,12}$/;

    if (regex.test(obj.password)) {
      setisbliur(false);
    } else {
      setisbliur(true);
    }
  };
  const handleFocususer = () => {
    setIsFocuseduser(true);
    setIsFocusedname(false);
    setIsFocusedemail(false);
    setIsFocusednumber(false);
    setIsFocused(false);
  };
  const handleFocusnumber = () => {
    setIsFocusednumber(true);
    setIsFocusedname(false);
    setIsFocusedemail(false);
    setIsFocuseduser(false);
    setIsFocused(false);
  };
  const handleFocusname = () => {
    setIsFocusedname(true);
    setIsFocusednumber(false);
    setIsFocusedemail(false);
    setIsFocuseduser(false);
    setIsFocused(false);
  };
  const handleFocusemail = () => {
    setIsFocusedemail(true);
    setIsFocusednumber(false);
    setIsFocusedname(false);
    setIsFocuseduser(false);
    setIsFocused(false);

    if (isblur == false) {
      setIsFocusedemail(true);
    }

  };
  const handleFocus = () => {
    setIsFocusednumber(false);
    setIsFocusedname(false);
    setIsFocusedemail(false);

    if (isblur == false) {
      setIsFocused(true);
    }
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card_title">
            <h1>Create Account</h1>
            <span>
              Already have an account? <a>Login In</a>
            </span>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input"
                value={obj.firstname}
                name="firstname"
                onChange={handleChange}
                required
                placeholder="Full Name*"
                onFocus={handleFocusname}
                style={{
                  border: isFocusedname == false ? "none" : "1px solid red",
                }}
              />
              <input
                type="text"
                className="input"
                value={obj.pnumber}
                name="pnumber"
                onChange={handleChange}
                required
                placeholder="Phone Number*"
                onFocus={handleFocusnumber}
                style={{
                  border: isFocusednumber == false ? "none" : "1px solid red",
                }}
              />
              <input
                type="text"
                name="lastname"
                className="input"
                value={obj.lastname}
                onChange={handleChange}
                required
                placeholder="User Name*"
                onFocus={handleFocususer}
                style={{
                  border: isFocuseduser == false ? "none" : "1px solid red",
                }}
              />
              <input
                type="email"
                name="email"
                className="input"
                value={obj.email}
                onChange={handleChange}
                required
                placeholder="Email*"
                id="email"
                onFocus={handleFocusemail}
                onBlur={handleBluremail}
                style={{
                  border: isFocusedemail == false ? "none" : "1px solid red",
                }}
              />
              {isbluremail == false ? (
                  " "
                ) : (
                  <p>Enter Valid Email</p>
                )}
                <div className="passwordbox">
             <input
                type={viewPass ? "text" : "password"}
                name="password"
                required
                className="pass"
                placeholder="Password*"
                value={obj.password}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                style={{
                  border: isFocused == false ? "none" : "1px solid red",
                }}
              />
              {/* {isFocused == false ? "" : <p>password include special character</p>} */}
              
              
              <div className="eye">
                {viewPass == false ? (
                  <span
                    onClick={() => setviewPass(true)}
                    className="material-symbols-outlined"
                  >
                    visibility
                  </span>
                ) : (
                  <span
                    onClick={() => setviewPass(false)}
                    className="material-symbols-outlined"
                  >
                    visibility_off
                  </span>
                )}
              </div>
              </div>
              {isblur == false ? (
                " "
              ) : (
                <p className="warning">Password Must Be 8 Character And Special Character Also</p>
              )} 
              <button className="btn-hover color-9">Sign Up</button>
            </form>
          </div>
          <div className="card_terms">
            <input type="checkbox" name="" id="terms" />
            <span>
              I have read and agree to the <a href="">Terms of Service</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signinform;
