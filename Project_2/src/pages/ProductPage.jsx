import React from "react";
import Navbar from "../Components/Navbar";

const ProductPage = () => {
  return (
    <>
      <Navbar />

      <section className="main_content dashboard_part large_header_bg">
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col-lg-12 p-0 ">
              <div className="header_iner d-flex justify-content-between align-items-center">
                <div className="sidebar_icon d-lg-none">
                  <i className="ti-menu"></i>
                </div>
                <label
                  className="form-label switch_toggle d-none d-lg-block"
                  for="checkbox"
                >
                  <input type="checkbox" id="checkbox" />
                  <div className="slider round open_miniSide"></div>
                </label>
                <div className="header_right d-flex justify-content-between align-items-center">
                  <div className="header_notification_warp d-flex align-items-center">
                    <li>
                      <div className="serach_button">
                        <i className="ti-search"></i>
                        <div className="serach_field-area d-flex align-items-center">
                          <div className="search_inner">
                            <form action="#">
                              <div className="search_field">
                                <input
                                  type="text"
                                  placeholder="Search here..."
                                />
                              </div>
                              <button className="close_search">
                                {" "}
                                <i className="ti-search"></i>{" "}
                              </button>
                            </form>
                          </div>
                          <span className="f_s_14 f_w_400 ml_25 white_text text_white">
                            Apps
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="bell_notification_clicker" href="#">
                        {" "}
                        <img src="img/icon/bell.svg" alt />
                        <span>2</span>
                      </a>

                      <div className="Menu_NOtification_Wrap">
                        <div className="notification_Header">
                          <h4>Notifications</h4>
                        </div>
                        <div className="Notification_body">
                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a href="#">
                                <img src="img/staf/2.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a href="#">
                                <h5>Cool Marketing </h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a href="#">
                                <img src="img/staf/4.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a href="#">
                                <h5>Awesome packages</h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a href="#">
                                <img src="img/staf/3.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a href="#">
                                <h5>what a packages</h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a href="#">
                                <img src="img/staf/2.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a href="#">
                                <h5>Cool Marketing </h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a href="#">
                                <img src="img/staf/4.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a href="#">
                                <h5>Awesome packages</h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a href="#">
                                <img src="img/staf/3.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a href="#">
                                <h5>what a packages</h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>
                        </div>
                        <div className="nofity_footer">
                          <div className="submit_button text-center pt_20">
                            <a href="#" className="btn_1">
                              See More
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="CHATBOX_open" href="#">
                        {" "}
                        <img src="img/icon/msg.svg" alt /> <span>2</span>{" "}
                      </a>
                    </li>
                  </div>
                  <div className="profile_info">
                    <img src="img/client_img.png" alt="#" />
                    <div className="profile_info_iner">
                      <div className="profile_author_name">
                        <p>Neurologist </p>
                        <h5>Dr. Robar Smith</h5>
                      </div>
                      <div className="profile_info_details">
                        <a href="#">My Profile </a>
                        <a href="#">Settings</a>
                        <a href="#">Log Out </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_content_iner overly_inner ">
          <div className="container-fluid p-0 ">
            <div className="row">
              <div className="col-12">
                <div className="page_title_box d-flex align-items-center justify-content-between">
                  <div className="page_title_left">
                    <h3 className="f_s_30 f_w_700 dark_text">Product</h3>
                    <ol className="breadcrumb page_bradcam mb-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Product</li>
                    </ol>
                  </div>
                  <a href="#" className="white_btn3">
                    Create Report
                  </a>
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-md-3">
                <div className="white_card position-relative mb_20 ">
                  <div className="card-body">
                    <div className="ribbon1 rib1-primary">
                      <span className="text-white text-center rib1-primary">
                        50% off
                      </span>
                    </div>
                    <img
                      src="img/products/img-1.png"
                      alt
                      className="d-block mx-auto my-4"
                      height="150"
                    />
                    <div className="row my-4">
                      <div className="col">
                        <span className="badge_btn_3  mb-1">Life Style</span>{" "}
                        <a
                          href="#"
                          className="f_w_400 color_text_3 f_s_14 d-block"
                        >
                          Unique Blue Bag
                        </a>
                      </div>
                      <div className="col-auto">
                        <h4 className="text-dark mt-0">
                          $49.00{" "}
                          <small className="text-muted font-14">
                            <del>$99.00</del>
                          </small>
                        </h4>
                        <ul className="list-inline mb-0 product-review align-self-center">
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning font-16"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning font-16 ms-n2"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning font-16 ms-n2"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning font-16 ms-n2"></i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star-half text-warning font-16 ms-n2"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-grid">
                      <button className="btn_2">Add To Cart</button>
                      <button className="btn_2">Add To Cart</button>
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

export default ProductPage;
