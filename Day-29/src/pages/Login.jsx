import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

const Login = () => {
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
                            <a href="#" class="btn_1 full_width text-center">
                              Log in
                            </a>
                            <p>
                              Need an account?{" "}
                              <a>
                                {" "}
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
