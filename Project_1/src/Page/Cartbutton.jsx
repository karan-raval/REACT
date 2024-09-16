import React, { useEffect, useState } from "react";
import Navbar from "../Componets/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Componets/Footer";
import "../assets/cart.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { cartData } from "../Redux/Cartpage/action";

const Cartbutton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useSelector((s) => s.cartReducer);

  useEffect(() => {
    dispatch(cartData);
  }, []);

  const handleclick = () => {
    axios
      .get("https://mock-server-app2-dll0.onrender.com/cart")
      .then((res) => {
        const cartItems = res.data; // All items in the cart
        if (cartItems.length > 0) {
          // Create an array of promises to delete each item
          const deletePromises = cartItems.map((el) =>
            axios.delete(`https://mock-server-app2-dll0.onrender.com/cart/${el.id}`) // Use `el.id`
          );
  
          // Wait for all delete requests to complete
          Promise.all(deletePromises)
            .then(() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your cart has been emptied",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                navigate("/"); // Navigate to homepage
              });
            })
            .catch((err) => {
              console.error("Error clearing cart:", err);
            });
        } else {
          // If cart is already empty
          Swal.fire({
            position: "top-end",
            icon: "info",
            title: "Your cart is already empty",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/"); // Navigate to homepage
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching cart:", err);
      });
  };

  return (
    <>
      <Navbar />
      <main className="w-full mt-20">
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-2 sm:px-6 py-4 gap-2 sm:gap-0">
              <div className="flex flex-col gap-1">
                <p className="font-medium">Delivery Address :</p>
                <span className="text-sm">
                  E-604,416-LIG, munjka, Rajkot, Gujarat -{" "}
                  <span className="font-medium">360005</span>
                </span>
              </div>
              <div id="place">
                <button
                  className="w-full sm:w-auto px-16 py-3 font-medium text-white bg-primary-orange shadow rounded-sm"
                  onClick={handleclick}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
            <div className="flex flex-col shadow bg-white" id="data">
              {data.map((el) => (
                <div
                  className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden"
                  key={el.id}
                >
                  <div
                    className="flex flex-col sm:flex-row gap-5 items-stretch w-full"
                    href="#"
                  >
                    <div className="w-full sm:w-1/6 h-28 flex-shrink-0 sm:flex-shrink">
                      <img
                        className="h-full w-full object-contain"
                        src={el.image1}
                        alt={el.image1}
                      />
                    </div>
                    <div className="flex flex-col sm:gap-5 w-full p-1 pr-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
                        <div className="flex flex-col gap-0.5 w-11/12 sm:w-3/5">
                          <p className="truncate">{el.title}</p>
                          <span className="text-sm text-gray-500">
                            {el.brand}
                          </span>
                        </div>
                        <div className="flex flex-col sm:gap-2">
                          <p className="text-sm">
                            Delivery by Mon Sep 27 |
                            <span className="text-primary-green">Free</span>{" "}
                            <span className="line-through">₹40</span>
                          </p>
                          <span className="text-xs text-gray-500">
                            7 Days Replacement Policy
                          </span>
                        </div>
                      </div>
                      <div className="flex items-baseline gap-2 text-xl font-medium">
                        <span>₹{el.price}</span>
                        <span className="text-sm text-gray-500 line-through font-normal">
                          ₹{el.off_price}
                        </span>
                        <span className="text-sm text-primary-green">
                          {el.offer}%&nbsp;off
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">
            <div className="flex flex-col bg-white rounded-sm shadow">
              <h1 className="px-6 py-3 border-b font-medium text-gray-500">
                PRICE DETAILS
              </h1>

              <div className="flex flex-col gap-4 p-6 pb-3">
                <p className="flex justify-between">
                  Price <span id="maintotal"></span>
                </p>
                <p className="flex justify-between">
                  Discount (10% off)
                  <span className="text-primary-green" id="dissco"></span>
                </p>
                <p className="flex justify-between">
                  Delivery Charges{" "}
                  <span className="text-primary-green">FREE</span>
                </p>

                <div className="border border-dashed"></div>
                <p className="flex justify-between text-lg font-medium">
                  Total Amount <span id="total"></span>
                </p>
                <div className="border border-dashed"></div>

                <p className="font-medium text-primary-green" id="line"></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cartbutton;
