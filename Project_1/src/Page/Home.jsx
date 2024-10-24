import React from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import alternative from "../assets/alternative.png";
import img2 from "../assets/image3.png";
import img3 from "../assets/image4.png";
import img4 from "../assets/image5.png";
import img5 from "../assets/image6.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/home.css";
const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Navbar />
      <div className="slide">
        <Carousel responsive={responsive}>
          <div>
            <img src={alternative} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
        </Carousel>
      </div>

      <div id="Slide-down-sec1">
        <div id="G-one">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images-static.nykaa.com/uploads/8bd6e0df-7f5c-4585-95d9-1e0311dc994a.jpg?tr=w-1200,cm-pad_resize"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images-static.nykaa.com/uploads/3f7bc6fc-0747-44d4-acca-993ab1196d3c.jpg?tr=w-1200,cm-pad_resize"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images-static.nykaa.com/uploads/6dd86f98-19ac-4e60-8aae-61849054d13a.jpg?tr=w-1200,cm-pad_resize"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div id="G-two">
          <img
            src="https://images-static.nykaa.com/uploads/f091c144-5551-4131-b8e9-9d884e9cc7a8.gif?tr=w-1200,cm-pad_resize"
            alt="G-two"
          />
        </div>
        <div id="G-three">
          <img
            src="https://images-static.nykaa.com/uploads/f590c35e-7954-4474-b54a-11c991fefc78.jpg?tr=w-1200,cm-pad_resize"
            alt="G-two"
          />
        </div>
        <div id="G-four">
          <h1>TOP BRANDS</h1>
        </div>
        <div id="G-five">
          <div id="card">
            <div id="img">
              <img
                src="https://images-static.nykaa.com/uploads/002b9f6c-9be2-4d4c-b55d-036b22507bc8.gif?tr=w-600,cm-pad_resize"
                alt="G-1"
              />
            </div>
            <div id="insideimg">
              <h3 id="h3tag">Upto 50% Off + Free Lipstick/Serum</h3>
              <h4 id="h4tag">On Order Over Rs. 799</h4>
            </div>
          </div>
          <div id="card">
            <div id="img">
              <img
                src="https://images-static.nykaa.com/uploads/ead3f4ae-c620-4f8d-850a-b0af2b664925.jpg?tr=w-600,cm-pad_resize"
                alt="G-1"
              />
            </div>
            <div id="insideimg">
              <h3 id="h3tag">Upto 50% Off + Free Lipstick/Serum</h3>
              <h4 id="h4tag">On Order Over Rs. 799</h4>
            </div>
          </div>
          <div id="card">
            <div id="img">
              <img
                src="https://images-static.nykaa.com/uploads/9788df49-4036-4e7c-a485-b3965814b3a4.jpg?tr=w-600,cm-pad_resize"
                alt="G-1"
              />
            </div>
            <div id="insideimg">
              <h3 id="h3tag">Upto 50% Off + Free Lipstick/Serum</h3>
              <h4 id="h4tag">On Order Over Rs. 799</h4>
            </div>
          </div>
          <div id="card">
            <div id="img">
              <img
                src="https://images-static.nykaa.com/uploads/cbccfa68-995f-4e81-9989-b673e04eed47.gif?tr=w-600,cm-pad_resize"
                alt=""
              />
            </div>
            <div id="insideimg">
              <h3 id="h3tag">Upto 50% Off + Free Lipstick/Serum</h3>
              <h4 id="h4tag">On Order Over Rs. 799</h4>
            </div>
          </div>
          <div id="card">
            <div id="img">
              <img
                src="https://images-static.nykaa.com/uploads/e41c2691-661c-4f64-9a18-167626a58e62.jpg?tr=w-600,cm-pad_resize"
                alt=""
              />
            </div>
            <div id="insideimg">
              <h3 id="h3tag">Upto 50% Off + Free Lipstick/Serum</h3>
              <h4 id="h4tag">On Order Over Rs. 799</h4>
            </div>
          </div>
          <div id="card">
            <div id="img">
              <img
                src="https://images-static.nykaa.com/uploads/b3eb7431-5863-4866-b878-5abba5e42e4e.gif?tr=w-600,cm-pad_resize"
                alt=""
              />
            </div>
            <div id="insideimg">
              <h3 id="h3tag">Upto 50% Off + Free Lipstick/Serum</h3>
              <h4 id="h4tag">On Order Over Rs. 799</h4>
            </div>
          </div>
          <div id="card">
            <div id="img">
              <img
                src="https://images-static.nykaa.com/uploads/6f44626f-09b9-4ea0-af21-e5a2004b894a.gif?tr=w-600,cm-pad_resize"
                alt=""
              />
            </div>
            <div id="insideimg">
              <h3 id="h3tag">Upto 50% Off + Free Lipstick/Serum</h3>
              <h4 id="h4tag">On Order Over Rs. 799</h4>
            </div>
          </div>
          <div id="card">
            <div id="img">
              <img
                src="https://images-static.nykaa.com/uploads/21e24cff-d875-433a-a3cc-766fc6063501.jpg?tr=w-600,cm-pad_resize"
                alt=""
              />
            </div>
            <div id="insideimg">
              <h3 id="h3tag">Upto 50% Off + Free Lipstick/Serum</h3>
              <h4 id="h4tag">On Order Over Rs. 799</h4>
            </div>
          </div>
        </div>
      </div>
      <div id="G-six">
        <img
          src="https://images-static.nykaa.com/uploads/ea8b06f4-c904-462b-b47d-19a932bee718.gif?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>

      <div id="ONLYATNYKAA">
        <div id="ONLYTAG">
          {" "}
          <h2>ONLY AT NYKAA</h2>{" "}
        </div>
        <div id="ONLYITEMS">
          <div>
            <div id="card">
              <div id="img">
                <img
                  src="https://images-static.nykaa.com/uploads/0b1e6401-1af6-4157-ab24-74a1219288ab.gif?tr=w-600,cm-pad_resize"
                  alt="G-1"
                />
              </div>
              <div id="insideimg">
                <h3 id="h3tag">Flat 25% Off On Combos</h3>
                <h4 id="h4tag">Build Your Healthy Hair Regime</h4>
              </div>
            </div>
          </div>
          <div>
            <div id="card">
              <div id="img">
                <img
                  src="https://images-static.nykaa.com/uploads/73e875f2-b463-4d43-a6b9-27cd81161509.gif?tr=w-600,cm-pad_resize"
                  alt="G-1"
                />
              </div>
              <div id="insideimg">
                <h3 id="h3tag">On Rs. 5000: Mini Matte Lipstick +</h3>
                <h4 id="h4tag">On Rs.7000: Deluxe Airbrush Flawless Finish</h4>
              </div>
            </div>
          </div>
          <div>
            <div id="card">
              <div id="img">
                <img
                  src="https://images-static.nykaa.com/uploads/5d3e306c-f6a9-4b27-baf0-94eb7dcafb12.gif?tr=w-600,cm-pad_resize"
                  alt="G-1"
                />
              </div>
              <div id="insideimg">
                <h3 id="h3tag">Get 3 Complimentary Gifts</h3>
                <h4 id="h4tag">On Rs.3000</h4>
              </div>
            </div>
          </div>
          <div>
            <div id="card">
              <div id="img">
                <img
                  src="https://images-static.nykaa.com/uploads/f8fcea1d-99d7-495a-82ff-998c80fe2e27.jpg?tr=w-600,cm-pad_resize"
                  alt="G-1"
                />
              </div>
              <div id="insideimg">
                <h3 id="h3tag">Buy 5 Get 5 Free + Min 20% Off </h3>
                <h4 id="h4tag">
                  On Korean Beauty: Sleeping Masks & Spot Patches
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="G-PINK">
        <div id="IMGONE">
          <img
            src="https://images-static.nykaa.com/uploads/01e06084-aaff-4a79-b8ad-56a1925bbc48.png?tr=w-1200,cm-pad_resize"
            alt=""
          />
        </div>
        <div id="TRENDING">
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/a8d2592a-0de3-42b0-87d9-32f163a86f50.png?tr=w-240,cm-pad_resize"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/5481cb5e-c36b-4e07-bb52-b81282e3e3b4.jpg?tr=w-240,cm-pad_resize"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/ac99be64-68ff-4afd-92d2-98e9b4df2b50.png?tr=w-240,cm-pad_resize"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/96b20db6-e6b1-4576-a7c8-314de6d7fa67.png?tr=w-240,cm-pad_resize"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/4bf7f0f9-3075-4a43-bd5d-c78f618c3eed.png?tr=w-240,cm-pad_resize"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div id="featured">
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/058e2e03-66b4-4583-828c-769f0c06e964.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Upto 25% Off</h2>
              <h3>On Entire Range</h3>
            </div>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/ae314ecd-0618-43b8-ac4b-3596a22d006d.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Upto 50% Off + Free Lipstick/Serum</h2>
              <h3>On orders over Rs. 799</h3>
            </div>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/9f613063-436a-4916-b525-b1141721427a.gif?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Flat 10% Off +</h2>
              <h3>Buy 1 Get 1 On Sheet Masks!</h3>
            </div>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/1513a510-f0c0-49a8-be49-31f1615e303e.gif?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Flat 20% Off + Select your free SKINRX</h2>
              <h3>serum worth 799 on Rs. 799</h3>
            </div>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/a80bc586-7e87-4586-98c2-5861b23a6951.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Up Tp 10% off</h2>
              <h3>On #1 Dermatologist Recommended Brand</h3>
            </div>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/1236b09e-d782-427b-9588-3508c3e1b105.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Upto 20% Off </h2>
              <h3>Free Lipstick on ₹599+</h3>
            </div>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/0b4df120-ee6d-4171-a03a-2ca14842d3d6.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Upto 20% Off +</h2>
              <h3>Extra 10% Off On Rs.899</h3>
            </div>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/e1e7c78a-9fa5-4eef-a20c-96219b511777.gif?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Upto 30% off on Skincare Range </h2>
              <h3>Addition 5% of on orders of Rs.399+</h3>
            </div>
          </div>
        </div>
        <div id="featured2">
          <div></div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/fa47226f-5a46-4063-bcdf-95d77b9d815d.jpg?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Upto 50% off</h2>
              <h3>Hiar Biotin Edibles</h3>
            </div>
          </div>
          <div>
            <img
              src="https://images-static.nykaa.com/uploads/1d15f4f5-f421-4281-8138-4974fbbd4d9e.gif?tr=w-300,cm-pad_resize"
              alt=""
            />
            <div>
              <h2>Upto 20% off</h2>
              <h3>On Entire Range</h3>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div id="twocards">
        <div id="card">
          <div id="img">
            <img
              src="https://images-static.nykaa.com/uploads/1e367355-902b-43b5-b229-9c58c7658843.gif?tr=w-600,cm-pad_resize"
              alt=""
            />
          </div>
          <div id="insideimg">
            <h3 id="h3tag">Upto 50% Off + Free Lipstick/Serum</h3>
            <h4 id="h4tag">On Order Over Rs. 799</h4>
          </div>
        </div>
        <div id="card">
          <div id="img">
            <img
              src="https://images-static.nykaa.com/uploads/e7db7c17-19d3-4a58-9b58-b862327daa89.gif?tr=w-600,cm-pad_resize"
              alt=""
            />
          </div>
          <div id="insideimg">
            <h4 id="h4tag">On Order Over Rs. 799</h4>
          </div>
        </div>
      </div>
      <div id="catinfocus">
        <div id="catlogo">
          <h1>CATEGORY IN FOCUS</h1>
        </div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://images-static.nykaa.com/uploads/1bbbc5dc-66eb-45e0-8f9a-dc9891244db2.jpg?tr=w-1200,cm-pad_resize"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images-static.nykaa.com/uploads/8858f425-8d47-49f7-a97f-63072c31e9ec.gif?tr=w-1200,cm-pad_resize"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div id="btn">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          </div>
          <div id="btn">
            <button
              style={{ color: "black" }}
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                style={{ color: "black" }}
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span style={{ color: "black" }} className="visually-hidden">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
      <div id="buylogo">
        <h1>BUYING GUIDE</h1>
      </div>
      <div id="buyguide">
        <div>
          <img
            id="imgg"
            src="https://images-static.nykaa.com/uploads/767840b7-9e77-4eb6-9b77-e7bb17d06fc4.gif?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            id="imgg"
            src="https://images-static.nykaa.com/uploads/ffc690c4-0628-49ce-8f06-3365fdaeacbf.jpg?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            id="imgg"
            src="https://images-static.nykaa.com/uploads/0764b3ba-7544-4ddd-8319-cc0a2b02d271.jpg?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
      </div>
      <div id="editlable">
        <h1>EDITOR'S CHOICE</h1>
      </div>
      <div id="editors">
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/09f63a58-a1ae-4713-8c85-1cf79250ce14.jpg?tr=w-300,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/c6c146de-a2d5-44ec-a35d-82b7aec41b07.jpg?tr=w-300,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/5bf85b1d-63cb-411c-a5a3-f7a42e303e96.jpg?tr=w-300,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/0e4bdc3b-da4e-4846-a203-767d8d2ddaf2.jpg?tr=w-300,cm-pad_resize"
            alt=""
          />
        </div>
      </div>
      <div id="gift">
        <div>
          {" "}
          <h3>GIFT CARD</h3>
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/98a30133-4e10-49d0-b1f7-80d97faa33ff.jpg?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
      </div>
      <div id="try">
        <img
          src="https://images-static.nykaa.com/uploads/3df85e95-5d80-46b7-a8fb-75fd485c35ba.jpg?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>
      <div id="try">
        <img
          src="https://images-static.nykaa.com/uploads/a753f5a0-58ba-4ff6-ae78-6d374e31bbcc.png?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>
      <div id="POP">
        <h2>POP-UP STORIES</h2>
      </div>
      <div id="POP-UP">
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/8b39e3de-7ba4-43e7-a00f-8b80099f4455.jpg?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/7d962482-fbb6-4c74-bed8-6772dbd54d01.jpg?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
      </div>
      <div id="immF">
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/7ed635ed-2389-4e37-9076-b4aabe81a801.jpg?tr=w-300,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/3bca111b-9c2a-44f2-9e62-d8b6df06260a.jpg?tr=w-300,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/29cf6867-0e39-4b93-9c57-e33077d6714a.jpg?tr=w-300,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/13e8d6f2-c2ed-4cd2-a607-514ca1757fb6.jpg?tr=w-300,cm-pad_resize"
            alt=""
          />
        </div>
      </div>
      <div id="try">
        <img
          src="https://images-static.nykaa.com/uploads/6dd86f98-19ac-4e60-8aae-61849054d13a.jpg?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>
      <div id="POP">
        <h2>SPECIAL CURATIONS</h2>
      </div>
      <div id="POP-UP">
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/b3dbf78f-e2a3-454d-88d7-3d3e7557b7f5.gif?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/0767a3b8-61ec-43b0-901b-76ae5563fdb8.png?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
      </div>
      <div id="POP">
        <h2>BEAUTY ADVICE</h2>
      </div>
      <div id="POP-UP">
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/e6ae051f-56e7-4079-93e4-b844af6e1d49.jpg?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/3a5755d8-450a-44cc-9246-c01b592eebcf.jpg?tr=w-600,cm-pad_resize"
            alt=""
          />
        </div>
      </div>
      <div id="try">
        <img
          src="https://images-static.nykaa.com/uploads/58c1c0b0-5a0b-4614-acfc-3205e669d8a7.jpg?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
