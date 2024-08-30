import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Product from '../Pages/Product'
import Singleproduct from '../Pages/Singleproduct'
import Pagenotfound from '../Pages/Pagenotfound'
import Login from '../Pages/Login'
import PrivateRoute from '../Pages/Privateroute'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
        <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>}></Route>
        <Route path='/singleproduct' element={<Singleproduct/>}></Route>
        <Route path='*' element={<Pagenotfound/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes