import React from 'react'
import { Navigate } from 'react-router'

const Privateroute = ({children}) => {
    let val = true
  return (
    val == false ? children : <Navigate to={"/Login"} /> 
  )
}

export default Privateroute