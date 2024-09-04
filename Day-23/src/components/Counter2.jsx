import React from 'react'

const Counter2 = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React redux counter 1</h1>
      <div className="card">
           
           <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>+</button> 
        <button disabled={count==0} onClick={() => setCount((count) => count - 1)}>-</button>
        
      </div>
      </>
  )
}

export default Counter2