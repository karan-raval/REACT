import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/action";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseFolder/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// import Rating from '@mui/material/Rating';
import Navbar from "../Components/Navbar";

const ProductPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.proReducer);
  const navigate = useNavigate();
  console.log(state);
  useEffect(() => {
    dispatch(getData);
  }, []);
  const handleDelete = async (id) => {
    let data = doc(db, "products", id);
    await deleteDoc(data);
    toast.success("Data Deleted Successfully", { autoClose: 3000 });
    dispatch(getData);
  };
  return (
    <>
      <Navbar />
      <ToastContainer />
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
                            <form>
                              <div className="search_field">
                                <input
                                  type="text"
                                  placeholder="Search here..."
                                />
                              </div>
                              <button className="close_search">
                                
                                <i className="ti-search"></i>
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
                              <a >
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
                            <a className="btn_1">
                              See More
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="CHATBOX_open">
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
                  <a  className="white_btn3">
                    Create Report
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              {state.product.map((el) => {
                return (
                  <div className="col-md-3">
                    <div className="white_card position-relative mb_20 ">
                      <div className="card-body">
                        <div className="ribbon1 rib1-primary">
                          <span className="text-white text-center rib1-primary">
                            50% off
                          </span>
                        </div>
                        <img
                          src={el.imageURL}
                          alt
                          className="d-block mx-auto my-4"
                          height="150"
                        />
                        <div className="row my-4">
                          <div className="col">
                            <span className="badge_btn_3  mb-1">
                              {el.category}
                            </span>
                            <a className="f_w_400 color_text_3 f_s_14 d-block">
                              {el.product}
                            </a>
                          </div>
                          <div className="col-auto">
                            <h4 className="text-dark mt-0">
                            ₹{el.price} &nbsp;&nbsp;
                              <small className="text-muted font-14">
                                <del>₹{el.strikedOffPrice}</del>
                              </small>
                            </h4>
                            {/* <Rating name="read-only" value={3} readOnly /> */}
                            {/* <ul className="list-inline mb-0 product-review align-self-center">
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
                            </ul> */}
                          </div>
                        </div>
                        <div className="d-grid">
                          <button className="btn_2" onClick={() => navigate(`/product/edit/${el.id}`)} >Edit</button>
                          <button className="btn_2" onClick={() => handleDelete(el.id)} >Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
