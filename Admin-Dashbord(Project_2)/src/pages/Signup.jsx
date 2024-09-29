import React from "react";
import "../assets/style1.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

const Signup = () => {
  return (
    <>
      <Navbar />
      <section className="main_content dashboard_part large_header_bg">
        <Header/>

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
                          <form>
                            <div className>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                              />
                            </div>
                            <div className>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div className>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                              />
                            </div>
                            <div className=" cs_check_box">
                              <input
                                type="checkbox"
                                id="check_box"
                                className="common_checkbox"
                              />
                              <label className="form-label" for="check_box">
                                Keep me up to date
                              </label>
                            </div>
                            <a
                              href="#"
                              className="btn_1 full_width text-center"
                            >
                              {" "}
                              Sign Up
                            </a>
                            <p>
                              Need an account?{" "}
                              <a>
                                {" "}
                                <Link to={"/login"}>Log in</Link>
                              </a>
                            </p>
                            <div className="text-center">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forgot_password"
                                data-bs-dismiss="modal"
                                className="pass_forget_btn"
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

export default Signup;
