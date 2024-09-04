import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Counter1 = () => {
  
        const value = useSelector((s)=>s)
        const dispatch = useDispatch()
        const handleInc = ()=>{
            dispatch({type : "INC",payload : 1})
        }
        const handleDec = ()=>{
            dispatch({type : "DEC" , payload : 1})
        }
  return (
    <>
      <h1>React redux counter 1</h1>
      <div className="card">
           
           <h1>{value.count}</h1>
        <button onClick={handleInc}>+</button> 
        <button disabled={value.count==0} onClick={handleDec}>-</button>
        
      </div>
    </>
  )
}

export default Counter1