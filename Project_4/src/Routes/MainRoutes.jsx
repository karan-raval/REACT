import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/aboutus' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes