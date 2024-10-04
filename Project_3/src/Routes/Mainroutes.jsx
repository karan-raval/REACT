import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const Mainroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default Mainroutes;
