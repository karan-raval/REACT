import React from "react";
import Navbar from "../Components/Navbar";
import "../assets/style1.css";
import bell from "../assets/images/bell.svg";
import msg from "../assets/images/msg.svg";
import client from "../assets/images/client_img.png";
import crome from "../assets/images/crome.png";
import safari from "../assets/images/safari.png";
import OBJECTS from "../assets/images/OBJECTS.png";
import media from "../assets/images/media.svg";
import man from "../assets/images/man.png";
const Home = () => {
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

        <div className="main_content_iner overly_inner ">
          <div className="container-fluid p-0 ">
            <div className="row">
              <div className="col-12">
                <div className="page_title_box d-flex flex-wrap align-items-center justify-content-between">
                  <div className="page_title_left">
                    <h3 className="f_s_25 f_w_700 dark_text">Dashboard</h3>
                    <ol className="breadcrumb page_bradcam mb-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Analytic</li>
                    </ol>
                  </div>
                  <div className="page_title_right">
                    <div className="page_date_button">
                      August 1, 2020 - August 31, 2020
                    </div>
                    <div className="dropdown common_bootstrap_button ">
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        action
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item f_s_16 f_w_600">
                          {" "}
                          Download
                        </a>
                        <a className="dropdown-item f_s_16 f_w_600"> Print</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-8 ">
                <div className="white_card mb_30 card_height_100">
                  <div className="white_card_header">
                    <div className="box_header m-0">
                      <div className="main-title">
                        <h3 className="m-0">Revenue</h3>
                      </div>
                      <div className="float-lg-right float-none common_tab_btn2 justify-content-end">
                        <ul className="nav">
                          <li className="nav-item">
                            <a className="nav-link">Month</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active">Week</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Day</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="white_card_body">
                    <div id="marketchart">
                      <div
                        id="apexchartsbo8g3kco"
                        class="apexcharts-canvas apexchartsbo8g3kco light"
                        style={{width: 753, height: 380}}
                      >
                        <svg
                          id="SvgjsSvg2025"
                          width="753"
                          height="380"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xmlns:svgjs="http://svgjs.com/svgjs"
                          class="apexcharts-svg"
                          xmlns:data="ApexChartsNS"
                          transform="translate(0, 0)"
                          // style="background: transparent;"
                        >
                          <g
                            id="SvgjsG2027"
                            class="apexcharts-inner apexcharts-graphical"
                            transform="translate(55.359375, 30)"
                          >
                            <defs id="SvgjsDefs2026">
                              <linearGradient
                                id="SvgjsLinearGradient2030"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  id="SvgjsStop2031"
                                  stop-opacity="0.4"
                                  stop-color="rgba(216,227,240,0.4)"
                                  offset="0"
                                ></stop>
                                <stop
                                  id="SvgjsStop2032"
                                  stop-opacity="0.5"
                                  stop-color="rgba(190,209,230,0.5)"
                                  offset="1"
                                ></stop>
                                <stop
                                  id="SvgjsStop2033"
                                  stop-opacity="0.5"
                                  stop-color="rgba(190,209,230,0.5)"
                                  offset="1"
                                ></stop>
                              </linearGradient>
                              <clipPath id="gridRectMaskbo8g3kco">
                                <rect
                                  id="SvgjsRect2035"
                                  width="689.640625"
                                  height="309.348"
                                  x="-1"
                                  y="-1"
                                  rx="0"
                                  ry="0"
                                  fill="#ffffff"
                                  opacity="1"
                                  stroke-width="0"
                                  stroke="none"
                                  stroke-dasharray="0"
                                ></rect>
                              </clipPath>
                              <clipPath id="gridRectMarkerMaskbo8g3kco">
                                <rect
                                  id="SvgjsRect2036"
                                  width="701.640625"
                                  height="321.348"
                                  x="-7"
                                  y="-7"
                                  rx="0"
                                  ry="0"
                                  fill="#ffffff"
                                  opacity="1"
                                  stroke-width="0"
                                  stroke="none"
                                  stroke-dasharray="0"
                                ></rect>
                              </clipPath>
                            </defs>
                            <rect
                              id="SvgjsRect2034"
                              width="17.191015625"
                              height="307.348"
                              x="284.8932261149089"
                              y="0"
                              rx="0"
                              ry="0"
                              fill="url(#SvgjsLinearGradient2030)"
                              opacity="1"
                              stroke-width="0"
                              stroke-dasharray="3"
                              class="apexcharts-xcrosshairs"
                              y2="307.348"
                              filter="none"
                              fill-opacity="0.9"
                              x1="284.8932261149089"
                              x2="284.8932261149089"
                            ></rect>
                            <g
                              id="SvgjsG2055"
                              class="apexcharts-xaxis"
                              transform="translate(0, 0)"
                            >
                              <g
                                id="SvgjsG2056"
                                class="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              >
                                <text
                                  id="SvgjsText2057"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="57.303385416666664"
                                  y="336.348"
                                  text-anchor="middle"
                                  dominant-baseline="auto"
                                  font-size="12px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  class="apexcharts-xaxis-label "
                                  // style={{font-family: Helvetica, Arial, sans-serif}}
                                >
                                  <tspan
                                    id="SvgjsTspan2058"
                                    // style="font-family: Helvetica, Arial, sans-serif;"
                                  >
                                    Feb
                                  </tspan>
                                  <title>Feb</title>
                                </text>
                                <text
                                  id="SvgjsText2059"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="171.91015625"
                                  y="336.348"
                                  text-anchor="middle"
                                  dominant-baseline="auto"
                                  font-size="12px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  class="apexcharts-xaxis-label "
                                  // style="font-family: Helvetica, Arial, sans-serif;"
                                >
                                  <tspan
                                    id="SvgjsTspan2060"
                                    // style="font-family: Helvetica, Arial, sans-serif;"
                                  >
                                    Mar
                                  </tspan>
                                  <title>Mar</title>
                                </text>
                                <text
                                  id="SvgjsText2061"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="286.5169270833333"
                                  y="336.348"
                                  text-anchor="middle"
                                  dominant-baseline="auto"
                                  font-size="12px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  class="apexcharts-xaxis-label "
                                  // style="font-family: Helvetica, Arial, sans-serif;"
                                >
                                  <tspan
                                    id="SvgjsTspan2062"
                                    // style="font-family: Helvetica, Arial, sans-serif;"
                                  >
                                    Apr
                                  </tspan>
                                  <title>Apr</title>
                                </text>
                                <text
                                  id="SvgjsText2063"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="401.12369791666663"
                                  y="336.348"
                                  text-anchor="middle"
                                  dominant-baseline="auto"
                                  font-size="12px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  class="apexcharts-xaxis-label "
                                  // style="font-family: Helvetica, Arial, sans-serif;"
                                >
                                  <tspan
                                    id="SvgjsTspan2064"
                                    // style="font-family: Helvetica, Arial, sans-serif;"
                                  >
                                    May
                                  </tspan>
                                  <title>May</title>
                                </text>
                                <text
                                  id="SvgjsText2065"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="515.73046875"
                                  y="336.348"
                                  text-anchor="middle"
                                  dominant-baseline="auto"
                                  font-size="12px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  class="apexcharts-xaxis-label "
                                  // style="font-family: Helvetica, Arial, sans-serif;"
                                >
                                  <tspan
                                    id="SvgjsTspan2066"
                                    // style="font-family: Helvetica, Arial, sans-serif;"
                                  >
                                    Jun
                                  </tspan>
                                  <title>Jun</title>
                                </text>
                                <text
                                  id="SvgjsText2067"
                                  font-family="Helvetica, Arial, sans-serif"
                                  x="630.3372395833334"
                                  y="336.348"
                                  text-anchor="middle"
                                  dominant-baseline="auto"
                                  font-size="12px"
                                  font-weight="400"
                                  fill="#373d3f"
                                  class="apexcharts-xaxis-label "
                                  // style="font-family: Helvetica, Arial, sans-serif;"
                                >
                                  <tspan
                                    id="SvgjsTspan2068"
                                    // style="font-family: Helvetica, Arial, sans-serif;"
                                  >
                                    Jul
                                  </tspan>
                                  <title>Jul</title>
                                </text>
                              </g>
                            </g>
                            <g id="SvgjsG2076" class="apexcharts-grid">
                              <g
                                id="SvgjsG2077"
                                class="apexcharts-gridlines-horizontal"
                              >
                                <line
                                  id="SvgjsLine2079"
                                  x1="0"
                                  y1="0"
                                  x2="687.640625"
                                  y2="0"
                                  stroke="#ffccd2"
                                  stroke-dasharray="4"
                                  class="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2080"
                                  x1="0"
                                  y1="76.837"
                                  x2="687.640625"
                                  y2="76.837"
                                  stroke="#ffccd2"
                                  stroke-dasharray="4"
                                  class="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2081"
                                  x1="0"
                                  y1="153.674"
                                  x2="687.640625"
                                  y2="153.674"
                                  stroke="#ffccd2"
                                  stroke-dasharray="4"
                                  class="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2082"
                                  x1="0"
                                  y1="230.51100000000002"
                                  x2="687.640625"
                                  y2="230.51100000000002"
                                  stroke="#ffccd2"
                                  stroke-dasharray="4"
                                  class="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine2083"
                                  x1="0"
                                  y1="307.348"
                                  x2="687.640625"
                                  y2="307.348"
                                  stroke="#ffccd2"
                                  stroke-dasharray="4"
                                  class="apexcharts-gridline"
                                ></line>
                              </g>
                              <g
                                id="SvgjsG2078"
                                class="apexcharts-gridlines-vertical"
                              ></g>
                              <line
                                id="SvgjsLine2085"
                                x1="0"
                                y1="307.348"
                                x2="687.640625"
                                y2="307.348"
                                stroke="transparent"
                                stroke-dasharray="0"
                              ></line>
                              <line
                                id="SvgjsLine2084"
                                x1="0"
                                y1="1"
                                x2="0"
                                y2="307.348"
                                stroke="transparent"
                                stroke-dasharray="0"
                              ></line>
                            </g>
                            <g
                              id="SvgjsG2038"
                              class="apexcharts-bar-series apexcharts-plot-series"
                            >
                              <g
                                id="SvgjsG2039"
                                class="apexcharts-series"
                                rel="1"
                                seriesName="NetxProfit"
                                data:realIndex="0"
                              >
                                <path
                                  id="SvgjsPath2041"
                                  d="M 40.112369791666666 307.348L 40.112369791666666 197.95148723958332Q 47.70787760416667 191.35597942708333 55.303385416666664 197.95148723958332L 55.303385416666664 307.348L 39.112369791666666 307.348"
                                  fill="rgba(246,83,101,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="0"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 40.112369791666666 307.348L 40.112369791666666 197.95148723958332Q 47.70787760416667 191.35597942708333 55.303385416666664 197.95148723958332L 55.303385416666664 307.348L 39.112369791666666 307.348"
                                  pathFrom="M 40.112369791666666 307.348L 40.112369791666666 307.348L 55.303385416666664 307.348L 55.303385416666664 307.348L 39.112369791666666 307.348"
                                  cy="194.65373333333332"
                                  cx="153.719140625"
                                  j="0"
                                  val="44"
                                  barHeight="112.69426666666668"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2042"
                                  d="M 154.719140625 307.348L 154.719140625 169.77792057291666Q 162.31464843749998 163.18241276041667 169.91015625 169.77792057291666L 169.91015625 307.348L 153.719140625 307.348"
                                  fill="rgba(246,83,101,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="0"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 154.719140625 307.348L 154.719140625 169.77792057291666Q 162.31464843749998 163.18241276041667 169.91015625 169.77792057291666L 169.91015625 307.348L 153.719140625 307.348"
                                  pathFrom="M 154.719140625 307.348L 154.719140625 307.348L 169.91015625 307.348L 169.91015625 307.348L 153.719140625 307.348"
                                  cy="166.48016666666666"
                                  cx="268.32591145833334"
                                  j="1"
                                  val="55"
                                  barHeight="140.86783333333335"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2043"
                                  d="M 269.32591145833334 307.348L 269.32591145833334 164.65545390625Q 276.9214192708333 158.05994609375 284.5169270833333 164.65545390625L 284.5169270833333 307.348L 268.32591145833334 307.348"
                                  fill="rgba(246,83,101,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="0"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 269.32591145833334 307.348L 269.32591145833334 164.65545390625Q 276.9214192708333 158.05994609375 284.5169270833333 164.65545390625L 284.5169270833333 307.348L 268.32591145833334 307.348"
                                  pathFrom="M 269.32591145833334 307.348L 269.32591145833334 307.348L 284.5169270833333 307.348L 284.5169270833333 307.348L 268.32591145833334 307.348"
                                  cy="161.3577"
                                  cx="382.93268229166665"
                                  j="2"
                                  val="57"
                                  barHeight="145.99030000000002"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2044"
                                  d="M 383.93268229166665 307.348L 383.93268229166665 167.21668723958334Q 391.52819010416664 160.62117942708335 399.12369791666663 167.21668723958334L 399.12369791666663 307.348L 382.93268229166665 307.348"
                                  fill="rgba(246,83,101,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="0"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 383.93268229166665 307.348L 383.93268229166665 167.21668723958334Q 391.52819010416664 160.62117942708335 399.12369791666663 167.21668723958334L 399.12369791666663 307.348L 382.93268229166665 307.348"
                                  pathFrom="M 383.93268229166665 307.348L 383.93268229166665 307.348L 399.12369791666663 307.348L 399.12369791666663 307.348L 382.93268229166665 307.348"
                                  cy="163.91893333333334"
                                  cx="497.53945312499997"
                                  j="3"
                                  val="56"
                                  barHeight="143.42906666666667"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2045"
                                  d="M 498.53945312499997 307.348L 498.53945312499997 154.41052057291665Q 506.13496093749995 147.81501276041666 513.73046875 154.41052057291665L 513.73046875 307.348L 497.53945312499997 307.348"
                                  fill="rgba(246,83,101,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="0"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 498.53945312499997 307.348L 498.53945312499997 154.41052057291665Q 506.13496093749995 147.81501276041666 513.73046875 154.41052057291665L 513.73046875 307.348L 497.53945312499997 307.348"
                                  pathFrom="M 498.53945312499997 307.348L 498.53945312499997 307.348L 513.73046875 307.348L 513.73046875 307.348L 497.53945312499997 307.348"
                                  cy="151.11276666666666"
                                  cx="612.1462239583333"
                                  j="4"
                                  val="61"
                                  barHeight="156.23523333333335"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2046"
                                  d="M 613.1462239583333 307.348L 613.1462239583333 162.09422057291667Q 620.7417317708333 155.49871276041668 628.3372395833333 162.09422057291667L 628.3372395833333 307.348L 612.1462239583333 307.348"
                                  fill="rgba(246,83,101,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="0"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 613.1462239583333 307.348L 613.1462239583333 162.09422057291667Q 620.7417317708333 155.49871276041668 628.3372395833333 162.09422057291667L 628.3372395833333 307.348L 612.1462239583333 307.348"
                                  pathFrom="M 613.1462239583333 307.348L 613.1462239583333 307.348L 628.3372395833333 307.348L 628.3372395833333 307.348L 612.1462239583333 307.348"
                                  cy="158.79646666666667"
                                  cx="726.7529947916667"
                                  j="5"
                                  val="58"
                                  barHeight="148.55153333333334"
                                  barWidth="17.191015625"
                                ></path>
                                <g
                                  id="SvgjsG2040"
                                  class="apexcharts-datalabels"
                                ></g>
                              </g>
                              <g
                                id="SvgjsG2047"
                                class="apexcharts-series"
                                rel="2"
                                seriesName="Revenue"
                                data:realIndex="1"
                              >
                                <path
                                  id="SvgjsPath2049"
                                  d="M 57.303385416666664 307.348L 57.303385416666664 115.99202057291666Q 64.89889322916666 109.39651276041666 72.49440104166666 115.99202057291666L 72.49440104166666 307.348L 56.303385416666664 307.348"
                                  fill="rgba(229,234,238,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="1"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 57.303385416666664 307.348L 57.303385416666664 115.99202057291666Q 64.89889322916666 109.39651276041666 72.49440104166666 115.99202057291666L 72.49440104166666 307.348L 56.303385416666664 307.348"
                                  pathFrom="M 57.303385416666664 307.348L 57.303385416666664 307.348L 72.49440104166666 307.348L 72.49440104166666 307.348L 56.303385416666664 307.348"
                                  cy="112.69426666666666"
                                  cx="170.91015625"
                                  j="0"
                                  val="76"
                                  barHeight="194.65373333333335"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2050"
                                  d="M 171.91015625 307.348L 171.91015625 92.94092057291667Q 179.5056640625 86.34541276041666 187.101171875 92.94092057291667L 187.101171875 307.348L 170.91015625 307.348"
                                  fill="rgba(229,234,238,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="1"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 171.91015625 307.348L 171.91015625 92.94092057291667Q 179.5056640625 86.34541276041666 187.101171875 92.94092057291667L 187.101171875 307.348L 170.91015625 307.348"
                                  pathFrom="M 171.91015625 307.348L 171.91015625 307.348L 187.101171875 307.348L 187.101171875 307.348L 170.91015625 307.348"
                                  cy="89.64316666666667"
                                  cx="285.5169270833333"
                                  j="1"
                                  val="85"
                                  barHeight="217.70483333333334"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2051"
                                  d="M 286.5169270833333 307.348L 286.5169270833333 51.96118723958333Q 294.1124348958333 45.365679427083336 301.7079427083333 51.96118723958333L 301.7079427083333 307.348L 285.5169270833333 307.348"
                                  fill="rgba(229,234,238,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="1"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 286.5169270833333 307.348L 286.5169270833333 51.96118723958333Q 294.1124348958333 45.365679427083336 301.7079427083333 51.96118723958333L 301.7079427083333 307.348L 285.5169270833333 307.348"
                                  pathFrom="M 286.5169270833333 307.348L 286.5169270833333 307.348L 301.7079427083333 307.348L 301.7079427083333 307.348L 285.5169270833333 307.348"
                                  cy="48.66343333333333"
                                  cx="400.12369791666663"
                                  j="2"
                                  val="101"
                                  barHeight="258.6845666666667"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2052"
                                  d="M 401.12369791666663 307.348L 401.12369791666663 59.64488723958332Q 408.7192057291666 53.04937942708332 416.3147135416666 59.64488723958332L 416.3147135416666 307.348L 400.12369791666663 307.348"
                                  fill="rgba(229,234,238,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="1"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 401.12369791666663 307.348L 401.12369791666663 59.64488723958332Q 408.7192057291666 53.04937942708332 416.3147135416666 59.64488723958332L 416.3147135416666 307.348L 400.12369791666663 307.348"
                                  pathFrom="M 401.12369791666663 307.348L 401.12369791666663 307.348L 416.3147135416666 307.348L 416.3147135416666 307.348L 400.12369791666663 307.348"
                                  cy="56.34713333333332"
                                  cx="514.73046875"
                                  j="3"
                                  val="98"
                                  barHeight="251.0008666666667"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2053"
                                  d="M 515.73046875 307.348L 515.73046875 87.81845390625Q 523.3259765625 81.22294609375 530.921484375 87.81845390625L 530.921484375 307.348L 514.73046875 307.348"
                                  fill="rgba(229,234,238,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="1"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 515.73046875 307.348L 515.73046875 87.81845390625Q 523.3259765625 81.22294609375 530.921484375 87.81845390625L 530.921484375 307.348L 514.73046875 307.348"
                                  pathFrom="M 515.73046875 307.348L 515.73046875 307.348L 530.921484375 307.348L 530.921484375 307.348L 514.73046875 307.348"
                                  cy="84.5207"
                                  cx="629.3372395833333"
                                  j="4"
                                  val="87"
                                  barHeight="222.8273"
                                  barWidth="17.191015625"
                                ></path>
                                <path
                                  id="SvgjsPath2054"
                                  d="M 630.3372395833333 307.348L 630.3372395833333 41.716253906249996Q 637.9327473958333 35.12074609375 645.5282552083332 41.716253906249996L 645.5282552083332 307.348L 629.3372395833333 307.348"
                                  fill="rgba(229,234,238,0.85)"
                                  fill-opacity="1"
                                  stroke="transparent"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-bar-area"
                                  index="1"
                                  clip-path="url(#gridRectMaskbo8g3kco)"
                                  pathTo="M 630.3372395833333 307.348L 630.3372395833333 41.716253906249996Q 637.9327473958333 35.12074609375 645.5282552083332 41.716253906249996L 645.5282552083332 307.348L 629.3372395833333 307.348"
                                  pathFrom="M 630.3372395833333 307.348L 630.3372395833333 307.348L 645.5282552083332 307.348L 645.5282552083332 307.348L 629.3372395833333 307.348"
                                  cy="38.418499999999995"
                                  cx="743.9440104166666"
                                  j="5"
                                  val="105"
                                  barHeight="268.9295"
                                  barWidth="17.191015625"
                                ></path>
                                <g
                                  id="SvgjsG2048"
                                  class="apexcharts-datalabels"
                                ></g>
                              </g>
                            </g>
                            <line
                              id="SvgjsLine2086"
                              x1="0"
                              y1="0"
                              x2="687.640625"
                              y2="0"
                              stroke="#b6b6b6"
                              stroke-dasharray="0"
                              stroke-width="1"
                              class="apexcharts-ycrosshairs"
                            ></line>
                            <line
                              id="SvgjsLine2087"
                              x1="0"
                              y1="0"
                              x2="687.640625"
                              y2="0"
                              stroke-dasharray="0"
                              stroke-width="0"
                              class="apexcharts-ycrosshairs-hidden"
                            ></line>
                            <g
                              id="SvgjsG2088"
                              class="apexcharts-yaxis-annotations"
                            ></g>
                            <g
                              id="SvgjsG2089"
                              class="apexcharts-xaxis-annotations"
                            ></g>
                            <g
                              id="SvgjsG2090"
                              class="apexcharts-point-annotations"
                            ></g>
                          </g>
                          <g
                            id="SvgjsG2069"
                            class="apexcharts-yaxis"
                            rel="0"
                            transform="translate(22.359375, 0)"
                          >
                            <g id="SvgjsG2070" class="apexcharts-yaxis-texts-g">
                              <text
                                id="SvgjsText2071"
                                font-family="Helvetica, Arial, sans-serif"
                                x="20"
                                y="31.4"
                                text-anchor="end"
                                dominant-baseline="auto"
                                font-size="11px"
                                font-weight="regular"
                                fill="#373d3f"
                                class="apexcharts-yaxis-label "
                                // style="font-family: Helvetica, Arial, sans-serif;"
                              >
                                120
                              </text>
                              <text
                                id="SvgjsText2072"
                                font-family="Helvetica, Arial, sans-serif"
                                x="20"
                                y="108.337"
                                text-anchor="end"
                                dominant-baseline="auto"
                                font-size="11px"
                                font-weight="regular"
                                fill="#373d3f"
                                class="apexcharts-yaxis-label "
                                // style="font-family: Helvetica, Arial, sans-serif;"
                              >
                                90
                              </text>
                              <text
                                id="SvgjsText2073"
                                font-family="Helvetica, Arial, sans-serif"
                                x="20"
                                y="185.274"
                                text-anchor="end"
                                dominant-baseline="auto"
                                font-size="11px"
                                font-weight="regular"
                                fill="#373d3f"
                                class="apexcharts-yaxis-label "
                                // style="font-family: Helvetica, Arial, sans-serif;"
                              >
                                60
                              </text>
                              <text
                                id="SvgjsText2074"
                                font-family="Helvetica, Arial, sans-serif"
                                x="20"
                                y="262.21099999999996"
                                text-anchor="end"
                                dominant-baseline="auto"
                                font-size="11px"
                                font-weight="regular"
                                fill="#373d3f"
                                class="apexcharts-yaxis-label "
                                // style="font-family: Helvetica, Arial, sans-serif;"
                              >
                                30
                              </text>
                              <text
                                id="SvgjsText2075"
                                font-family="Helvetica, Arial, sans-serif"
                                x="20"
                                y="339.14799999999997"
                                text-anchor="end"
                                dominant-baseline="auto"
                                font-size="11px"
                                font-weight="regular"
                                fill="#373d3f"
                                class="apexcharts-yaxis-label "
                                // style="font-family: Helvetica, Arial, sans-serif;"
                              >
                                0
                              </text>
                            </g>
                          </g>
                        </svg>
                        <div class="apexcharts-legend"></div>
                        <div
                          class="apexcharts-tooltip light"
                          // style={{left: 348.848, top: 43}}
                        >
                          <div
                            class="apexcharts-tooltip-title"
                            // style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                          >
                            Apr
                          </div>
                          <div
                            class="apexcharts-tooltip-series-group active"
                            // style={{display: flex}}
                          >
                            <span
                              class="apexcharts-tooltip-marker"
                              // style={{backgroundcolor: rgb(229, 234, 238)}}
                            ></span>
                            <div
                              class="apexcharts-tooltip-text"
                              // style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                            >
                              <div class="apexcharts-tooltip-y-group">
                                <span class="apexcharts-tooltip-text-label">
                                  Revenue:{" "}
                                </span>
                                <span class="apexcharts-tooltip-text-value">
                                  101
                                </span>
                              </div>
                              <div class="apexcharts-tooltip-z-group">
                                <span class="apexcharts-tooltip-text-z-label"></span>
                                <span class="apexcharts-tooltip-text-z-value"></span>
                              </div>
                            </div>
                          </div>
                          <div
                            class="apexcharts-tooltip-series-group"
                            // style={{display: none}}
                          >
                            <span
                              class="apexcharts-tooltip-marker"
                              // style="background-color: rgb(229, 234, 238);"
                            ></span>
                            <div
                              class="apexcharts-tooltip-text"
                              // style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"
                            >
                              <div class="apexcharts-tooltip-y-group">
                                <span class="apexcharts-tooltip-text-label">
                                  Revenue:{" "}
                                </span>
                                <span class="apexcharts-tooltip-text-value">
                                  101
                                </span>
                              </div>
                              <div class="apexcharts-tooltip-z-group">
                                <span class="apexcharts-tooltip-text-z-label"></span>
                                <span class="apexcharts-tooltip-text-z-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 ">
                <div className="white_card card_height_100 mb_30 sales_card_wrapper">
                  <div className="white_card_header d-flex justify-content-end">
                    <button className="export_btn">Export</button>
                  </div>

                  <div className="sales_card_body">
                    <div className="single_sales">
                      <span>Paid Visit</span>
                      <h3>6550</h3>
                    </div>
                    <div className="single_sales">
                      <span>Total Visit</span>
                      <h3>5646,454</h3>
                    </div>
                    <div className="single_sales">
                      <span>Expence</span>
                      <h3>$650</h3>
                    </div>
                    <div className="single_sales">
                      <span>Commission</span>
                      <h3>$56</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 ">
                <div className="white_card card_height_100 mb_30 social_media_card">
                  <div className="white_card_header">
                    <div className="main-title">
                      <h3 className="m-0">Social media</h3>
                      <span>About Your Social Popularity</span>
                    </div>
                  </div>
                  <div className="media_thumb ml_25">
                    <img src={media} alt />
                  </div>
                  <div className="media_card_body">
                    <div className="media_card_list">
                      <div className="single_media_card">
                        <span>Followers</span>
                        <h3>35.6 K</h3>
                      </div>
                      <div className="single_media_card">
                        <span>Followers</span>
                        <h3>35.6 K</h3>
                      </div>
                      <div className="single_media_card">
                        <span>Followers</span>
                        <h3>35.6 K</h3>
                      </div>
                      <div className="single_media_card">
                        <span>Followers</span>
                        <h3>35.6 K</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="white_card card_height_100 mb_30">
                  <div className="white_card_header">
                    <div className="box_header m-0">
                      <div className="main-title">
                        <h3 className="m-0">Visitors by Browser</h3>
                        <span>15654 Visaitors</span>
                      </div>
                      <div className="float-lg-right float-none common_tab_btn justify-content-end">
                        <ul className="nav">
                          <li className="nav-item">
                            <a className="nav-link active">Week</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Day</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="white_card_body">
                    <div id="chart-currently"></div>
                    <div className="monthly_plan_wraper">
                      <div className="single_plan d-flex align-items-center justify-content-between">
                        <div className="plan_left d-flex align-items-center">
                          <div className="thumb">
                            <img src={crome} alt />
                          </div>
                          <div>
                            <h5>Chrome Users</h5>
                            <span>Today</span>
                          </div>
                        </div>
                        <span className="brouser_btn">+2155</span>
                      </div>
                      <div className="single_plan d-flex align-items-center justify-content-between">
                        <div className="plan_left d-flex align-items-center">
                          <div className="thumb">
                            <img src={safari} alt />
                          </div>
                          <div>
                            <h5>Chrome Users</h5>
                            <span>Today</span>
                          </div>
                        </div>
                        <span className="brouser_btn">+54</span>
                      </div>
                      <div className="single_plan d-flex align-items-center justify-content-between">
                        <div className="plan_left d-flex align-items-center">
                          <div className="thumb">
                            <img src={OBJECTS} alt />
                          </div>
                          <div>
                            <h5>Chrome Users</h5>
                            <span>Today</span>
                          </div>
                        </div>
                        <span className="brouser_btn">+22</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 ">
                <div className="white_card card_height_100 mb_30">
                  <div className="white_card_header">
                    <div className="main-title">
                      <h3 className="m-0">Visitors by Device</h3>
                      <span>15654 Visaitors</span>
                    </div>
                  </div>
                  <div className="white_card_body ">
                    <div className="card_container">
                      <div
                        id="platform_type_dates_donut"
                        style={{ height: 280 }}
                      ></div>
                    </div>
                    <div className="devices_btn text-center">
                      <a className="color_button color_button2">Android</a>
                      <a className="color_button">iphone</a>
                      <a className="color_button color_button3">Others</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="white_card card_height_100 mb_30 ">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="white_card_header">
                        <div className="box_header m-0">
                          <div className="main-title">
                            <h3 className="m-0">Running Campain</h3>
                            <span>Overview</span>
                          </div>
                        </div>
                      </div>
                      <div className="white_card_body QA_section">
                        <div className="QA_table ">
                          <table className="table lms_table_active2 p-0">
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
                                  <div className="customer d-flex align-items-center">
                                    <div className="social_media">
                                      <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <div className="ml_18">
                                      <h3 className="f_s_18 f_w_900 mb-0">
                                        Facebook Promotion
                                      </h3>
                                      <span className="f_s_12 f_w_700 text_color_8">
                                        Unique Watch
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <h3 className="f_s_18 f_w_900 mb-0">
                                      08:32
                                    </h3>
                                    <span className="f_s_12 f_w_700 color_text_3">
                                      12.12.2022
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <h3 className="f_s_18 f_w_800 mb-0">
                                      H&G Fashion
                                    </h3>
                                    <span className="f_s_12 f_w_500 color_text_3">
                                      Fashion and design
                                    </span>
                                  </div>
                                </td>
                                <td className="f_s_14 f_w_400 color_text_3">
                                  <a className="badge_active">Active</a>
                                </td>
                                <td>
                                  <div className="action_btns d-flex">
                                    <a className="action_btn mr_10">
                                      {" "}
                                      <i className="far fa-edit"></i>{" "}
                                    </a>
                                    <a className="action_btn">
                                      {" "}
                                      <i className="fas fa-trash"></i>{" "}
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="customer d-flex align-items-center">
                                    <div className="social_media insta_bg">
                                      <i className="fab fa-instagram"></i>
                                    </div>
                                    <div className="ml_18">
                                      <h3 className="f_s_18 f_w_900 mb-0">
                                        Instagram
                                      </h3>
                                      <span className="f_s_12 f_w_700 text_color_9">
                                        Unique Watch
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <h3 className="f_s_18 f_w_900 mb-0">
                                      08:32
                                    </h3>
                                    <span className="f_s_12 f_w_700 color_text_3">
                                      12.12.2022
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <h3 className="f_s_18 f_w_800 mb-0">
                                      H&G Fashion
                                    </h3>
                                    <span className="f_s_12 f_w_500 color_text_3">
                                      Fashion and design
                                    </span>
                                  </div>
                                </td>
                                <td className="f_s_14 f_w_400 color_text_3">
                                  <a className="badge_active2">Posed</a>
                                </td>
                                <td>
                                  <div className="action_btns d-flex">
                                    <a className="action_btn mr_10">
                                      {" "}
                                      <i className="far fa-edit"></i>{" "}
                                    </a>
                                    <a className="action_btn">
                                      {" "}
                                      <i className="fas fa-trash"></i>{" "}
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="customer d-flex align-items-center">
                                    <div className="social_media twitter_bg">
                                      <i className="fab fa-twitter"></i>
                                    </div>
                                    <div className="ml_18">
                                      <h3 className="f_s_18 f_w_900 mb-0">
                                        Twitter
                                      </h3>
                                      <span className="f_s_12 f_w_700 text_color_10">
                                        Unique Watch
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <h3 className="f_s_18 f_w_900 mb-0">
                                      08:32
                                    </h3>
                                    <span className="f_s_12 f_w_700 color_text_3">
                                      12.12.2022
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <h3 className="f_s_18 f_w_800 mb-0">
                                      H&G Fashion
                                    </h3>
                                    <span className="f_s_12 f_w_500 color_text_3">
                                      Fashion and design
                                    </span>
                                  </div>
                                </td>
                                <td className="f_s_14 f_w_400 color_text_3">
                                  <a className="badge_active3">Closed</a>
                                </td>
                                <td>
                                  <div className="action_btns d-flex">
                                    <a className="action_btn mr_10">
                                      {" "}
                                      <i className="far fa-edit"></i>{" "}
                                    </a>
                                    <a className="action_btn">
                                      {" "}
                                      <i className="fas fa-trash"></i>{" "}
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="customer d-flex align-items-center">
                                    <div className="social_media youtube_bg">
                                      <i className="fab fa-youtube"></i>
                                    </div>
                                    <div className="ml_18">
                                      <h3 className="f_s_18 f_w_900 mb-0">
                                        Youtube
                                      </h3>
                                      <span className="f_s_12 f_w_700 text_color_11">
                                        Summer Campain
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <h3 className="f_s_18 f_w_900 mb-0">
                                      08:32
                                    </h3>
                                    <span className="f_s_12 f_w_700 color_text_3">
                                      12.12.2022
                                    </span>
                                  </div>
                                </td>
                                <td>
                                  <div>
                                    <h3 className="f_s_18 f_w_800 mb-0">
                                      H&G Fashion
                                    </h3>
                                    <span className="f_s_12 f_w_500 color_text_3">
                                      Fashion and design
                                    </span>
                                  </div>
                                </td>
                                <td className="f_s_14 f_w_400 color_text_3">
                                  <a className="badge_active4">End soon</a>
                                </td>
                                <td>
                                  <div className="action_btns d-flex">
                                    <a className="action_btn mr_10">
                                      {" "}
                                      <i className="far fa-edit"></i>{" "}
                                    </a>
                                    <a className="action_btn">
                                      {" "}
                                      <i className="fas fa-trash"></i>{" "}
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 white_card_body pt_25">
                      <div className="project_complete">
                        <div className="single_pro d-flex">
                          <div className="probox"></div>
                          <div className="box_content">
                            <h4>5685</h4>
                            <span>Project completed</span>
                          </div>
                        </div>
                        <div className="single_pro d-flex">
                          <div className="probox blue_box"></div>
                          <div className="box_content">
                            <h4 className="bluish_text">5685</h4>
                            <span className="grayis_text">
                              Project completed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="white_card card_height_100 mb_30 ">
                  <div className="white_card_header">
                    <div className="box_header m-0">
                      <div className="main-title">
                        <h3 className="m-0">Work List</h3>
                        <span>Todo</span>
                      </div>
                    </div>
                  </div>
                  <div className="white_card_body QA_section">
                    <div className="todo_wrapper">
                      <div className="single_todo d-flex justify-content-between align-items-center">
                        <div className="lodo_left d-flex align-items-center">
                          <div className="bar_line mr_10"></div>
                          <div className="todo_box">
                            <label className="form-label primary_checkbox  d-flex mr_10 ">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <div className="todo_head">
                            <h5 className="f_s_18 f_w_900 mb-0">
                              Assign market analysis{" "}
                            </h5>
                            <p className="f_s_12 f_w_400 mb-0 text_color_8">
                              Due 5 Days
                            </p>
                          </div>
                        </div>
                        <div className="lodo_right">
                          {" "}
                          <a className="badge_complete">Complete</a>{" "}
                        </div>
                      </div>
                      <div className="single_todo d-flex justify-content-between align-items-center">
                        <div className="lodo_left d-flex align-items-center">
                          <div className="bar_line red_line mr_10"></div>
                          <div className="todo_box">
                            <label className="form-label primary_checkbox  d-flex mr_10 ">
                              <input type="checkbox" />
                              <span className="checkmark red_check"></span>
                            </label>
                          </div>
                          <div className="todo_head">
                            <h5 className="f_s_18 f_w_900 mb-0">
                              Assign market analysis{" "}
                            </h5>
                            <p className="f_s_12 f_w_400 mb-0 text_color_8">
                              Due 5 Days
                            </p>
                          </div>
                        </div>
                        <div className="lodo_right">
                          {" "}
                          <a className="mark_complete">
                            Mark as completed
                          </a>{" "}
                        </div>
                      </div>
                      <div className="single_todo d-flex justify-content-between align-items-center">
                        <div className="lodo_left d-flex align-items-center">
                          <div className="bar_line red_line mr_10"></div>
                          <div className="todo_box">
                            <label className="form-label primary_checkbox  d-flex mr_10 ">
                              <input type="checkbox" />
                              <span className="checkmark red_check"></span>
                            </label>
                          </div>
                          <div className="todo_head">
                            <h5 className="f_s_18 f_w_900 mb-0">
                              Assign market analysis{" "}
                            </h5>
                            <p className="f_s_12 f_w_400 mb-0 text_color_8">
                              Due 5 Days
                            </p>
                          </div>
                        </div>
                        <div className="lodo_right">
                          {" "}
                          <a className="mark_complete">
                            Mark as completed
                          </a>{" "}
                        </div>
                      </div>
                      <div className="single_todo d-flex justify-content-between align-items-center">
                        <div className="lodo_left d-flex align-items-center">
                          <div className="bar_line mr_10"></div>
                          <div className="todo_box">
                            <label className="form-label primary_checkbox  d-flex mr_10 ">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <div className="todo_head">
                            <h5 className="f_s_18 f_w_900 mb-0">
                              Assign market analysis{" "}
                            </h5>
                            <p className="f_s_12 f_w_400 mb-0 text_color_8">
                              Due 5 Days
                            </p>
                          </div>
                        </div>
                        <div className="lodo_right">
                          {" "}
                          <a className="badge_complete">Complete</a>{" "}
                        </div>
                      </div>
                      <div className="single_todo d-flex justify-content-between align-items-center">
                        <div className="lodo_left d-flex align-items-center">
                          <div className="bar_line mr_10"></div>
                          <div className="todo_box">
                            <label className="form-label primary_checkbox  d-flex mr_10 ">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <div className="todo_head">
                            <h5 className="f_s_18 f_w_900 mb-0">
                              Assign market analysis{" "}
                            </h5>
                            <p className="f_s_12 f_w_400 mb-0 text_color_8">
                              Due 5 Days
                            </p>
                          </div>
                        </div>
                        <div className="lodo_right">
                          {" "}
                          <a className="badge_complete">Complete</a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="white_card card_height_100  mb_20">
                  <div className="white_card_header">
                    <div className="box_header m-0">
                      <div className="main-title">
                        <h3 className="m-0">Visitors from country</h3>
                        <span>Visitors all over the world</span>
                      </div>
                    </div>
                  </div>
                  <div className="white_card_body">
                    <div
                      id="world-map-markers"
                      className="dashboard_w_map pb_20"
                    ></div>
                    <div className="world_list_wraper">
                      <div className="row justify-content-center">
                        <div className="col-lg-9">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="single_progressbar">
                                <h6 className="f_s_14 f_w_400">USA</h6>
                                <div id="bar4" className="barfiller">
                                  <div className="tipWrap">
                                    <span className="tip"></span>
                                  </div>
                                  <span
                                    className="fill"
                                    data-percentage="81"
                                  ></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="single_progressbar">
                                <h6>Australia</h6>
                                <div id="bar5" className="barfiller">
                                  <div className="tipWrap">
                                    <span className="tip"></span>
                                  </div>
                                  <span
                                    className="fill"
                                    data-percentage="58"
                                  ></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="single_progressbar">
                                <h6>Brazil</h6>
                                <div id="bar6" className="barfiller">
                                  <div className="tipWrap">
                                    <span className="tip"></span>
                                  </div>
                                  <span
                                    className="fill"
                                    data-percentage="42"
                                  ></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="single_progressbar">
                                <h6>Latvia</h6>
                                <div id="bar7" className="barfiller">
                                  <div className="tipWrap">
                                    <span className="tip"></span>
                                  </div>
                                  <span
                                    className="fill"
                                    data-percentage="55"
                                  ></span>
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
              <div className="col-xl-4">
                <div className="white_card card_height_100 mb_30">
                  <div className="white_card_header">
                    <div className="box_header m-0">
                      <div className="main-title">
                        <h3 className="m-0">Recent Update</h3>
                      </div>
                    </div>
                  </div>
                  <div className="white_card_body">
                    <div className="Activity_timeline">
                      <ul>
                        <li>
                          <div className="activity_bell"></div>
                          <div className="timeLine_inner d-flex align-items-center">
                            <div className="activity_wrap">
                              <h6>5 min ago</h6>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="activity_bell "></div>
                          <div className="timeLine_inner d-flex align-items-center">
                            <div className="activity_wrap">
                              <h6>5 min ago</h6>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="activity_bell bell_lite"></div>
                          <div className="timeLine_inner d-flex align-items-center">
                            <div className="activity_wrap">
                              <h6>5 min ago</h6>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="activity_bell bell_lite"></div>
                          <div className="timeLine_inner d-flex align-items-center">
                            <div className="activity_wrap">
                              <h6>5 min ago</h6>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="white_card card_height_100 mb_30">
                  <div className="date_picker_wrapper">
                    <div className="default-datepicker">
                      <div className="datepicker-here" data-language="en"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="white_card card_height_100 mb_30">
                  <div className="weatcher_update_wrapper height_100">
                    <div className="row height_100">
                      <div className="col-lg-6">
                        <div className="box_header m-0">
                          <div className="main-title">
                            <h3 className="m-0">Weather Update</h3>
                          </div>
                        </div>
                        <div className="weather_img_1 mt_30">
                          <img className="img-fluid" src={man} alt />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="weather_img_2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="CHAT_MESSAGE_POPUPBOX">
        <div className="CHAT_POPUP_HEADER">
          <div className="MSEESAGE_CHATBOX_CLOSE">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.09939 5.98831L11.772 10.661C12.076 10.965 12.076 11.4564 11.772 11.7603C11.468 12.0643 10.9766 12.0643 10.6726 11.7603L5.99994 7.08762L1.32737 11.7603C1.02329 12.0643 0.532002 12.0643 0.228062 11.7603C-0.0760207 11.4564 -0.0760207 10.965 0.228062 10.661L4.90063 5.98831L0.228062 1.3156C-0.0760207 1.01166 -0.0760207 0.520226 0.228062 0.216286C0.379534 0.0646715 0.578697 -0.0114918 0.777717 -0.0114918C0.976738 -0.0114918 1.17576 0.0646715 1.32737 0.216286L5.99994 4.889L10.6726 0.216286C10.8243 0.0646715 11.0233 -0.0114918 11.2223 -0.0114918C11.4213 -0.0114918 11.6203 0.0646715 11.772 0.216286C12.076 0.520226 12.076 1.01166 11.772 1.3156L7.09939 5.98831Z"
                fill="white"
              />
            </svg>
          </div>
          <h3>Chat with us</h3>
          <div className="Chat_Listed_member">
            <ul>
              <li>
                <a>
                  <div className="member_thumb">
                    <img src="img/staf/1.png" alt />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className="member_thumb">
                    <img src="img/staf/2.png" alt />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className="member_thumb">
                    <img src="img/staf/3.png" alt />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className="member_thumb">
                    <img src="img/staf/4.png" alt />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className="member_thumb">
                    <img src="img/staf/5.png" alt />
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className="member_thumb">
                    <div className="more_member_count">
                      <span>90+</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="CHAT_POPUP_BODY">
          <p className="mesaged_send_date">Sunday, 12 January</p>
          <div className="CHATING_SENDER">
            <div className="SMS_thumb">
              <img src="img/staf/1.png" alt />
            </div>
            <div className="SEND_SMS_VIEW">
              {/* <P>Hi! Welcome .
How can I help you?</P> */}
            </div>
          </div>
          <div className="CHATING_SENDER CHATING_RECEIVEr">
            <div className="SEND_SMS_VIEW">{/* <P>Hello</P> */}</div>
            <div className="SMS_thumb">
              <img src="img/staf/1.png" alt />
            </div>
          </div>
        </div>
        <div className="CHAT_POPUP_BOTTOM">
          <div className="chat_input_box d-flex align-items-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Write your message"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn " type="button">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7821 3.21895C14.4908 -1.07281 7.50882 -1.07281 3.2183 3.21792C-1.07304 7.50864 -1.07263 14.4908 3.21872 18.7824C7.50882 23.0729 14.4908 23.0729 18.7817 18.7815C23.0726 14.4908 23.0724 7.50906 18.7821 3.21895ZM17.5813 17.5815C13.9525 21.2103 8.04773 21.2108 4.41871 17.5819C0.78907 13.9525 0.789485 8.04714 4.41871 4.41832C8.04752 0.789719 13.9521 0.789304 17.5817 4.41874C21.2105 8.04755 21.2101 13.9529 17.5813 17.5815ZM6.89503 8.02162C6.89503 7.31138 7.47107 6.73534 8.18131 6.73534C8.89135 6.73534 9.46739 7.31117 9.46739 8.02162C9.46739 8.73228 8.89135 9.30811 8.18131 9.30811C7.47107 9.30811 6.89503 8.73228 6.89503 8.02162ZM12.7274 8.02162C12.7274 7.31138 13.3038 6.73534 14.0141 6.73534C14.7241 6.73534 15.3002 7.31117 15.3002 8.02162C15.3002 8.73228 14.7243 9.30811 14.0141 9.30811C13.3038 9.30811 12.7274 8.73228 12.7274 8.02162ZM15.7683 13.2898C14.9712 15.1332 13.1043 16.3243 11.0126 16.3243C8.8758 16.3243 6.99792 15.1272 6.22834 13.2744C6.09642 12.9573 6.24681 12.593 6.56438 12.4611C6.64238 12.4289 6.72328 12.4136 6.80293 12.4136C7.04687 12.4136 7.27836 12.5577 7.37772 12.7973C7.95376 14.1842 9.38048 15.0799 11.0126 15.0799C12.6077 15.0799 14.0261 14.1836 14.626 12.7959C14.7625 12.4804 15.1288 12.335 15.4441 12.4717C15.7594 12.6084 15.9048 12.9745 15.7683 13.2898Z"
                      fill="#707DB7"
                    />
                  </svg>
                </button>
                <button className="btn" type="button">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0.289062C4.92455 0.289062 0 5.08402 0 10.9996C0 16.9152 4.92455 21.7101 11 21.7101C17.0755 21.7101 22 16.9145 22 10.9996C22 5.08472 17.0755 0.289062 11 0.289062ZM11 20.3713C5.68423 20.3713 1.375 16.1755 1.375 10.9996C1.375 5.82371 5.68423 1.62788 11 1.62788C16.3158 1.62788 20.625 5.82371 20.625 10.9996C20.625 16.1755 16.3158 20.3713 11 20.3713ZM15.125 10.3302H11.6875V6.98314C11.6875 6.61363 11.3795 6.31373 11 6.31373C10.6205 6.31373 10.3125 6.61363 10.3125 6.98314V10.3302H6.875C6.4955 10.3302 6.1875 10.6301 6.1875 10.9996C6.1875 11.3691 6.4955 11.669 6.875 11.669H10.3125V15.016C10.3125 15.3855 10.6205 15.6854 11 15.6854C11.3795 15.6854 11.6875 15.3855 11.6875 15.016V11.669H15.125C15.5045 11.669 15.8125 11.3691 15.8125 10.9996C15.8125 10.6301 15.5045 10.3302 15.125 10.3302Z"
                      fill="#707DB7"
                    />
                  </svg>

                  <input type="file" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="back-top" style="display: none;">
<a title="Go to Top"  >
<i className="ti-angle-up"></i>
</a>
</div> */}
    </>
  );
};

export default Home;
