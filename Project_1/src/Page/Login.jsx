import React, { useEffect, useState } from "react";
import "../assets/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchapi } from "../Redux/Login/action";
import logo from "../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const {isLoading,isError,data} = useSelector((s) => s.loginreducer);
  const [datas, setdata] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setdata({ ...datas, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchapi)(datas);
    setdata({ email: "", password: "" });
  };

  useEffect(() => {
    if (data && !isError && !isLoading) {
      navigate("/"); 
    }
  }, [data, isError, navigate]); 
 
  return (
    <>
    <div className="bodyy">
      <div className="form-container">
        <div className="form-logo">
          <img src={logo} alt="Myntra Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={datas.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={datas.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
          <p>
            Already have an account? <Link to={"/Signup"}>Signup</Link>
          </p>
        </form>
      </div></div>
    </>
  );
};

export default Login;
