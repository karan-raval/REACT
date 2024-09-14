import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Page/Product'
import Singleproduct from '../Page/Singleproduct'
import PageNotFound from '../Page/PageNotFound'
import Home from '../Page/Home'
// import ADminpanel from '../Page/ADminpanel' 

const MainRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/product/:id" element={<Singleproduct/>}></Route>  
      {/* <Route path="/adminpanel" element={<ADminpanel/>}></Route>   */}
      <Route path="*" element={<PageNotFound/>}></Route>  
    </Routes>   
    </>
  )
}

export default MainRoutes


