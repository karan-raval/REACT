import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/action";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
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
  const [count,setcount]=useState(0)
  const [cartItems, setCartItems] = useState([]);
  // console.log(state);
  useEffect(() => {
    dispatch(getData);
  }, []);

  const { user } = useSelector((s) => s.UserReducer);
  // console.log(user);




  const handleCart = async (id) => {
    if (!user) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    // Check if product is already in the cart
    const productInCart = cartItems.some((item) => item.id === id);

    if (productInCart) {
      alert("Product is already in the cart");
    } else {
      // Add product to the cart
      const productDoc = doc(db, "products", id);
      const productData = await getDoc(productDoc);

      if (productData.exists()) {
        const cartItem = {
          ...productData.data(),
          userEmail: user.email,
        };

        await addDoc(CartCollection, cartItem);
        toast.success("Data Added To Cart Successfully", { autoClose: 3000 });
        setCartItems([...cartItems, cartItem]); // Update the cart items state
        dispatch(getData());
      }
    }
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
                <span>Home</span> <span className="mx-2 mb-0">/</span>
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
                          <span className="dropdown-item">Men</span>
                          <span className="dropdown-item">Women</span>
                          <span className="dropdown-item">Children</span>
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
                          <span className="dropdown-item">Relevance</span>
                          <span className="dropdown-item">Name, A to Z</span>
                          <span className="dropdown-item">Name, Z to A</span>
                          <div className="dropdown-divider"></div>
                          <span className="dropdown-item">
                            Price, low to high
                          </span>
                          <span className="dropdown-item">
                            Price, high to low
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-5">
                  {state &&
                    state.product.map((el) => {
                      return (
                        <div
                          className="col-sm-6 col-lg-4 mb-4"
                          data-aos="fade-up"
                          key={el.id}
                        >
                          <div className="block-4 text-center border">
                            <figure className="block-4-image">
                              <span>
                                <img
                                  src={el.imageURL}
                                  alt="Image placeholder"
                                  className="img-fluid"
                                />
                              </span>
                            </figure>
                            <div className="block-4-text p-4">
                              <h3>
                                <span>{el.product}</span>
                              </h3>
                              <p className="mb-0">{el.category}</p>
                              <p className="text-primary font-weight-bold">
                                ${el.price}
                              </p>
                              <input
                                type="submit"
                                onClick={() => handleCart(el.id)}
                                className="btn btn-sm btn-primary"
                                value="Add To Cart"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="col-md-3 order-1 mb-5 mb-md-0">
                <div className="border p-4 rounded mb-4">
                  <h3 className="mb-3 h6 text-uppercase text-black d-block">
                    Categories
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <span className="d-flex">
                        <span>Men</span>{" "}
                        <span className="text-black ml-auto">(2,220)</span>
                      </span>
                    </li>
                    <li className="mb-1">
                      <span className="d-flex">
                        <span>Women</span>{" "}
                        <span className="text-black ml-auto">(2,550)</span>
                      </span>
                    </li>
                    <li className="mb-1">
                      <span className="d-flex">
                        <span>Children</span>{" "}
                        <span className="text-black ml-auto">(2,124)</span>
                      </span>
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
                    <span className="d-flex color-item align-items-center">
                      <span className="bg-danger color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Red (2,429)</span>
                    </span>
                    <span className="d-flex color-item align-items-center">
                      <span className="bg-success color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Green (2,298)</span>
                    </span>
                    <span className="d-flex color-item align-items-center">
                      <span className="bg-info color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Blue (1,075)</span>
                    </span>
                    <span className="d-flex color-item align-items-center">
                      <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
                      <span className="text-black">Purple (1,075)</span>
                    </span>
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
