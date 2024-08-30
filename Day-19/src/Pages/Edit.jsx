import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = () => {

  const obj = useParams()
    const [data,setData] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`https://mock-server-app-4tp9.onrender.com/product/${obj.id}`)
        .then((Res)=>Res.json())
        .then((res)=>{
         setData(res)
        //  console.log(res);
        })
        .catch((err)=>{
          console.log(err)
        })
    },[])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({...data,[name] : value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`https://mock-server-app-4tp9.onrender.com/product/${obj.id}`,{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            navigate("/product")
        })
        .catch((err)=>console.log(err))
        
    }
  return (
    <>
     <div>
         {data ? <form onSubmit={handleSubmit} >
            <input value={data.product} type="text" name='product' onChange={handleChange} />
            <input value={data.brand} type="text" name='brand' onChange={handleChange} />
            <input value={data.imageURL} type="text" name='imageURL' onChange={handleChange} />
            <input value={data.price} type="text" name='price' onChange={handleChange} />
            <input value={data.strikedOffPrice} type="text" name='strikedOffPrice' onChange={handleChange} />
            <input value={data.category} type="text" name='category' onChange={handleChange} />
            <input type="submit" value={"Update"} />
        </form> : <>Loading.......</>}
    </div>
    </>
  )
}

export default Edit