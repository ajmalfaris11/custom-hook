import React, { useRef, useState } from 'react'

export default function Timer() {

    const [value, start, stop] = useRunTimer(0);

  return (
    <div className='timer'>
      <h1>{value}</h1>
      <div>
        <button onClick={start}>START</button>
        <button onClick={stop}>STOP</button>
        <button >RESET</button>
      </div>
    </div>
  )
}

function useRunTimer(){

    const interval = useRef();
    const [value, setValue] = useState(0);

    const start = () => {
        interval.current = setInterval(
            () => {
           setValue(value => value+1)
        },
        1000
    );
        
    }

    const stop = ()=> {
        clearInterval(interval.current);
    }

    return [value, start, stop];

}
