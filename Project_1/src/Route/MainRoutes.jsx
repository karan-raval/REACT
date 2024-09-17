import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Page/Product'
import Singleproduct from '../Page/Singleproduct'
import PageNotFound from '../Page/PageNotFound'
import Home from '../Page/Home'
import Signup from '../Page/Signup'
import Login from '../Page/Login'
import Cartbutton from '../Page/Cartbutton'
import PrivateRoute from '../Page/PrivateRoute'
// import ADminpanel from '../Page/ADminpanel' 

const MainRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/product/:id" element={<PrivateRoute><Singleproduct/></PrivateRoute>}></Route>  
      <Route path="/cart" element={<PrivateRoute><Cartbutton/></PrivateRoute>}></Route>  
      {/* <Route path="/adminpanel" element={<ADminpanel/>}></Route>   */}
      <Route path="*" element={<PageNotFound/>}></Route>  
    </Routes>   
    </>
  )
}

export default MainRoutes


