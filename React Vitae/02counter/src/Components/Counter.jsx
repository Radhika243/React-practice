import { useState } from 'react'



function Counter() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

 const incrementCount = () =>{
  setCount(prevCount => prevCount + 1)
 }

 const decrementCount = () =>{
  setCount(prevCount => prevCount - 1)
 }

 const resetCount = () =>{
  setCount(initialCount)
 }
  return (
    <>
      <h2 style={{textAlign: "center"}}>{count}</h2>
      <button onClick={incrementCount} style={{display:"block"}}>Increment</button>{" "}
      <button onClick={decrementCount} style={{display:"block"}}>Decrement</button>{" "}
      <button onClick={resetCount} style={{display:"block"}}>Reset</button>
       
    </>
  )
}

export default Counter