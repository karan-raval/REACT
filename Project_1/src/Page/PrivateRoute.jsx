import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [val, setVal] = useState(true);  

  const { isLoading, isError, data, ISLOGIN } = useSelector((s) => s.loginreducer);

  useEffect(() => {
    if (ISLOGIN) {
      setVal(true);   
    } else {
      setVal(true);  
    }
  }, [ISLOGIN]);  

  console.log('Login state:', val);

  return (
    val === true ? children : <Navigate to={'/login'} />
  );
};

export default PrivateRoute;
