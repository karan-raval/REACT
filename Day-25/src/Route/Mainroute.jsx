import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Productpage from '../Pages/Productpage'
import Singleproduct from '../Pages/Singleproduct'

const Mainroute = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Productpage/>}></Route>  
      <Route path='/product/:id' element={<Singleproduct/>}></Route>  
    </Routes>    
    </>
  )
}

export default Mainroute