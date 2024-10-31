import React, { useRef, useState } from 'react';

export default function Timer() {
    const [value, start, stop, reset] = useRunTimer();

    return (
        <div className='timer'>
            <h1>{value}</h1>
            <div className='timerBtns'>
                <button className='timerBtn' onClick={start}>START</button>
                <button className='timerBtn' onClick={stop}>STOP</button>
                <button className='timerBtn' onClick={reset}>RESET</button>
            </div>
        </div>
    );
}

function useRunTimer() {
    const interval = useRef(null);
    const [value, setValue] = useState(0);

    // Start the timer
    const start = () => {
        if (!interval.current) {
            interval.current = setInterval(() => {
                setValue(value => value + 1);
            }, 1000);
        } else {
          setValue(value => 0 );
        }
    };

    // Stop the timer
    const stop = () => {
        clearInterval(interval.current);
        interval.current = false;  // Reset interval reference to allow restart
    };

    // Reset the timer
    const reset = () => {
        stop();
        setValue(0);
    };

    return [value, start, stop, reset];
}
