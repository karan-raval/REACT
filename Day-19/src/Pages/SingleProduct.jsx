import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const obj = useParams()
  const [data,setData] = useState(null)
  useEffect(()=>{
     fetch(`https://mock-server-app-4tp9.onrender.com/product/${obj.id}`)
     .then((Res)=>Res.json())
     .then((res)=>{
      setData(res)
     })
     .catch((err)=>{
       console.log(err)
     })
  },[])
  return (
    <>
    <div>
       {data != null ? <>
        <img src={data.imageURL} alt="" width={"150px"} />
        <h1>{data.product}</h1>
        <h4>{data.strikedOffPrice} - {data.price} </h4> </> : "Not Data Found...."}
    </div>
    </>
  )
}

export default SingleProduct