import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import Singleproduct from '../Pages/Singleproduct'
import PageNotFound from '../Pages/PageNotFound'


const MainRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Product/>}></Route>
      <Route path="/product/:id" element={<Singleproduct/>}></Route>  
      <Route path="*" element={<PageNotFound/>}></Route>  
    </Routes>   
    </>
  )
}

export default MainRoutes


