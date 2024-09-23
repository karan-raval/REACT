import React, { useEffect, useState } from "react";
import "../assets/Login.css";
import { Link } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../FirebaseFolder/firebase";
const Login = () => {
  const [data, setData] = useState([]);
  const [d,setD] = useState([])
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const UserCollection = collection(db, "users");
  useEffect(()=>{
   async function getData(){
       let data = await getDocs(UserCollection)
       let val = data.docs.map((el)=>{
           return {id : el.id , ...el.data()}
       })
       setD(val)
   }
   getData()
},[])
  const handlsubmit = async (e) => {
    e.preventDefault();
    let a = d.filter((el)=>{
      return el.email == state.email && el.password == state.password
  })
  if(a.length > 0){
      alert("Login Successfull")
  }else{
      alert("Login Unsuccesfull")
  }
  };
  return (
    <>
      <div className="wrapper">
        <div className="title">Login Form</div>
        <form onSubmit={handlsubmit}>
          <div className="field">
            <input
              type="text"
              value={state.email}
              name="email"
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input
              type="password"
              value={state.password}
              name="password"
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>
            <div className="pass-link">
              <a>Forgot password?</a>
            </div>
          </div>
          <div className="field">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <Link to={"/signup"}>Signup now</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
