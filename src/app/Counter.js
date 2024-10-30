import React, { useState } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const increment = ()=> setNumber(i=>i+1);
    const decrement = ()=> setNumber(i=>i-1);
  return (
    <div className='counter'>
        <button onClick={decrement}>-</button>
        <h1>{number}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}
