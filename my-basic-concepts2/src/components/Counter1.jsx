import React from 'react'
import useCounter from '../hooks/UseCounter';


const Counter1 = () => {
    const {count,increment,decrement,reset} = useCounter(0);
  return (
    <div>Counter1
        <h2>{count}</h2>
        <button onClick={increment}> +</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
    
  );
};

export default Counter1