import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../FirebaseFolder/Firebase";
import { toast, ToastContainer } from "react-toastify";
import { google, userdatas } from "../Redux/User/UserReducer";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [d, setD] = useState([]);
  const UserCollection = collection(db, "users");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((s) => s.UserReducer);
  console.log(state);
  console.log(state.isLogin);

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
    console.log(user);
    if (user.length > 0) {
      toast.success("Login Successful!", { autoClose: 3000 });
      dispatch(userdatas)(user[0]);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      toast.error("Login Unsuccessful! Please check your credentials.", {
        autoClose: 3000,
      });
    }
  };

  const handleClick = () => {
    dispatch(google);
  };

  return (
    <>
      <Navbar />
      <section className="main_content dashboard_part large_header_bg">
        <Header />
        <ToastContainer />

        <div className="main_content_iner ">
          <div className="container-fluid p-0">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="dashboard_header mb_50">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="dashboard_header_title">
                        <h3> Login</h3>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="dashboard_breadcam text-end">
                        <p>
                          <a href="index.html">Dashboard</a>
                          <i className="fas fa-caret-right"></i> login
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
                        <div className="modal-header justify-content-center theme_bg_1">
                          <h5 className="modal-title text_white">Log in</h5>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={handleSubmit}>
                            <div class>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div class>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn_1 full_width text-center"
                            >
                              Log in
                            </button>
                            <hr />
                            <button
                              type="button"
                              onClick={handleClick}
                              className="btn_1 green full_width text-center"
                            >
                              Log in With Google &nbsp;&nbsp;
                              <i className="fas fa-caret-right"></i>
                            </button>
                            <p>
                              Need an account?
                              <a>
                                <Link to={"/signup"}>Sign Up</Link>
                              </a>
                            </p>
                            <div className="text-center">
                              <a className="pass_forget_btn">
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
