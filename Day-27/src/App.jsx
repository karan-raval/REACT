import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [state,setstate]=useState([])


  useEffect(()=>{
    axios.get(`https://mock-server-app2-dll0.onrender.com/product`)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setstate(res.data);
    })
    .catch((err)=>{
      console.log(err);
      
    })
  },[])
  return (
    <>
    {state.map((el)=>(
      <h1>{el.brand}</h1>
    ))
    }
    </>
  )
}

export default App
