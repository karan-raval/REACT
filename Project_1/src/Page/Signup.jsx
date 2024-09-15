import React, { useState } from 'react'
import '../assets/Signup.css'
import logo from '../assets/logo.jpeg'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
const LoginSignup = () => {
    // const [formData, setFormData] = useState({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: '',
    // });
  
    // const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // handle form submission
    //   console.log('Form submitted', formData);
    // };
    const navigate=useNavigate()
    const [state, setState] = useState({
      fullname: "",
      username: "",
      email: "",
      password: "",
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
        navigate('/login')
        
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
      });
    };
  
  return (
    <>
    <div className="body">
    <div className="form-container">
      <div className="form-logo">
        <img src={logo} alt="Myntra Logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={state.fullname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        
        <button type="submit">Create</button>
        <p>
          Already have an account? <Link to={'/Login'}>Login</Link>
        </p>
      </form>
    </div>
    </div>
    </>
  )
}

export default LoginSignup