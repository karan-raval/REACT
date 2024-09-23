import React, { useState } from "react";
import "../assets/Signup.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { db } from "../FirebaseFolder/firebase";
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2'
const Signup = () => {
  const [d,setD] = useState([])

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


  const navigate =useNavigate()
  const [state, setState] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const UserCollection = collection(db,"users")
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let a = d.filter((el)=>{
      return el.email == email
    })
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
      if(a.length > 0){
        alert("User alerady registered")
      }else{

      let a  = await addDoc(UserCollection,state)

      Swal.fire({
        icon: "success",
        title: "Congratsss...",
        text: "SignUp Succesfully...",
      });
      navigate("/");
    }}
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
          <form className="register-form" onSubmit={handleSubmit}>
            <input type="text" name="fullname" value={state.fullname} placeholder="Full Name"   onChange={handleChange} />
            <input type="text" name="username" value={state.username} placeholder="User Name"    onChange={handleChange}/>
            <input type="text" name="email" value={state.email} placeholder="email Address"   onChange={handleChange} />
            <input type="password" name="password" value={state.password} placeholder="password"   onChange={handleChange} />
            <button type="submit">create</button>
            <p className="message">
              Already registered? <Link to={"/"}>Login Now</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
