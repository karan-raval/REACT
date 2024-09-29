import React from 'react'
import "../assets/style1.css";
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";


const Signup = () => {
  return (
    <>
    <Navbar/>
    <section className="main_content dashboard_part large_header_bg">

<div className="container-fluid g-0">
<div className="row">
<div className="col-lg-12 p-0 ">
<div className="header_iner d-flex justify-content-between align-items-center">
<div className="sidebar_icon d-lg-none">
<i className="ti-menu"></i>
</div>
<label className="form-label switch_toggle d-none d-lg-block" for="checkbox">
<input type="checkbox" id="checkbox"/>
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
<input type="text" placeholder="Search here..."/>
</div>
<button className="close_search"> <i className="ti-search"></i> </button>
</form>
</div>
<span className="f_s_14 f_w_400 ml_25 white_text text_white">Apps</span>
</div>
</div>
</li>
<li>
<a className="bell_notification_clicker" href="#"> <img src="img/icon/bell.svg" alt/>
<span>2</span>
</a>

<div className="Menu_NOtification_Wrap">
<div className="notification_Header">
<h4>Notifications</h4>
</div>
<div className="Notification_body">

<div className="single_notify d-flex align-items-center">
<div className="notify_thumb">
<a href="#"><img src="img/staf/2.png" alt/></a>
</div>
<div className="notify_content">
<a href="#"><h5>Cool Marketing </h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div className="single_notify d-flex align-items-center">
<div className="notify_thumb">
<a href="#"><img src="img/staf/4.png" alt/></a>
</div>
<div className="notify_content">
<a href="#"><h5>Awesome packages</h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div className="single_notify d-flex align-items-center">
<div className="notify_thumb">
<a href="#"><img src="img/staf/3.png" alt/></a>
</div>
<div className="notify_content">
<a href="#"><h5>what a packages</h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div className="single_notify d-flex align-items-center">
<div className="notify_thumb">
<a href="#"><img src="img/staf/2.png" alt/></a>
</div>
<div className="notify_content">
<a href="#"><h5>Cool Marketing </h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div className="single_notify d-flex align-items-center">
<div className="notify_thumb">
<a href="#"><img src="img/staf/4.png" alt/></a>
</div>
<div className="notify_content">
<a href="#"><h5>Awesome packages</h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div className="single_notify d-flex align-items-center">
<div className="notify_thumb">
<a href="#"><img src="img/staf/3.png" alt/></a>
</div>
<div className="notify_content">
<a href="#"><h5>what a packages</h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>
</div>
<div className="nofity_footer">
<div className="submit_button text-center pt_20">
<a href="#" className="btn_1">See More</a>
</div>
</div>
</div>

</li>
<li>
<a className="CHATBOX_open" href="#"> <img src="img/icon/msg.svg" alt/> <span>2</span> </a>
</li>
</div>
<div className="profile_info">
<img src="img/client_img.png" alt="#"/>
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
<p><a href="index.html">Dashboard</a> <i className="fas fa-caret-right"></i> Resister</p>
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
<input type="text" className="form-control" placeholder="Full Name"/>
</div>
<div className>
<input type="text" className="form-control" placeholder="Enter your email"/>
</div>
<div className>
<input type="password" className="form-control" placeholder="Password"/>
</div>
<div className=" cs_check_box">
<input type="checkbox" id="check_box" className="common_checkbox"/>
<label className="form-label" for="check_box">
Keep me up to date
</label>
</div>
<a href="#" className="btn_1 full_width text-center"> Sign Up</a>
<p>Need an account? <a > <Link to={"/login"}>Log in</Link></a></p>
<div className="text-center">
<a href="#" data-bs-toggle="modal" data-bs-target="#forgot_password" data-bs-dismiss="modal" className="pass_forget_btn">Forget Password?</a>
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
  )
}

export default Signup