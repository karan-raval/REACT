import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Swal from 'sweetalert2'

const Signup = () => {
  const [state, setState] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    pnumber:"",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
    
  };
  const handleSubmit = (e) => {
   
    e.preventDefault();
    if (state.username == "" && state.email == "" && state.password == "" && state.fullname == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill The Above details!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Congratsss...",
        text: "SignUp Succesfully...",
      });
      
      fetch(`https://mock-server-app2-dll0.onrender.com/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    setState({
      fullname: "",
      username: "",
      email: "",
      password: "",
      pnumber:"",
    });
  };
  return (
    <>
      <div className="container">
        <div className="title">Signup</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">
                  Full Name<sup>*</sup>
                </span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="fullname"
                   value={state.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">
                  Username<sup>*</sup>
                </span>
                <input
                  type="text"
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  
                />
              </div>
              <div className="input-box">
                <span className="details">
                  Email<sup>*</sup>
                </span>
                <input
                name="email"
                value={state.email}
                  type="text"
                  placeholder="Enter your email"
                  
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">
                  Phone Number<sup>*</sup>
                </span>
                <input
                name="pnumber"
                value={state.pnumber}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your number"
                />
              </div>
              <div className="input-box">
                <span className="details">
                  Password <sup>*</sup>
                </span>
                <input
                name="password"
                value={state.password}
                  type="text"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Submit" />
            </div>
            <div className="signup">
              <span className="signup">
                Already have an account ?
                <label for="check">
                  <Link className="link" to={"/login"}>
                    Login
                  </Link>
                </label>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
