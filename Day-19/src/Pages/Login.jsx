import React, { useEffect, useState } from 'react'

const Login = () => {
  const [state, setstate] = useState(
    JSON.parse(localStorage.getItem("Islogin")) || false
  );

  useEffect(() => {
    localStorage.setItem("Islogin", JSON.stringify(state));
  }, [state]);
  const handleClick=()=>{
    setstate(true)
  }
  const handleClickk=()=>{
    setstate(false)
  }
  return (
    <>
   <button onClick={handleClick}>
    Click To Login
   </button>

   <button onClick={handleClickk}>
    Click To LogOut
   </button>
    </>
  )
}

export default Login