import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductPage from '../Pages/ProductPage'

const Mainroutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<ProductPage/>}></Route>
    </Routes>
    </>
  )
}

export default Mainroutes