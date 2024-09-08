import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Commponents/Login";
import Signup from "../Commponents/Signup";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
