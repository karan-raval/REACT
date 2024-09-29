import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { db, GoogleLogout } from '../FirebaseFolder/Firebase';
import { toast, ToastContainer } from 'react-toastify';
import { google, UserReducer } from '../Redux/User/UserReducer';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [d, setD] = useState([]);
  const UserCollection = collection(db, "users");
  const navigate = useNavigate();
  const dispatch  = useDispatch()
  const state = useSelector((s)=>s.UserReducer)
  const [user,setUser] = useState(null)
  console.log(state)
  console.log(state.isLogin)

  useEffect(() => {
      const getData = async () => {
          try {
              let data = await getDocs(UserCollection);
              let val = data.docs.map((el) => ({
                  id: el.id,
                  ...el.data(),
              }));
              setD(val);
          } catch (error) {
              toast.error("Failed to load user data", { autoClose: 3000 });
          }
      };
      getData();
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();

      let user = d.filter((el) => el.email === email && el.pass === pass);

      if (user.length > 0) {
          toast.success("Login Successful!", { autoClose: 3000 });
          setTimeout(() => {
            navigate("/");
        }, 3000); 
      } else {
          toast.error("Login Unsuccessful! Please check your credentials.", { autoClose: 3000 });
      }
  };

  const handleClick=()=>{
    dispatch(google)
   
    
  }
  useEffect(()=>{
    if(state.isLogin == true)
      {
        navigate('/')
        
      }
  },[state.isLogin])
  const handleLogout=()=>{
    GoogleLogout()
    toast.success("Logout Successful!", { autoClose: 3000 });
  }
  return (
    <>
    <Navbar/>
      <section class="main_content dashboard_part large_header_bg">
       <Header/>

        <div class="main_content_iner ">
          <div class="container-fluid p-0">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="dashboard_header mb_50">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="dashboard_header_title">
                        <h3> Login</h3>
                      </div>
                      
                    </div>
                    <div class="col-lg-6">
                      <div class="dashboard_breadcam text-end">
                        <p>
                          <a href="index.html">Dashboard</a>{" "}
                          <i class="fas fa-caret-right"></i> login
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="white_box mb_30">
                  <div class="row justify-content-center">
                    <div class="col-lg-6">
                      <div class="modal-content cs_modal">
                        <div class="modal-header justify-content-center theme_bg_1">
                          <h5 class="modal-title text_white">Log in</h5>
                        </div>
                        <div class="modal-body">
                          <form>
                            <div class>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div class>
                              <input
                                type="password"
                                class="form-control"
                                placeholder="Password"
                              />
                            </div>
                            <a class="btn_1 full_width text-center">
                              Log in
                            </a>
                            <hr />
                            <a class="btn_1 green full_width text-center">
                              Log in With Google &nbsp;&nbsp; 
                            <i class="fas fa-caret-right"></i>
                            </a>
                            <p>
                              Need an account?
                              <a>
                                <Link to={"/signup"}>Sign Up</Link>
                              </a>
                            </p>
                            <div class="text-center">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forgot_password"
                                data-bs-dismiss="modal"
                                class="pass_forget_btn"
                              >
                                Forget Password?
                              </a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
