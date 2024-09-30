import React from "react";
import sad from "../assets/images/sad.png";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <div className="erroe_page_wrapper">
        <div className="errow_wrap">
          <div className="container text-center">
            <img src={sad} alt />
            <div className="error_heading  text-center">
              <h3 className="headline font-danger theme_color_6">404</h3>
            </div>
            <div className="col-md-8 offset-md-2 text-center">
              <p>
                The page you are attempting to reach is currently not available.
                This may be because the page does not exist or has been moved.
              </p>
            </div>
            <div className="error_btn  text-center">
              <Link className=" default_btn theme_bg_6" to={"/"}>
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
