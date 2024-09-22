import React from "react";
import "../assets/Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill The Username Input Field!",
      });
    } else if (state.email == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill The Email Input Field!",
      });
    } else if (state.password == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill The Password Input Field!",
      });
    } else if (state.fullname == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill The Full Name Input Field!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Congratsss...",
        text: "SignUp Succesfully...",
      });
      navigate("/login");

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
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="User Name" />
            <input type="text" placeholder="email address" />
            <input type="password" placeholder="password" />
            <button type="submit">create</button>
            <p className="message">
              Already registered? <Link to={'/'}>Login Now</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
