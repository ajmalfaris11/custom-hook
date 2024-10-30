import React, { useState } from "react";


export default function Counter() {
  const [number, increment, decrement] = useCounter();

  return (
    <div className="counter">
      <button className="counterBtn" onClick={decrement}>-</button>
      <h1>{number}</h1>
      <button className="counterBtn" onClick={increment}>+</button>
    </div>
  );
}

// Custom hook for count

function useCounter() {
  const [number, setNumber] = useState(0);
  const increment = () => setNumber((i) => i + 1);
  const decrement = () => setNumber((i) => (i > 0 ? i - 1 : 0));

  return [number, increment, decrement];
}
