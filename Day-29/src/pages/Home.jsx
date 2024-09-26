import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section class="main_content dashboard_part large_header_bg">

<div class="container-fluid g-0">
<div class="row">
<div class="col-lg-12 p-0 ">
<div class="header_iner d-flex justify-content-between align-items-center">
<div class="sidebar_icon d-lg-none">
<i class="ti-menu"></i>
</div>
<label class="form-label switch_toggle d-none d-lg-block" for="checkbox">
<input type="checkbox" id="checkbox"/>
<div class="slider round open_miniSide"></div>
</label>
<div class="header_right d-flex justify-content-between align-items-center">
<div class="header_notification_warp d-flex align-items-center">
<li>
<div class="serach_button">
<i class="ti-search"></i>
<div class="serach_field-area d-flex align-items-center">
<div class="search_inner">
<form action="#">
<div class="search_field">
<input type="text" placeholder="Search here..."/>
</div>
<button class="close_search"> <i class="ti-search"></i> </button>
</form>
</div>
<span class="f_s_14 f_w_400 ml_25 white_text text_white">Apps</span>
</div>
</div>
</li>
<li>
<a class="bell_notification_clicker" href="#"> <img src="img/icon/bell.svg" alt/>
<span>2</span>
</a>

<div class="Menu_NOtification_Wrap">
<div class="notification_Header">
<h4>Notifications</h4>
</div>
<div class="Notification_body">

<div class="single_notify d-flex align-items-center">
<div class="notify_thumb">
<a href="#"><img src="img/staf/2.png" alt/></a>
</div>
<div class="notify_content">
<a href="#"><h5>Cool Marketing </h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div class="single_notify d-flex align-items-center">
<div class="notify_thumb">
<a href="#"><img src="img/staf/4.png" alt/></a>
</div>
<div class="notify_content">
<a href="#"><h5>Awesome packages</h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div class="single_notify d-flex align-items-center">
<div class="notify_thumb">
<a href="#"><img src="img/staf/3.png" alt/></a>
</div>
<div class="notify_content">
<a href="#"><h5>what a packages</h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div class="single_notify d-flex align-items-center">
<div class="notify_thumb">
<a href="#"><img src="img/staf/2.png" alt/></a>
</div>
<div class="notify_content">
<a href="#"><h5>Cool Marketing </h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div class="single_notify d-flex align-items-center">
<div class="notify_thumb">
<a href="#"><img src="img/staf/4.png" alt/></a>
</div>
<div class="notify_content">
<a href="#"><h5>Awesome packages</h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>

<div class="single_notify d-flex align-items-center">
<div class="notify_thumb">
<a href="#"><img src="img/staf/3.png" alt/></a>
</div>
<div class="notify_content">
<a href="#"><h5>what a packages</h5></a>
<p>Lorem ipsum dolor sit amet</p>
</div>
</div>
</div>
<div class="nofity_footer">
<div class="submit_button text-center pt_20">
<a href="#" class="btn_1">See More</a>
</div>
</div>
</div>

</li>
<li>
<a class="CHATBOX_open" href="#"> <img src="img/icon/msg.svg" alt/> <span>2</span> </a>
</li>
</div>
<div class="profile_info">
<img src="img/client_img.png" alt="#"/>
<div class="profile_info_iner">
<div class="profile_author_name">
<p>Neurologist </p>
<h5>Dr. Robar Smith</h5>
</div>
<div class="profile_info_details">
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

<div class="main_content_iner overly_inner ">
<div class="container-fluid p-0 ">

<div class="row">
<div class="col-12">
<div class="page_title_box d-flex flex-wrap align-items-center justify-content-between">
<div class="page_title_left">
<h3 class="f_s_25 f_w_700 dark_text">Dashboard</h3>
<ol class="breadcrumb page_bradcam mb-0">
<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
<li class="breadcrumb-item active">Analytic</li>
</ol>
</div>
<div class="page_title_right">
<div class="page_date_button">
August 1, 2020 - August 31, 2020
</div>
<div class="dropdown common_bootstrap_button ">
<span class="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
action
</span>
<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item f_s_16 f_w_600" href="#"> Download</a>
<a class="dropdown-item f_s_16 f_w_600" href="#"> Print</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="row ">
<div class="col-xl-8 ">
<div class="white_card mb_30 card_height_100">
<div class="white_card_header">
<div class="box_header m-0">
<div class="main-title">
<h3 class="m-0">Revenue</h3>
</div>
<div class="float-lg-right float-none common_tab_btn2 justify-content-end">
<ul class="nav">
<li class="nav-item">
<a class="nav-link" href="#">Month</a>
</li>
<li class="nav-item">
<a class="nav-link active" href="#">Week</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Day</a>
</li>
</ul>
</div>
</div>
</div>
<div class="white_card_body">
<div id="marketchart"></div>
</div>
</div>
</div>
<div class="col-xl-4 ">
<div class="white_card card_height_100 mb_30 sales_card_wrapper">
<div class="white_card_header d-flex justify-content-end">
<button class="export_btn">Export</button>
</div>

<div class="sales_card_body">
<div class="single_sales">
<span>Paid Visit</span>
<h3>6550</h3>
</div>
<div class="single_sales">
<span>Total Visit</span>
<h3>5646,454</h3>
</div>
<div class="single_sales">
<span>Expence</span>
<h3>$650</h3>
</div>
<div class="single_sales">
<span>Commission</span>
<h3>$56</h3>
</div>
</div>
</div>
</div>
<div class="col-xl-4 ">
<div class="white_card card_height_100 mb_30 social_media_card">
<div class="white_card_header">
<div class="main-title">
<h3 class="m-0">Social media</h3>
<span>About Your Social Popularity</span>
</div>
</div>
<div class="media_thumb ml_25">
<img src="img/media.svg" alt/>
</div>
<div class="media_card_body">
<div class="media_card_list">
<div class="single_media_card">
<span>Followers</span>
<h3>35.6 K</h3>
</div>
<div class="single_media_card">
<span>Followers</span>
<h3>35.6 K</h3>
</div>
<div class="single_media_card">
<span>Followers</span>
<h3>35.6 K</h3>
</div>
<div class="single_media_card">
<span>Followers</span>
<h3>35.6 K</h3>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-4">
<div class="white_card card_height_100 mb_30">
<div class="white_card_header">
<div class="box_header m-0">
<div class="main-title">
<h3 class="m-0">Visitors by Browser</h3>
<span>15654 Visaitors</span>
</div>
<div class="float-lg-right float-none common_tab_btn justify-content-end">
<ul class="nav">
<li class="nav-item">
<a class="nav-link active" href="#">Week</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Day</a>
</li>
</ul>
</div>
</div>
</div>
<div class="white_card_body">
<div id="chart-currently"></div>
<div class="monthly_plan_wraper">
<div class="single_plan d-flex align-items-center justify-content-between">
<div class="plan_left d-flex align-items-center">
<div class="thumb">
<img src="img/crome.png" alt/>
</div>
<div>
<h5>Chrome Users</h5>
<span>Today</span>
</div>
</div>
<span class="brouser_btn">+2155</span>
</div>
<div class="single_plan d-flex align-items-center justify-content-between">
<div class="plan_left d-flex align-items-center">
<div class="thumb">
<img src="img/safari.png" alt/>
</div>
<div>
<h5>Chrome Users</h5>
<span>Today</span>
</div>
</div>
<span class="brouser_btn">+54</span>
</div>
<div class="single_plan d-flex align-items-center justify-content-between">
<div class="plan_left d-flex align-items-center">
<div class="thumb">
<img src="img/OBJECTS.png" alt/>
</div>
<div>
<h5>Chrome Users</h5>
<span>Today</span>
</div>
</div>
<span class="brouser_btn">+22</span>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-4 ">
<div class="white_card card_height_100 mb_30">
<div class="white_card_header">
<div class="main-title">
<h3 class="m-0">Visitors by Device</h3>
<span>15654 Visaitors</span>
</div>
</div>
<div class="white_card_body ">
<div class="card_container">
<div id="platform_type_dates_donut" style="height:280px"></div>
</div>
<div class="devices_btn text-center">
<a class="color_button color_button2" href="#">Android</a>
<a class="color_button" href="#">iphone</a>
<a class="color_button color_button3" href="#">Others</a>
</div>
</div>
</div>
</div>
<div class="col-xl-12">
<div class="white_card card_height_100 mb_30 ">
<div class="row">
<div class="col-lg-9">
<div class="white_card_header">
<div class="box_header m-0">
<div class="main-title">
<h3 class="m-0">Running Campain</h3>
<span>Overview</span>
</div>
</div>
</div>
<div class="white_card_body QA_section">
<div class="QA_table ">

<table class="table lms_table_active2 p-0">
<thead>
<tr>
<th scope="col">Campain</th>
<th scope="col">Start Time</th>
<th scope="col">Company</th>
<th scope="col">Status</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<div class="customer d-flex align-items-center">
<div class="social_media">
<i class="fab fa-facebook-f"></i>
</div>
<div class="ml_18">
<h3 class="f_s_18 f_w_900 mb-0">Facebook Promotion</h3>
<span class="f_s_12 f_w_700 text_color_8">Unique Watch</span>
</div>
</div>
</td>
<td>
<div>
<h3 class="f_s_18 f_w_900 mb-0">08:32</h3>
<span class="f_s_12 f_w_700 color_text_3">12.12.2022</span>
</div>
</td>
<td>
<div>
<h3 class="f_s_18 f_w_800 mb-0">H&G Fashion</h3>
<span class="f_s_12 f_w_500 color_text_3">Fashion and design</span>
</div>
</td>
<td class="f_s_14 f_w_400 color_text_3">
<a href="#" class="badge_active">Active</a>
</td>
<td>
<div class="action_btns d-flex">
<a href="#" class="action_btn mr_10"> <i class="far fa-edit"></i> </a>
<a href="#" class="action_btn"> <i class="fas fa-trash"></i> </a>
</div>
</td>
</tr>
<tr>
<td>
<div class="customer d-flex align-items-center">
<div class="social_media insta_bg">
<i class="fab fa-instagram"></i>
</div>
<div class="ml_18">
<h3 class="f_s_18 f_w_900 mb-0">Instagram</h3>
<span class="f_s_12 f_w_700 text_color_9">Unique Watch</span>
</div>
</div>
</td>
<td>
<div>
<h3 class="f_s_18 f_w_900 mb-0">08:32</h3>
<span class="f_s_12 f_w_700 color_text_3">12.12.2022</span>
</div>
</td>
<td>
<div>
<h3 class="f_s_18 f_w_800 mb-0">H&G Fashion</h3>
<span class="f_s_12 f_w_500 color_text_3">Fashion and design</span>
</div>
</td>
<td class="f_s_14 f_w_400 color_text_3">
<a href="#" class="badge_active2">Posed</a>
</td>
<td>
<div class="action_btns d-flex">
<a href="#" class="action_btn mr_10"> <i class="far fa-edit"></i> </a>
<a href="#" class="action_btn"> <i class="fas fa-trash"></i> </a>
</div>
</td>
</tr>
<tr>
<td>
<div class="customer d-flex align-items-center">
<div class="social_media twitter_bg">
<i class="fab fa-twitter"></i>
</div>
<div class="ml_18">
<h3 class="f_s_18 f_w_900 mb-0">Twitter</h3>
<span class="f_s_12 f_w_700 text_color_10">Unique Watch</span>
</div>
</div>
</td>
<td>
<div>
<h3 class="f_s_18 f_w_900 mb-0">08:32</h3>
<span class="f_s_12 f_w_700 color_text_3">12.12.2022</span>
</div>
</td>
<td>
<div>
<h3 class="f_s_18 f_w_800 mb-0">H&G Fashion</h3>
<span class="f_s_12 f_w_500 color_text_3">Fashion and design</span>
</div>
</td>
<td class="f_s_14 f_w_400 color_text_3">
<a href="#" class="badge_active3">Closed</a>
</td>
<td>
<div class="action_btns d-flex">
<a href="#" class="action_btn mr_10"> <i class="far fa-edit"></i> </a>
<a href="#" class="action_btn"> <i class="fas fa-trash"></i> </a>
</div>
</td>
</tr>
<tr>
<td>
<div class="customer d-flex align-items-center">
<div class="social_media youtube_bg">
<i class="fab fa-youtube"></i>
</div>
<div class="ml_18">
<h3 class="f_s_18 f_w_900 mb-0">Youtube</h3>
<span class="f_s_12 f_w_700 text_color_11">Summer Campain</span>
</div>
</div>
</td>
<td>
<div>
<h3 class="f_s_18 f_w_900 mb-0">08:32</h3>
<span class="f_s_12 f_w_700 color_text_3">12.12.2022</span>
</div>
</td>
<td>
<div>
<h3 class="f_s_18 f_w_800 mb-0">H&G Fashion</h3>
<span class="f_s_12 f_w_500 color_text_3">Fashion and design</span>
</div>
</td>
<td class="f_s_14 f_w_400 color_text_3">
<a href="#" class="badge_active4">End soon</a>
</td>
<td>
<div class="action_btns d-flex">
<a href="#" class="action_btn mr_10"> <i class="far fa-edit"></i> </a>
<a href="#" class="action_btn"> <i class="fas fa-trash"></i> </a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="col-lg-3 white_card_body pt_25">
<div class="project_complete">
<div class="single_pro d-flex">
<div class="probox"></div>
<div class="box_content">
<h4>5685</h4>
<span>Project completed</span>
</div>
</div>
<div class="single_pro d-flex">
<div class="probox blue_box"></div>
<div class="box_content">
<h4 class="bluish_text">5685</h4>
<span class="grayis_text">Project completed</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-5">
<div class="white_card card_height_100 mb_30 ">
<div class="white_card_header">
<div class="box_header m-0">
<div class="main-title">
<h3 class="m-0">Work List</h3>
<span>Todo</span>
</div>
</div>
</div>
<div class="white_card_body QA_section">
<div class="todo_wrapper">
<div class="single_todo d-flex justify-content-between align-items-center">
<div class="lodo_left d-flex align-items-center">
<div class="bar_line mr_10"></div>
<div class="todo_box">
<label class="form-label primary_checkbox  d-flex mr_10 ">
<input type="checkbox"/>
<span class="checkmark"></span>
</label>
</div>
<div class="todo_head">
<h5 class="f_s_18 f_w_900 mb-0">Assign market analysis </h5>
<p class="f_s_12 f_w_400 mb-0 text_color_8">Due 5 Days</p>
</div>
</div>
<div class="lodo_right"> <a href="#" class="badge_complete">Complete</a> </div>
</div>
<div class="single_todo d-flex justify-content-between align-items-center">
<div class="lodo_left d-flex align-items-center">
<div class="bar_line red_line mr_10"></div>
<div class="todo_box">
<label class="form-label primary_checkbox  d-flex mr_10 ">
<input type="checkbox"/>
<span class="checkmark red_check"></span>
</label>
</div>
<div class="todo_head">
<h5 class="f_s_18 f_w_900 mb-0">Assign market analysis </h5>
<p class="f_s_12 f_w_400 mb-0 text_color_8">Due 5 Days</p>
</div>
</div>
<div class="lodo_right"> <a href="#" class="mark_complete">Mark as completed</a> </div>
</div>
<div class="single_todo d-flex justify-content-between align-items-center">
<div class="lodo_left d-flex align-items-center">
<div class="bar_line red_line mr_10"></div>
<div class="todo_box">
<label class="form-label primary_checkbox  d-flex mr_10 ">
<input type="checkbox"/>
<span class="checkmark red_check"></span>
</label>
</div>
<div class="todo_head">
<h5 class="f_s_18 f_w_900 mb-0">Assign market analysis </h5>
<p class="f_s_12 f_w_400 mb-0 text_color_8">Due 5 Days</p>
</div>
</div>
<div class="lodo_right"> <a href="#" class="mark_complete">Mark as completed</a> </div>
</div>
<div class="single_todo d-flex justify-content-between align-items-center">
<div class="lodo_left d-flex align-items-center">
<div class="bar_line mr_10"></div>
<div class="todo_box">
<label class="form-label primary_checkbox  d-flex mr_10 ">
<input type="checkbox"/>
<span class="checkmark"></span>
</label>
</div>
<div class="todo_head">
<h5 class="f_s_18 f_w_900 mb-0">Assign market analysis </h5>
<p class="f_s_12 f_w_400 mb-0 text_color_8">Due 5 Days</p>
</div>
</div>
<div class="lodo_right"> <a href="#" class="badge_complete">Complete</a> </div>
</div>
<div class="single_todo d-flex justify-content-between align-items-center">
<div class="lodo_left d-flex align-items-center">
<div class="bar_line mr_10"></div>
<div class="todo_box">
<label class="form-label primary_checkbox  d-flex mr_10 ">
<input type="checkbox"/>
<span class="checkmark"></span>
</label>
</div>
<div class="todo_head">
<h5 class="f_s_18 f_w_900 mb-0">Assign market analysis </h5>
<p class="f_s_12 f_w_400 mb-0 text_color_8">Due 5 Days</p>
</div>
</div>
<div class="lodo_right"> <a href="#" class="badge_complete">Complete</a> </div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-7">
<div class="white_card card_height_100  mb_20">
<div class="white_card_header">
<div class="box_header m-0">
<div class="main-title">
<h3 class="m-0">Visitors from country</h3>
<span>Visitors all over the world</span>
</div>
</div>
</div>
<div class="white_card_body">
<div id="world-map-markers" class="dashboard_w_map pb_20"></div>
<div class="world_list_wraper">
<div class="row justify-content-center">
<div class="col-lg-9">
<div class="row">
<div class="col-lg-6">
<div class="single_progressbar">
<h6 class="f_s_14 f_w_400">USA</h6>
<div id="bar4" class="barfiller">
<div class="tipWrap">
<span class="tip"></span>
</div>
<span class="fill" data-percentage="81"></span>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="single_progressbar">
<h6>Australia</h6>
<div id="bar5" class="barfiller">
<div class="tipWrap">
<span class="tip"></span>
</div>
<span class="fill" data-percentage="58"></span>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="single_progressbar">
<h6>Brazil</h6>
<div id="bar6" class="barfiller">
<div class="tipWrap">
<span class="tip"></span>
</div>
<span class="fill" data-percentage="42"></span>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="single_progressbar">
<h6>Latvia</h6>
<div id="bar7" class="barfiller">
<div class="tipWrap">
<span class="tip"></span>
</div>
<span class="fill" data-percentage="55"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-xl-4">
<div class="white_card card_height_100 mb_30">
<div class="white_card_header">
<div class="box_header m-0">
<div class="main-title">
<h3 class="m-0">Recent Update</h3>
</div>
</div>
</div>
<div class="white_card_body">
<div class="Activity_timeline">
<ul>
<li>
<div class="activity_bell"></div>
<div class="timeLine_inner d-flex align-items-center">
<div class="activity_wrap">
<h6>5 min ago</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
</p>
</div>
</div>
</li>
<li>
<div class="activity_bell "></div>
<div class="timeLine_inner d-flex align-items-center">
<div class="activity_wrap">
<h6>5 min ago</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
</p>
</div>
</div>
</li>
<li>
<div class="activity_bell bell_lite"></div>
<div class="timeLine_inner d-flex align-items-center">
<div class="activity_wrap">
<h6>5 min ago</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
</p>
</div>
</div>
</li>
<li>
<div class="activity_bell bell_lite"></div>
<div class="timeLine_inner d-flex align-items-center">
<div class="activity_wrap">
<h6>5 min ago</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque
</p>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
<div class="col-xl-4">
<div class="white_card card_height_100 mb_30">
<div class="date_picker_wrapper">
<div class="default-datepicker">
<div class="datepicker-here" data-language="en"></div>
</div>
</div>
</div>
</div>
<div class="col-xl-4">
<div class="white_card card_height_100 mb_30">
<div class="weatcher_update_wrapper height_100">
<div class="row height_100">
<div class="col-lg-6">
<div class="box_header m-0">
<div class="main-title">
<h3 class="m-0">Weather Update</h3>
</div>
</div>
<div class="weather_img_1 mt_30">
<img class="img-fluid" src="img/man.png" alt/>
</div>
</div>
<div class="col-lg-6">
<div class="weather_img_2">

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="footer_part">
<div class="container-fluid">
<div class="row">
<div class="col-lg-12">
<div class="footer_iner text-center">
<p>2020 © Influence - Designed by <a href="#"> <i class="ti-heart"></i> </a><a href="#"> DashboardPack</a></p>
</div>
</div>
</div>
</div>
</div>
</section>


<div class="CHAT_MESSAGE_POPUPBOX">
<div class="CHAT_POPUP_HEADER">
<div class="MSEESAGE_CHATBOX_CLOSE">
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.09939 5.98831L11.772 10.661C12.076 10.965 12.076 11.4564 11.772 11.7603C11.468 12.0643 10.9766 12.0643 10.6726 11.7603L5.99994 7.08762L1.32737 11.7603C1.02329 12.0643 0.532002 12.0643 0.228062 11.7603C-0.0760207 11.4564 -0.0760207 10.965 0.228062 10.661L4.90063 5.98831L0.228062 1.3156C-0.0760207 1.01166 -0.0760207 0.520226 0.228062 0.216286C0.379534 0.0646715 0.578697 -0.0114918 0.777717 -0.0114918C0.976738 -0.0114918 1.17576 0.0646715 1.32737 0.216286L5.99994 4.889L10.6726 0.216286C10.8243 0.0646715 11.0233 -0.0114918 11.2223 -0.0114918C11.4213 -0.0114918 11.6203 0.0646715 11.772 0.216286C12.076 0.520226 12.076 1.01166 11.772 1.3156L7.09939 5.98831Z" fill="white" />
</svg>
</div>
<h3>Chat with us</h3>
<div class="Chat_Listed_member">
<ul>
<li>
<a href="#">
<div class="member_thumb">
<img src="img/staf/1.png" alt/>
</div>
</a>
</li>
<li>
<a href="#">
<div class="member_thumb">
<img src="img/staf/2.png" alt/>
</div>
</a>
</li>
<li>
<a href="#">
<div class="member_thumb">
<img src="img/staf/3.png" alt/>
</div>
</a>
</li>
<li>
<a href="#">
<div class="member_thumb">
<img src="img/staf/4.png" alt/>
</div>
</a>
</li>
<li>
<a href="#">
<div class="member_thumb">
<img src="img/staf/5.png" alt/>
</div>
</a>
</li>
<li>
<a href="#">
<div class="member_thumb">
<div class="more_member_count">
<span>90+</span>
</div>
</div>
</a>
</li>
</ul>
</div>
</div>
<div class="CHAT_POPUP_BODY">
<p class="mesaged_send_date">
Sunday, 12 January
</p>
<div class="CHATING_SENDER">
<div class="SMS_thumb">
<img src="img/staf/1.png" alt/>
</div>
<div class="SEND_SMS_VIEW">
{/* <P>Hi! Welcome .
How can I help you?</P> */}
</div>
</div>
<div class="CHATING_SENDER CHATING_RECEIVEr">
<div class="SEND_SMS_VIEW">
{/* <P>Hello</P> */}
</div>
<div class="SMS_thumb">
<img src="img/staf/1.png" alt/>
</div>
</div>
</div>
<div class="CHAT_POPUP_BOTTOM">
<div class="chat_input_box d-flex align-items-center">
<div class="input-group">
<input type="text" class="form-control" placeholder="Write your message" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
<div class="input-group-append">
<button class="btn " type="button">

<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7821 3.21895C14.4908 -1.07281 7.50882 -1.07281 3.2183 3.21792C-1.07304 7.50864 -1.07263 14.4908 3.21872 18.7824C7.50882 23.0729 14.4908 23.0729 18.7817 18.7815C23.0726 14.4908 23.0724 7.50906 18.7821 3.21895ZM17.5813 17.5815C13.9525 21.2103 8.04773 21.2108 4.41871 17.5819C0.78907 13.9525 0.789485 8.04714 4.41871 4.41832C8.04752 0.789719 13.9521 0.789304 17.5817 4.41874C21.2105 8.04755 21.2101 13.9529 17.5813 17.5815ZM6.89503 8.02162C6.89503 7.31138 7.47107 6.73534 8.18131 6.73534C8.89135 6.73534 9.46739 7.31117 9.46739 8.02162C9.46739 8.73228 8.89135 9.30811 8.18131 9.30811C7.47107 9.30811 6.89503 8.73228 6.89503 8.02162ZM12.7274 8.02162C12.7274 7.31138 13.3038 6.73534 14.0141 6.73534C14.7241 6.73534 15.3002 7.31117 15.3002 8.02162C15.3002 8.73228 14.7243 9.30811 14.0141 9.30811C13.3038 9.30811 12.7274 8.73228 12.7274 8.02162ZM15.7683 13.2898C14.9712 15.1332 13.1043 16.3243 11.0126 16.3243C8.8758 16.3243 6.99792 15.1272 6.22834 13.2744C6.09642 12.9573 6.24681 12.593 6.56438 12.4611C6.64238 12.4289 6.72328 12.4136 6.80293 12.4136C7.04687 12.4136 7.27836 12.5577 7.37772 12.7973C7.95376 14.1842 9.38048 15.0799 11.0126 15.0799C12.6077 15.0799 14.0261 14.1836 14.626 12.7959C14.7625 12.4804 15.1288 12.335 15.4441 12.4717C15.7594 12.6084 15.9048 12.9745 15.7683 13.2898Z" fill="#707DB7" />
</svg>

</button>
<button class="btn" type="button">

<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0.289062C4.92455 0.289062 0 5.08402 0 10.9996C0 16.9152 4.92455 21.7101 11 21.7101C17.0755 21.7101 22 16.9145 22 10.9996C22 5.08472 17.0755 0.289062 11 0.289062ZM11 20.3713C5.68423 20.3713 1.375 16.1755 1.375 10.9996C1.375 5.82371 5.68423 1.62788 11 1.62788C16.3158 1.62788 20.625 5.82371 20.625 10.9996C20.625 16.1755 16.3158 20.3713 11 20.3713ZM15.125 10.3302H11.6875V6.98314C11.6875 6.61363 11.3795 6.31373 11 6.31373C10.6205 6.31373 10.3125 6.61363 10.3125 6.98314V10.3302H6.875C6.4955 10.3302 6.1875 10.6301 6.1875 10.9996C6.1875 11.3691 6.4955 11.669 6.875 11.669H10.3125V15.016C10.3125 15.3855 10.6205 15.6854 11 15.6854C11.3795 15.6854 11.6875 15.3855 11.6875 15.016V11.669H15.125C15.5045 11.669 15.8125 11.3691 15.8125 10.9996C15.8125 10.6301 15.5045 10.3302 15.125 10.3302Z" fill="#707DB7" />
</svg>

<input type="file"/>
</button>
</div>
</div>
</div>
</div>
</div>

<div id="back-top" style="display: none;">
<a title="Go to Top" href="#">
<i class="ti-angle-up"></i>
</a>
</div>

    </>
  );
};

export default Home;
