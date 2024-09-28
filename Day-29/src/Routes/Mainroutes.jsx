import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import { Login } from '@mui/icons-material'

const Mainroutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
    </Routes>
    </>
  )
}

export default Mainroutes