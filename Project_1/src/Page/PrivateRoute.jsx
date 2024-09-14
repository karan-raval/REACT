import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const [val, setval] = useState( 
    JSON.parse(localStorage.getItem("Islogin")) || false
  );
  return (
    val==true?children:<Navigate to={'/Login'}/>
  )
}

export default PrivateRoute