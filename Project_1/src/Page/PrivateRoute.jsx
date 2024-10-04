import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  

  const { isLoading, isError, data, ISLOGIN } = useSelector((s) => s.loginreducer);
  console.log(ISLOGIN)


  return (
    ISLOGIN == true ? children : <Navigate to={'/login'} />
    
  );
};

export default PrivateRoute;
