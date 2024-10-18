import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import AddProduct from '../pages/AddProduct'
import ProductPage from '../pages/ProductPage'
import SingleEditProduct from '../pages/SingleEditProduct'
import PrivateRouter from '../pages/PrivateRouter'

const Mainroutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/addproduct' element={<PrivateRouter><AddProduct/></PrivateRouter>}></Route>
        <Route path='/product' element={<PrivateRouter><ProductPage/></PrivateRouter>}></Route>
        <Route path='/product/edit/:id' element={<PrivateRouter><SingleEditProduct/></PrivateRouter>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </>
  )
}

export default Mainroutes