import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
    </Routes>
    </>
  )
}

export default MainRoutes