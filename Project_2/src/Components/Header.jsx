import React from 'react'
import bell from "../assets/images/bell.svg";
import msg from "../assets/images/msg.svg";
import client from "../assets/images/client_img.png";
const Header = () => {
  return (
    <>
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
                      <a className="bell_notification_clicker">
                        {" "}
                        <img src={bell} alt />
                        <span>2</span>
                      </a>

                      <div className="Menu_NOtification_Wrap">
                        <div className="notification_Header">
                          <h4>Notifications</h4>
                        </div>
                        <div className="Notification_body">
                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a>
                                <img src="img/staf/2.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a>
                                <h5>Cool Marketing </h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a>
                                <img src="img/staf/4.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a>
                                <h5>Awesome packages</h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a>
                                <img src="img/staf/3.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a>
                                <h5>what a packages</h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a>
                                <img src="img/staf/2.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a>
                                <h5>Cool Marketing </h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a>
                                <img src="img/staf/4.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a>
                                <h5>Awesome packages</h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>

                          <div className="single_notify d-flex align-items-center">
                            <div className="notify_thumb">
                              <a>
                                <img src="img/staf/3.png" alt />
                              </a>
                            </div>
                            <div className="notify_content">
                              <a>
                                <h5>what a packages</h5>
                              </a>
                              <p>Lorem ipsum dolor sit amet</p>
                            </div>
                          </div>
                        </div>
                        <div className="nofity_footer">
                          <div className="submit_button text-center pt_20">
                            <a className="btn_1">See More</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="CHATBOX_open">
                        {" "}
                        <img src={msg} alt /> <span>2</span>{" "}
                      </a>
                    </li>
                  </div>
                  <div className="profile_info">
                    <img src={client} alt="#" />
                    <div className="profile_info_iner">
                      <div className="profile_author_name">
                        <p>Neurologist </p>
                        <h5>Dr. Robar Smith</h5>
                      </div>
                      <div className="profile_info_details">
                        <a>My Profile </a>
                        <a>Settings</a>
                        <a>Log Out </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>

  )
}

export default Header