import "../assets/style1.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../FirebaseFolder/Firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setname] = useState("");
  const UserCollection = collection(db, "users");
  const [d, setD] = useState([]);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

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
              toast.error("Failed to load users", { autoClose: 3000 });
          }
      };
      getData();
  }, []);

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!emailRegex.test(email)) {
          toast.error("Invalid email format. Please enter a valid email.", { autoClose: 3000 });
          return;
      }

      if (!passwordRegex.test(pass)) {
          toast.error("Password must be at least 8 characters long and include letters and numbers.", { autoClose: 3000 });
          return;
      }

      let existingUser = d.find((el) => el.email === email);

      let newUser = {
          email,
          pass,
          name,
      };

      if (existingUser) {
          toast.error("User already registered", { autoClose: 3000 });
      } else {
          try {
              await addDoc(UserCollection, newUser);
              toast.success("User Signup Successfully", { autoClose: 3000 });
              setTimeout(() => {
                  navigate("/Login");
              }, 3000); 
          } catch (error) {
              toast.error("Signup failed", { autoClose: 3000 });
          }
      }
  };
  return (
    <>
      <Navbar />
      <section className="main_content dashboard_part large_header_bg">
        <Header/>
        <ToastContainer />

        <div className="main_content_iner ">
          <div className="container-fluid p-0">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="dashboard_header mb_50">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="dashboard_header_title">
                        <h3> Resister</h3>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="dashboard_breadcam text-end">
                        <p>
                          <a href="index.html">Dashboard</a>{" "}
                          <i className="fas fa-caret-right"></i> Resister
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="white_box mb_30">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="modal-content cs_modal">
                        <div className="modal-header theme_bg_1 justify-content-center">
                          <h5 className="modal-title text_white">Resister</h5>
                        </div>
                        <div className="modal-body">
                          <form  onSubmit={handleSubmit}>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                onChange={(e)=>setname(e.target.value)}
                              />
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                onChange={(e)=>setEmail(e.target.value)}
                              />
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={(e)=>setPass(e.target.value)}
                              />
                            
                            <button
                              type="submit" 
                              className="btn_1 full_width text-center"
                            >
                              
                              Sign Up
                            </button>
                            <p>
                              Need an account?
                              <a>
                                
                                <Link to={"/login"}>Log in</Link>
                              </a>
                            </p>
                            {/* <div className="text-center">
                              <a
                               
                                
                                className="pass_forget_btn"
                              >
                                Forget Password?
                              </a>
                            </div> */}
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

export default Signup;
