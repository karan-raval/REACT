import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Product'
import Singleproduct from '../Singleproduct'


const MainRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Product/>}></Route>  
      <Route path="/product/:id" element={<Singleproduct/>}></Route>  
    </Routes>   
    </>
  )
}

export default MainRoutes


