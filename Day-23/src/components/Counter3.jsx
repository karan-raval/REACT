import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Counter3 = () => {
  const value = useSelector((deepak)=>deepak)
  const dispatch = useDispatch()
  const handleInc = ()=>{
      dispatch({type : "INC50",payload : 50})
  }
  const handleDec = ()=>{
      dispatch({type : "DEC50" , payload : 50})
  }
  return (
    <>
      <h1>React redux counter 3</h1>
      <div className="card">
           
           <h1>{value.count3}</h1>
        <button onClick={handleInc}>+</button> 
        <button disabled={value.count3==0} onClick={handleDec}>-</button>
        
      </div>
    </>
  )
}

export default Counter3