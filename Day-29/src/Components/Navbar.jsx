import React from "react";
import "../assets/style.css";
const Navbar = () => {
  return (
    <>
      <nav className="sidebar">
        <div className="logo d-flex justify-content-between">
          <a className="large_logo">
            <img
              src="https://demo.dashboardpack.com/analytic-html/img/logo.png"
              alt
            />
          </a>
          <a className="small_logo">
            <img src="img/mini_logo.png" alt />
          </a>
          <div className="sidebar_close_icon d-lg-none">
            <i className="ti-close"></i>
          </div>
        </div>
        <ul id="sidebar_menu">
          <li>
            <a aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/dashboard.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Analytic</span>
              </div>
            </a>
          </li>
          <li>
            <a aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/2.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Default </span>
              </div>
            </a>
          </li>
          <li>
            <a aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/3.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Dark </span>
              </div>
            </a>
          </li>
          <h4 className="menu-text">
            <span>CUSTOM</span> <i className="fas fa-ellipsis-h"></i>{" "}
          </h4>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/5.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Application </span>
              </div>
            </a>
            <ul>
              <li>
                <a>editor</a>
              </li>
              <li>
                <a>Mail Box</a>
              </li>
              <li>
                <a>Chat</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/16.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Pages</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Register</a>
              </li>
              <li>
                <a>Error 404</a>
              </li>
              <li>
                <a>Error 500</a>
              </li>
              <li>
                <a>Forgot Password</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
            </ul>
          </li>
          <h4 className="menu-text">
            <span>LAYOUT</span> <i className="fas fa-ellipsis-h"></i>{" "}
          </h4>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/4.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Themes</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Dark Sidebar</a>
              </li>
              <li>
                <a>light Sidebar</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/16.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>General</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Minimized Aside</a>
              </li>
              <li>
                <a>Empty page</a>
              </li>
              <li>
                <a>Fixed Footer</a>
              </li>
            </ul>
          </li>
          <li>
            <a aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/2.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Builder </span>
              </div>
            </a>
          </li>
          <h4 className="menu-text">
            <span>Elements</span> <i className="fas fa-ellipsis-h"></i>{" "}
          </h4>
          <li className>
            <a aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/6.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Invoice</span>
              </div>
            </a>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/4.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>forms</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Basic Elements</a>
              </li>
              <li>
                <a>Groups</a>
              </li>
              <li>
                <a>Max Length</a>
              </li>
              <li>
                <a>Layouts</a>
              </li>
            </ul>
          </li>
          <li className>
            <a aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/5.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Board</span>
              </div>
            </a>
          </li>
          <li className>
            <a aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/7.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Calander</span>
              </div>
            </a>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/8.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Products</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Product Details</a>
              </li>
              <li>
                <a>Cart</a>
              </li>
              <li>
                <a>Checkout</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/9.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Icons</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Fontawesome Icon</a>
              </li>
              <li>
                <a>themefy icon</a>
              </li>
            </ul>
          </li>
          <h4 className="menu-text">
            <span>Features</span> <i className="fas fa-ellipsis-h"></i>{" "}
          </h4>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/8.svg"
                  alt
                />
              </div>
              
              <div className="nav_title">
                <span id='metismenu'>Animations</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Animate</a>
              </li>
              <li>
                <a>Scroll Reveal</a>
              </li>
              <li>
                <a>Tilt Animation</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/9.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Components</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Accordions</a>
              </li>
              <li>
                <a>Scrollable</a>
              </li>
              <li>
                <a>Notifications</a>
              </li>
              <li>
                <a>Carousel</a>
              </li>
              <li>
                <a>Pagination</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/11.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Table</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Data Tables</a>
              </li>
              <li>
                <a>Bootstrap</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/12.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Cards</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Basic Card</a>
              </li>
              <li>
                <a>Theme Card</a>
              </li>
              <li>
                <a>Draggable Card</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/12.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Charts</span>
              </div>
            </a>
            <ul>
              <li>
                <a>ChartJS</a>
              </li>
              <li>
                <a>Apex Charts</a>
              </li>
              <li>
                <a>Chart sparkline</a>
              </li>
              <li>
                <a>am-charts</a>
              </li>
              <li>
                <a>nvd3 charts.</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/3.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>UI Kits </span>
              </div>
            </a>
            <ul>
              <li>
                <a>colors</a>
              </li>
              <li>
                <a>Alerts</a>
              </li>
              <li>
                <a>Buttons</a>
              </li>
              <li>
                <a>modal</a>
              </li>
              <li>
                <a>Droopdowns</a>
              </li>
              <li>
                <a>Badges</a>
              </li>
              <li>
                <a>Loading Indicators</a>
              </li>
              <li>
                <a>State color</a>
              </li>
              <li>
                <a>Typography</a>
              </li>
              <li>
                <a>Date Picker</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/14.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Widgets</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Chart Boxes 1</a>
              </li>
              <li>
                <a>Profile Box</a>
              </li>
            </ul>
          </li>
          <li className>
            <a className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <img
                  src="https://demo.dashboardpack.com/analytic-html/img/menu-icon/15.svg"
                  alt
                />
              </div>
              <div className="nav_title">
                <span>Maps</span>
              </div>
            </a>
            <ul>
              <li>
                <a>Maps JS</a>
              </li>
              <li>
                <a>Vector Maps</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
