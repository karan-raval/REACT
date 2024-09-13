import React from 'react'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart'
import Product from '../Pages/Product'
import Adminpanel from '../Pages/Adminpanel'
import Pagenotfound from '../Pages/PageNotFound'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../Pages/PrivateRoute'
import Edit  from '../Pages/Edit'
import SingleProduct from '../Pages/SingleProduct'


const Mainroutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/product/:id' element={<SingleProduct/>}></Route>
      <Route path='/adminpanel' element={<PrivateRoute><Adminpanel/></PrivateRoute>}></Route>
      <Route path='*' element={<Pagenotfound/>}></Route>
      <Route path='/product/edit/:id' element={
           <PrivateRoute>
            <Edit/>
            </PrivateRoute>} />
    </Routes>
    </>
  )
}

export default Mainroutes