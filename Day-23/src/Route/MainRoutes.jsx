import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter1 from "../components/Counter1";
import Counter2 from "../components/Counter2";
import Counter3 from "../components/Counter3";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter1 />}></Route>
        <Route path="/counter2" element={<Counter2 />}></Route>
        <Route path="/counter3" element={<Counter3 />}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
