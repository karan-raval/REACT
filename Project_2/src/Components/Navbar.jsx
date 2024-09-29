import React from "react";
import "../assets/style.css";
import { Link } from "react-router-dom";
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
          <li className="mm-active">
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
            <ul class="mm-collapse mm-show">
              <li>
                <Link to={'/login'}>Log In</Link>
              </li>
              <li>
                <Link to={'/signup'}>Register</Link>
              </li>
              <li>
                <Link to={'/addproduct'}>Add-Product</Link>
              </li>
              <li>
              <Link to={'/product'}>Product</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
