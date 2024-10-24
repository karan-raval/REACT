import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../App.css'
import shutterbug from "../assets/images/shutterbug-400.jpg";
import jump from "../assets/images/jump-400.jpg";
import wheel from "../assets/images/wheel-400.jpg";
import cookies from "../assets/images/cookies-150.jpg";
import beetle from "../assets/images/beetle-150.jpg";
import tulips from "../assets/images/tulips-150.jpg";
import salad from "../assets/images/salad-150.jpg";
import lamp from "../assets/images/lamp-400.jpg";


function Contact() {
  return (
    <>
    <Header/>
      <section class="s-content s-content--narrow">

<div class="row">

    <div class="s-content__header col-full">
        <h1 class="s-content__header-title">
            Feel Free To Contact Us.
        </h1>
    </div>
     {/* <!-- end s-content__header --> */}

    <div class="s-content__media col-full">
        <div id="map-wrap">
            <div id="map-container"></div>
            <div id="map-zoom-in"></div>
            <div id="map-zoom-out"></div>
        </div>
    </div> 
    {/* <!-- end s-content__media --> */}

    <div class="col-full s-content__main">

        <p class="lead">Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim aliquip Ut incididunt amet ut cupidatat.</p>

        <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
        </p>

        <div class="row">
            <div class="col-six tab-full">
                <h3>Where to Find Us</h3>

                <p>
                1600 Amphitheatre Parkway<br/>
                Mountain View, CA<br/>
                94043 US
                </p>

            </div>

            <div class="col-six tab-full">
                <h3>Contact Info</h3>

                <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="9dfef2f3e9fcfee9ddedf5f4f1f2eef2edf5e4eaf8ffeef4e9f8b3fef2f0">[email&#160;protected]</a><br/>
                <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d6bfb8b0b996a6bebfbab9a5b9a6beafa1b3b4a5bfa2b3f8b5b9bb">[email&#160;protected]</a> <br/>
                Phone: (+1) 123 456
                </p>

            </div>
        </div> 
        {/* <!-- end row --> */}

        <h3>Say Hello.</h3>

        <form name="cForm" id="cForm" method="post" action="">
            <fieldset>

                <div class="form-field">
                    <input name="cName" type="text" id="cName" class="full-width" placeholder="Your Name" value=""/>
                </div>

                <div class="form-field">
                    <input name="cEmail" type="text" id="cEmail" class="full-width" placeholder="Your Email" value=""/>
                </div>

                <div class="form-field">
                    <input name="cWebsite" type="text" id="cWebsite" class="full-width" placeholder="Website"  value=""/>
                </div>

                <div class="message form-field">
                <textarea name="cMessage" id="cMessage" class="full-width" placeholder="Your Message" ></textarea>
                </div>

                <button type="submit" class="submit btn btn--primary full-width">Submit</button>

            </fieldset>
        </form> 
        {/* <!-- end form --> */}


    </div> 
    {/* <!-- end s-content__main --> */}

</div> 
{/* <!-- end row --> */}

</section>
 {/* <!-- s-content --> */}


{/* <!-- s-extra================================================== --> */}
<section className="s-extra">
        <div className="row top">
          <div className="col-eight md-six tab-full popular">
            <h3>Popular Posts</h3>

            <div className="block-1-2 block-m-full popular__posts">
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={wheel} alt="" />
                </a>
                <h5>
                  <a>Visiting Theme Parks Improves Your Health.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-19">Dec 19, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={shutterbug} alt="" />
                </a>
                <h5>
                  <a>Key Benefits Of Family Photography.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-18">Dec 18, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={cookies} alt="" />
                </a>
                <h5>
                  <a>Absolutely No Sugar Oatmeal Cookies.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={beetle} alt="" />
                </a>
                <h5>
                  <a>Throwback To The Good Old Days.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-16">Dec 16, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={tulips} alt="" />
                </a>
                <h5>
                  <a>10 Interesting Facts About Caffeine.</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-14">Dec 14, 2017</time>
                  </span>
                </section>
              </article>
              <article className="col-block popular__post">
                <a className="popular__thumb">
                  <img src={salad} alt="" />
                </a>
                <h5>
                  <a>Healthy Mediterranean Salad Recipes</a>
                </h5>
                <section className="popular__meta">
                  <span className="popular__author">
                    <span>By</span> <a> John Doe</a>
                  </span>
                  <span className="popular__date">
                    <span>on</span>{" "}
                    <time datetime="2017-12-12">Dec 12, 2017</time>
                  </span>
                </section>
              </article>
            </div>
          </div>
          <div className="col-four md-six tab-full about">
            <h3>About Philosophy</h3>

            <p>
              Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
              malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec sollicitudin molestie
              malesuada.
            </p>

            <ul className="about__social">
              <li>
                <a>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row bottom tags-wrap">
          <div className="col-full tags">
            <h3>Tags</h3>

            <div className="tagcloud">
              <a>Salad</a>
              <a>Recipe</a>
              <a>Places</a>
              <a>Tips</a>
              <a>Friends</a>
              <a>Travel</a>
              <a>Exercise</a>
              <a>Reading</a>
              <a>Running</a>
              <a>Self-Help</a>
              <a>Vacation</a>
            </div>
          </div>
        </div>
      </section>
 {/* <!-- end s-extra --> */}
 <Footer/>
    </>
  )
}

export default Contact