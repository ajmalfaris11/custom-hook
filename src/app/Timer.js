import React, { useRef, useState } from 'react'

export default function Timer() {

    const [value, start, stop, reset] = useRunTimer(0);

  return (
    <div className='timer'>
      <h1>{value}</h1>
      <div className='tamerBtns'>
        <button className='timerBtn' onClick={start}>START</button>
        <button className='timerBtn' onClick={stop}>STOP</button>
        <button className='timerBtn' onClick={reset}>RESET</button>
      </div>
    </div>
  )
}

function useRunTimer(){

    const interval = useRef();
    const [value, setValue] = useState(0);

    // start the timer
    const start = () => {
        interval.current = setInterval(
            () => {
           setValue(value => value+1)
        },
        1000
    );
        
    }

    // stop the timer
    const stop = ()=> {
        clearInterval(interval.current);
    } 

    // reset the timer
    const reset = () => {
        stop();
        setValue(0)
    }

    return [value, start, stop, reset];

}
