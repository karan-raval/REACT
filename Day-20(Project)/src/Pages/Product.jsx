import React, { useEffect, useState } from "react";
import Navbar from "../Componets/Navbar";
// import '../App.css' 
import Footer from "../Componets/Footer";
import "../product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Rating from '@mui/material/Rating';
const Product = () => {
  const [dataa, setData] = useState([]);
  const [sort, setSort] = useState("");
  // const [search, setSearch] = useState("");
  // const [filterData, setFilter] = useState({
  //   men: false,
  //   women: false,
  //   jewelry: false,
  //   electronics: false,
  // });
  const [fourstar,setfourstar] = useState(<FontAwesomeIcon icon={faStar} />)
  useEffect(() => {
    fetch(`https://mock-server-app2-dll0.onrender.com/product`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };
  // console.log(dataa);
  // console.log(filteredDatas);
  let filteredDatas = dataa;
  // let filteredcata = dataa;
  // if (
  //   filterData.Hair_Styling_Tools ||
  //   filterData.Shaving_Tools ||
  //   filterData.Face ||
  //   filterData.Hair_Removal_Tools ||
  //   filterData.Massage_Tools
  // ) {
  //   filteredcata = filteredcata.filter((el) => {
  //     if (
  //       filterData.Hair_Styling_Tools &&
  //       el.category == "Hair_Styling_Tools"
  //     ) {
  //       return true;
  //     }
  //     if (filterData.Shaving_Tools && el.category == "Shaving_Tools") {
  //       return true;
  //     }
  //     if (filterData.Face && el.category == "Face/Skin_Tools") {
  //       return true;
  //     }
  //     if (
  //       filterData.Hair_Removal_Tools &&
  //       el.category == "Hair_Removal_Tools"
  //     ) {
  //       return true;
  //     }
  //     if (filterData.Massage_Tools && el.category == "Massage_Tools") {
  //       return true;
  //     }
  //   });
  // }

  // if (search) {
  //   filteredDatas = filteredDatas.filter((el) => {
  //     return el.title.toLowerCase().includes(search.toLowerCase());
  //   });
  //   console.log(filteredDatas);
  // }
  if (sort) {
    filteredDatas = filteredDatas.sort((a, b) => {
      if (sort == "asc") {
        return a.price - b.price;
      } else if (sort == "desc") {
        return b.price - a.price;
      }
    });
  }
  // const handleFilter = (e) => {
  //   setFilter({
  //     ...filterData,
  //     [e.target.name]: e.target.checked,
  //   });
  // };

  return (
    <>
      <div id="parent">
        <Navbar />
        <div id="HairTools">
          <h3>Hair Tools & Hair Styling Accessories</h3>
        </div>
        <div id="G-slide">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src="https://images-static.nykaa.com/uploads/ed95a16f-0ccf-4c30-81bf-b2b90b656490.jpg?tr=w-1200,cm-pad_resize"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://images-static.nykaa.com/uploads/0d33d4a4-2e56-404d-95c9-7a8d461f2e76.jpg?tr=w-1200,cm-pad_resize"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://images-static.nykaa.com/uploads/a10a31c4-77c2-4907-a3be-d02ca483efd2.jpg?tr=w-1200,cm-pad_resize"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
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
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
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
        <div id="G-lable">
          <h3>ALL PRODUCTS</h3>
        </div>
        <div id="mainProd">
          <div id="area">
            <div className="FILTERANDSORT">
              <div id="sort">
                <select name="" onChange={handleSort} id="sortTag">
                  <option value="">Sort By</option>
                  <option value="Name">Name</option>
                  <option value="rating">Rating</option>
                  <option value="Discount">Discount</option>
                  <option value="asc">Price low to High</option>
                  <option value="desc">Price High to low</option>
                </select>
                {/* <input
                  type="checkbox"
                  name="Hair_Styling_Tools"
                  onChange={handleFilter}
                />{" "}
                : Hair_Styling_Tools <br />
                <input type="checkbox" name="women" onChange={handleFilter} /> :
                Women
                <input
                  type="checkbox"
                  name="jewelry"
                  onChange={handleFilter}
                />{" "}
                : Jewelery
                <input
                  type="checkbox"
                  name="electronics"
                  onChange={handleFilter}
                />{" "}
                : Electronics */}
                <select name="" id="catF">
                  <option value="">Category</option>
                  <option value="Hair_Styling_Tools">Hair_Styling_Tools</option>
                  <option value="Shaving_Tools">Shaving_Tools</option>
                  <option value="Face/Skin_Tools">Face/Skin_Tools</option>
                  <option value="Hair_Removal_Tools">Hair_Removal_Tools</option>
                  <option value="Massage_Tools">Massage_Tools</option>
                </select>
                {/* <input type="text" onChange={handleSearch} /> */}
              </div>
            </div>
            <div id="PRODUCT">
              {dataa.map((el) => {
                 
                  
                
                return (
                  <div className="card">
                    <span id="G-five">BEST SELLER</span>
                    <div id="G-img">
                      <img src={el.image1} alt={el.id} />
                      <h6 id="G-des">{el.card_title}</h6>
                    </div>
                    <div id="Price-Div">
                      <h6 id="price">
                        MRP: <span id="ear">₹{el.price}</span>
                        <span id="G-real"> ₹{el.off_price}</span>
                        <span id="G-OFF"> |{el.offer}% Off</span>
                      </h6>
                    </div>
                    <h4 id="rating">
                    <Rating name="size-small" size="small" defaultValue={el.rating}  precision={0.1} readOnly /><span className="ratingnum">({el.ratingNum})</span>
                    </h4>
                    <div id="addToBag">
                      <div id="hert">
                        <span id="heart">&#x2661;</span>
                      </div>
                      <div id="add">
                        <div id="add1">
                          <h5>Add to Bag</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
