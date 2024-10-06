import React, { useEffect, useState } from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import "../assets/product.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "../Redux/Productpage/action";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Product = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((s) => s.productReducer);
  useEffect(() => {
    dispatch(FetchData);
  }, []);
  // const [dataa, setData] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [filterData, setFilter] = useState({
    Hair_Styling_Tools: false,
    Face: false,
    Hair_Removal_Tools: false,
    Massage_Tools: false,
    Shaving_Tools: false,
  });

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let FilteredDatas = data;
  if (
    filterData.Hair_Styling_Tools ||
    filterData.Shaving_Tools ||
    filterData.Face ||
    filterData.Hair_Removal_Tools ||
    filterData.Massage_Tools
  ) {
    FilteredDatas = FilteredDatas.filter((el) => {
      if (
        filterData.Hair_Styling_Tools &&
        el.category == "Hair_Styling_Tools"
      ) {
        return true;
      }
      if (filterData.Shaving_Tools && el.category == "Shaving_Tools") {
        return true;
      }
      if (filterData.Face && el.category == "Face/Skin_Tools") {
        return true;
      }
      if (
        filterData.Hair_Removal_Tools &&
        el.category == "Hair_Removal_Tools"
      ) {
        return true;
      }
      if (filterData.Massage_Tools && el.category == "Massage_Tools") {
        return true;
      }
    });
  }

  if (search) {
    FilteredDatas = FilteredDatas.filter((el) => {
      return el.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  if (sort) {
    console.log(sort);
    FilteredDatas = FilteredDatas.sort((a, b) => {
      if (sort == "asc") {
        return a.price - b.price;
      } else if (sort == "desc") {
        return b.price - a.price;
      } else if (sort == "Aasc") {
        return a.title.localeCompare(b.title);
      } else if (sort == "rating") {
        return a.rating - b.rating;
      } else if (sort == "offer") {
        return b.offer - a.offer;
      }
    });
  }
  const handleFilter = (e) => {
    setFilter({
      ...filterData,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <>
      <div id="parent">
        <Navbar />

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

        <div id="mainProd">
          <div id="area">
            <div className="FILTERANDSORT">
              <div id="sort">
                <select name="" onChange={handleSort} id="sortTag">
                  <option value="">Sort By</option>
                  <option value="Aasc">Name</option>
                  <option value="rating">Rating</option>
                  <option value="offer">Discount</option>
                  <option value="asc">Price low to High</option>
                  <option value="desc">Price High to low</option>
                </select>
                <Checkbox
                  {...label}
                  name="Hair_Styling_Tools"
                  onChange={handleFilter}
                  color="success"
                />
                Hair Styling Tools <br />
                <Checkbox
                  {...label}
                  name="Shaving_Tools"
                  onChange={handleFilter}
                  color="success"
                />
                Shaving Tools <br />
                <Checkbox
                  {...label}
                  name="Face"
                  onChange={handleFilter}
                  color="success"
                />
                Face/Skin Tools <br />
                <Checkbox
                  {...label}
                  name="Hair_Removal_Tools"
                  onChange={handleFilter}
                  color="success"
                />
                Hair Removal Tools
                <br />
                <br />
                <h1 className="se">search</h1>
                <TextField
                  id="outlined-basic"
                  onChange={handleSearch}
                  label="Search Your Favrite Product"
                  variant="outlined"
                />
                {/* <input type="text" onChange={handleSearch} /> */}
              </div>
            </div>
            <div id="PRODUCT">
              {FilteredDatas.map((el) => {
                return (
                  <Link className="link" key={el.id} to={`/product/${el.id}`}>
                    <div className="cardd">
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
                        <Rating
                          name="read-only"
                          value={el.rating}
                          readOnly
                          size="small"
                        />
                        <span className="ratingnum">({el.ratingNum})</span>
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
                  </Link>
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
