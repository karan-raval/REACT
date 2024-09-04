import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Counter2 = () => {
    const value = useSelector((deepak)=>deepak)
    const dispatch = useDispatch()
    const handleInc = ()=>{
        dispatch({type : "INCREASE",payload : 10})
    }
    const handleDec = ()=>{
        dispatch({type : "DECREASE" , payload : 10})
    }
  return (
    <>
      <h1>React redux counter 2</h1>
      <div className="card">
           <h1>{value.count1}</h1>
        <button onClick={handleInc}>+</button> 
        <button disabled={value.count1==0} onClick={handleDec}>-</button>
      </div>
      </>
  )
}

export default Counter2