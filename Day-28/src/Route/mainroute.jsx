import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

const Mainroute = () => {
  return (
    <>
    <Routes>
        <Route path='/' Component={<Login/>}></Route>        
        <Route path='/signup' Component={<Signup/>}></Route>        
    </Routes>
    </>
  )
}

export default Mainroute