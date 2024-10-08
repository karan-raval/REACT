import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/action";
import {  collection, doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseFolder/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { addDoc } from "firebase/firestore";

const ProductPage = () => {
  const dispatch = useDispatch();
  const CartCollection = collection(db, "cart");
  const state = useSelector((s) => s.proReducer);
  const navigate = useNavigate();
  // console.log(state);
  useEffect(() => {
    dispatch(getData);
  }, []);

  const {user}=useSelector((s)=>s.UserReducer)
  // console.log(user);
  

  const handleCart = async (id) => {
  
    let data = doc(db, "cart", id);
    // let obj = getDoc()
    // console.log(user)
    let obj = {
      id : id,
      userEmail : user.email
    }
    // console.log(obj);
    
    await addDoc(CartCollection,obj);
    toast.success("Data Added To Cart Successfully", { autoClose: 3000 });
    dispatch(getData);
  };

  return (
    <>
      <div className="site-wrap">
        <Header />
        <ToastContainer />

        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a>Home</a> <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">Shop</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-9 order-2">
                <div className="row">
                  <div className="col-md-12 mb-5">
                    <div className="float-md-left mb-4">
                      <h2 className="text-black h5">Shop All</h2>
                    </div>
                    <div className="d-flex">
                      <div className="dropdown mr-1 ml-md-auto">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          id="dropdownMenuOffset"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Latest
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuOffset"
                        >
                          <a className="dropdown-item" >
                            Men
                          </a>
                          <a className="dropdown-item"  >
                            Women
                          </a>
                          <a className="dropdown-item"  >
                            Children
                          </a>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm dropdown-toggle"
                          id="dropdownMenuReference"
                          data-toggle="dropdown"
                        >
                          Reference
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuReference"
                        >
                          <a className="dropdown-item"  >
                            Relevance
                          </a>
                          <a className="dropdown-item"  >
                            Name, A to Z
                          </a>
                          <a className="dropdown-item"  >
                            Name, Z to A
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item"  >
                            Price, low to high
                          </a>
                          <a className="dropdown-item"  >
                            Price, high to low
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  {state.product.map((el) => {
                    return (
                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                      <div className="block-4 text-center border">
                        <figure className="block-4-image">
                          <a>
                            <img
                              src={el.imageURL}
                              alt="Image placeholder"
                              className="img-fluid"
                            />
                          </a>
                        </figure>
                        <div className="block-4-text p-4">
                          <h3>
                            <a>{el.product}</a>
                          </h3>
                          <p className="mb-0">{el.category}</p>
                          <p className="text-primary font-weight-bold">
                            ${el.price}
                          </p>
                          <input type="submit" onClick={()=>handleCart(el.id)} className="btn btn-sm btn-primary" value="Add To Cart"/>

                        </div>
                      </div>
                    </div>
                  )})}
                </div>
              </div>

              <div className="col-md-3 order-1 mb-5 mb-md-0">
                <div className="border p-4 rounded mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Categories
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <a   className="d-flex">
                        <span>Men</span>{" "}
                        <span className="text-black ml-auto">(2,220)</span>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a   className="d-flex">
                        <span>Women</span>{" "}
                        <span className="text-black ml-auto">(2,550)</span>
                      </a>
                    </li>
                    <li className="mb-1">
                      <a   className="d-flex">
                        <span>Children</span>{" "}
                        <span className="text-black ml-auto">(2,124)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border p-4 rounded mb-4">
                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                      Filter by Price
                    </h3>
                    <div id="slider-range" className="border-primary"></div>
                    <input
                      type="text"
                      name="text"
                      id="amount"
                      className="form-control border-0 pl-0 bg-white"
                      disabled=""
                    />
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                      Size
                    </h3>
                    <label for="s_sm" className="d-flex">
                      <input type="checkbox" id="s_sm" className="mr-2 mt-1" />{" "}
                      <span className="text-black">Small (2,319)</span>
                    </label>
                    <label for="s_md" className="d-flex">
                      <input type="checkbox" id="s_md" className="mr-2 mt-1" />{" "}
                      <span className="text-black">Medium (1,282)</span>
                    </label>
                    <label for="s_lg" className="d-flex">
                      <input type="checkbox" id="s_lg" className="mr-2 mt-1" />{" "}
                      <span className="text-black">Large (1,392)</span>
                    </label>
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-3 h6 text-uppercase text-black d-block">
                      Color
                    </h3>
                    <a
                       
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-danger color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Red (2,429)</span>
                    </a>
                    <a
                       
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-success color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Green (2,298)</span>
                    </a>
                    <a
                       
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-info color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Blue (1,075)</span>
                    </a>
                    <a
                       
                      className="d-flex color-item align-items-center"
                    >
                      <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Purple (1,075)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
