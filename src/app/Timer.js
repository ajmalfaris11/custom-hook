import React, { useRef, useState } from 'react'

export default function Timer() {

    const [value, start] = useRunTimer(0);

  return (
    <div className='timer'>
      <h1>{value}</h1>
      <div>
        <button onClick={start}>START</button>
        <button >STOP</button>
        <button >RESET</button>
      </div>
    </div>
  )
}

function useRunTimer(){

    const interval = useRef();
    const [value, setValue] = useState(0);

    const start = () => {
        setInterval(
            () => {
           setValue(value => value+1)
        },
        1000
    );
        
    }

    return [value, start];

}
