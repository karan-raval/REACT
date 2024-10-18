import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import {  useSelector } from 'react-redux';


const PrivateRouter = ({children}) => {
  const { isLoading, isError, data, isLogin } = useSelector((s) => s.UserReducer);
  console.log(isLogin)

  return (
    isLogin == true ? children : <Navigate to={'/login'} />
  )
}

export default PrivateRouter;