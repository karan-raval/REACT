import React from 'react'
import hero_1 from '../assets/image/hero_1.jpg'

const Footer = () => {
  return (
    <>
        <footer className="site-footer border-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="row">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Navigations</h3>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><a  >Sell online</a></li>
                  <li><a  >Features</a></li>
                  <li><a  >Shopping cart</a></li>
                  <li><a  >Store builder</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><a  >Mobile commerce</a></li>
                  <li><a  >Dropshipping</a></li>
                  <li><a  >Website development</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><a  >Point of sale</a></li>
                  <li><a  >Hardware</a></li>
                  <li><a  >Software</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h3 className="footer-heading mb-4">Promo</h3>
            <a   className="block-6">
              <img src={hero_1} alt="Image placeholder" className="img-fluid rounded mb-4"/>
              <h3 className="font-weight-light  mb-0">Finding Your Perfect Shoes</h3>
              <p>Promo from  nuary 15 &mdash; 25, 2019</p>
            </a>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="block-5 mb-5">
              <h3 className="footer-heading mb-4">Contact Info</h3>
              <ul className="list-unstyled">
                <li className="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                <li className="phone"><a >+2 392 3929 210</a></li>
                <li className="email"><a className="__cf_email__" data-cfemail="0b6e666a62676a6f6f796e78784b6f64666a626525686466">[email&#160;protected]</a></li>
              </ul>
            </div>

            <div className="block-7">
              <form action="#" method="post">
                <label for="email_subscribe" className="footer-heading">Subscribe</label>
                <div className="form-group">
                  <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email"/>
                  <input type="submit" className="btn btn-sm btn-primary" value="Send"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer