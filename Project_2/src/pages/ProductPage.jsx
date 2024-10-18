import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/action";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseFolder/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

const ProductPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.proReducer);
  const navigate = useNavigate();
  console.log(state);
  useEffect(() => {
    dispatch(getData);
  }, []);
  const handleDelete = async (id) => {
    let data = doc(db, "products", id);
    await deleteDoc(data);
    toast.success("Data Deleted Successfully", { autoClose: 3000 });
    dispatch(getData);
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <section className="main_content dashboard_part large_header_bg">
      <Header/>
        <div className="main_content_iner overly_inner ">
          <div className="container-fluid p-0 ">
            <div className="row">
              <div className="col-12">
                <div className="page_title_box d-flex align-items-center justify-content-between">
                  <div className="page_title_left">
                    <h3 className="f_s_30 f_w_700 dark_text">Product</h3>
                    <ol className="breadcrumb page_bradcam mb-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Product</li>
                    </ol>
                  </div>
                  <a className="white_btn3">Create Report</a>
                </div>
              </div>
            </div>
            <div className="row">
              {state.product.map((el) => {
                  let dis= Math.floor(
                    ((el.strikedOffPrice - el.price) / el.strikedOffPrice) * 100)
                return (
                  <div className="col-md-3">
                    <div className="white_card position-relative mb_20 ">
                      <div className="card-body">
                        <div className="ribbon1 rib1-primary">
                          <span className="text-white text-center rib1-primary">
                            {dis}% off
                          </span>
                        </div>
                        <img
                          src={el.imageURL}
                          alt
                          className="d-block mx-auto my-4"
                          height="150"
                        />
                        <div className="row my-4">
                          <div className="col">
                            <span className="badge_btn_3  mb-1">
                              {el.category}
                            </span>
                            <br />
                            <a className="f_w_400 color_text_3 f_s_14 d-block">
                              {el.product}
                            </a>
                          </div>

                          <div className="col-auto">
                            <h4 className="text-dark mt-1">
                              ₹{el.price} &nbsp;&nbsp;
                              <small className="text-muted font-14">
                                <del>₹{el.strikedOffPrice}</del>
                              </small>
                            </h4>
                          </div>
                        </div>
                        <div className="d-grid">
                          <button
                            className="btn_2"
                            onClick={() => navigate(`/product/edit/${el.id}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn_2"
                            onClick={() => handleDelete(el.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
