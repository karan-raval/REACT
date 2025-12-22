import React from 'react'

const SectionOne = () => {
  return (
    <>
<section className=" slider_section ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 ">
            <div className="box">
              <div className="detail-box">
                <h4>
                  Welcome to
                </h4>
                <h1>
                  UROTAXI
                </h1>
              </div>
              <div id="carouselExampleIndicators" className="carousel slide pointer-event" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3" className=""></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="4" className="active"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item">

                    <div className="img-box">
                      <img src="images/slider-img.png" alt=""/>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt=""/>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt=""/>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt=""/>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn-box">
                <a href="" className="btn-1">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 ">
            <div className="slider_form">
              <h4>
                Get A Taxi Now
              </h4>
              <form action="">
                <input type="text" placeholder="Car Type"/>
                <input type="text" placeholder="Pick Up Location"/>
                <input type="text" placeholder="Drop Location"/>
                <div className="btm_input">
                  <input type="text" placeholder="Your Phone Number"/>
                  <button>Book Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default SectionOne