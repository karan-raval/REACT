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
      {/* <nav class="sidebar">
<div class="logo d-flex justify-content-between">
<a class="large_logo" href="index.html"><img src="img/logo.png" alt=""/></a>
<a class="small_logo" href="index.html"><img src="img/mini_logo.png" alt=""/></a>
<div class="sidebar_close_icon d-lg-none">
<i class="ti-close"></i>
</div>
</div>
<ul id="sidebar_menu" class="metismenu">
<li>
<a href="index.html" aria-expanded="false" class="active">
<div class="nav_icon_small">
<img src="img/menu-icon/dashboard.svg" alt=""/>
</div>
<div class="nav_title">
<span>Analytic</span>
</div>
</a>
</li>
<li>
<a href="index_2.html" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/2.svg" alt=""/>
</div>
<div class="nav_title">
<span>Default </span>
</div>
</a>
</li>
<li>
<a href="index_3.html" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/3.svg" alt=""/>
</div>
<div class="nav_title">
<span>Dark </span>
</div>
</a>
</li>
<h4 class="menu-text"><span>CUSTOM</span> <i class="fas fa-ellipsis-h"></i> </h4>
<li class="mm-active">
<a class="has-arrow" href="#" aria-expanded="true">
<div class="nav_icon_small">
<img src="img/menu-icon/5.svg" alt=""/>
</div>
<div class="nav_title">
<span>Application </span>
</div>
</a>
<ul class="mm-collapse mm-show" style="">
<li><a href="editor.html">editor</a></li>
<li><a href="mail_box.html">Mail Box</a></li>
<li><a href="chat.html">Chat</a></li>
<li><a href="faq.html">FAQ</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/16.svg" alt=""/>
</div>
<div class="nav_title">
<span>Pages</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="login.html">Login</a></li>
<li><a href="resister.html">Register</a></li>
<li><a href="error_400.html">Error 404</a></li>
<li><a href="error_500.html">Error 500</a></li>
<li><a href="forgot_pass.html">Forgot Password</a></li>
<li><a href="gallery.html">Gallery</a></li>
</ul>
</li>
<h4 class="menu-text"><span>LAYOUT</span> <i class="fas fa-ellipsis-h"></i> </h4>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/4.svg" alt=""/>
</div>
<div class="nav_title">
<span>Themes</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="dark_sidebar.html">Dark Sidebar</a></li>
<li><a href="light_sidebar.html">light Sidebar</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/16.svg" alt=""/>
</div>
<div class="nav_title">
<span>General</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="Minimized_Aside.html">Minimized Aside</a></li>
<li><a href="empty_page.html">Empty page</a></li>
<li><a href="fixed_footer.html">Fixed Footer</a></li>
</ul>
</li>
<li>
<a href="Builder.html" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/2.svg" alt=""/>
</div>
<div class="nav_title">
<span>Builder </span>
</div>
</a>
</li>
<h4 class="menu-text"><span>Elements</span> <i class="fas fa-ellipsis-h"></i> </h4>
<li class="">
<a href="invoice.html" aria-expanded="false">
<div class="nav_icon_small">
{/* <img src="img/menu-icon/6.svg" alt=""> */}
      {/* </div>
<div class="nav_title">
<span>Invoice</span>
</div>
</a>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/4.svg" alt=""/>
</div>
<div class="nav_title">
<span>forms</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="Basic_Elements.html">Basic Elements</a></li>
<li><a href="Groups.html">Groups</a></li>
<li><a href="Max_Length.html">Max Length</a></li>
<li><a href="Layouts.html">Layouts</a></li>
</ul>
</li>
<li class="">
<a href="Board.html" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/5.svg" alt=""/>
</div>
<div class="nav_title">
<span>Board</span>
</div>
</a>
</li>
<li class="">
<a href="calender.html" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/7.svg" alt=""/>
</div>
<div class="nav_title">
<span>Calander</span>
</div>
</a>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/8.svg" alt=""/>
</div>
<div class="nav_title">
<span>Products</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="Products.html">Products</a></li>
<li><a href="Product_Details.html">Product Details</a></li>
<li><a href="Cart.html">Cart</a></li>
<li><a href="Checkout.html">Checkout</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/9.svg" alt=""/>
</div>
<div class="nav_title">
<span>Icons</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="Fontawesome_Icon.html">Fontawesome Icon</a></li>
<li><a href="themefy_icon.html">themefy icon</a></li>
</ul>
</li>
<h4 class="menu-text"><span>Features</span> <i class="fas fa-ellipsis-h"></i> </h4>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/8.svg" alt=""/>
</div>
<div class="nav_title">
<span>Animations</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="wow_animation.html">Animate</a></li>
<li><a href="Scroll_Reveal.html">Scroll Reveal</a></li>
<li><a href="tilt.html">Tilt Animation</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/9.svg" alt=""/>
</div>
<div class="nav_title">
<span>Components</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="accordion.html">Accordions</a></li>
<li><a href="Scrollable.html">Scrollable</a></li>
<li><a href="notification.html">Notifications</a></li>
<li><a href="carousel.html">Carousel</a></li>
<li><a href="Pagination.html">Pagination</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/11.svg" alt=""/>
</div>
<div class="nav_title">
<span>Table</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="data_table.html">Data Tables</a></li>
<li><a href="bootstrap_table.html">Bootstrap</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/12.svg" alt=""/>
</div>
<div class="nav_title">
<span>Cards</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="basic_card.html">Basic Card</a></li>
<li><a href="theme_card.html">Theme Card</a></li>
<li><a href="dargable_card.html">Draggable Card</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/12.svg" alt=""/>
</div>
<div class="nav_title">
<span>Charts</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="chartjs.html">ChartJS</a></li>
<li><a href="apex_chart.html">Apex Charts</a></li>
<li><a href="chart_sparkline.html">Chart sparkline</a></li>
<li><a href="am_chart.html">am-charts</a></li>
<li><a href="nvd3_charts.html">nvd3 charts.</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/3.svg" alt=""/>
</div>
<div class="nav_title">
<span>UI Kits </span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="colors.html">colors</a></li>
<li><a href="Alerts.html">Alerts</a></li>
<li><a href="buttons.html">Buttons</a></li>
<li><a href="modal.html">modal</a></li>
<li><a href="dropdown.html">Droopdowns</a></li>
<li><a href="Badges.html">Badges</a></li>
<li><a href="Loading_Indicators.html">Loading Indicators</a></li>
<li><a href="State_color.html">State color</a></li>
<li><a href="typography.html">Typography</a></li>
<li><a href="datepicker.html">Date Picker</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/14.svg" alt=""/>
</div>
<div class="nav_title">
<span>Widgets</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="chart_box_1.html">Chart Boxes 1</a></li>
<li><a href="profilebox.html">Profile Box</a></li>
</ul>
</li>
<li class="">
<a class="has-arrow" href="#" aria-expanded="false">
<div class="nav_icon_small">
<img src="img/menu-icon/15.svg" alt=""/>
</div>
<div class="nav_title">
<span>Maps</span>
</div>
</a>
<ul class="mm-collapse">
<li><a href="mapjs.html">Maps JS</a></li>
<li><a href="vector_map.html">Vector Maps</a></li>
</ul>
</li>
</ul>
</nav> */}
    </>
  );
};

export default Navbar;
