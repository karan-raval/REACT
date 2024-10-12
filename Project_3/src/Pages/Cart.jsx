import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { getData } from "../Redux/Product/action";
import { db } from "../FirebaseFolder/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const proCollection = collection(db, "cart");
  const [state, setState] = useState([]);
  const {user} = useSelector((s) => s.UserReducer);
  // console.log(user);
  useEffect(() => {
    const cartdata = async () => {
      let data = await getDocs(proCollection);
      //  console.log(data)
      let val = data.docs.map((el) => ({
        ...el.data(),
      }));
      setState(val);
    };
    cartdata();
  }, []);

  useEffect(() => {
    dispatch(getData);
  }, []);

  const handleDelete = async (price) => {
    try {
      let data = doc(db, "cart", price);
      await deleteDoc(data);
      toast.success("Data Deleted Successfully", { autoClose: 3000 });
      dispatch(getData)
    } catch (error) {
      console.log(error);
      toast.error("Error deleting item", { autoClose: 3000 });
    }
  };



  // console.log(state);
  return (
    <>
      <div className="site-wrap">
        <Header />
      <ToastContainer />

        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <span href="index.html">Home</span>{" "}
                <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">Cart</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Category</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state && state.filter(el=>el.userEmail==user.email).map((el) => {
                       return ( 
                      <tr>
                    <td className="product-thumbnail">
                      <img src={el.imageURL} alt="Image" className="img-fluid"/>
                    </td>
                    <td className="product-name">
                      <h2 className="h5 text-black">{el.product}</h2>
                    </td>
                    <td>{el.category}</td>
                    <td>${el.price}</td>
                    <td><button className="btn btn-primary btn-sm" type="button"  onClick={() => handleDelete(el.price)}>X</button></td>
                  </tr> 
                       )})}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <button className="btn btn-primary btn-sm btn-block">
                      Update Cart
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-outline-primary btn-sm btn-block">
                      Continue Shopping
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="text-black h4">Coupon</label>
                    <p>Enter your coupon code if you have one.</p>
                  </div>
                  <div className="col-md-8 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control py-3"
                      id="coupon"
                      placeholder="Coupon Code"
                    />
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-primary btn-sm">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">
                          Cart Totals
                        </h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">$230.00</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">$230.00</strong>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <button className="btn btn-primary btn-lg py-3 btn-block">
                          Proceed To Checkout
                        </button>
                      </div>
                    </div>
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

export default Cart;
