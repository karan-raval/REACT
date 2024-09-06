import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Commponents/Login";
import Signup from "../Commponents/Signup";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
