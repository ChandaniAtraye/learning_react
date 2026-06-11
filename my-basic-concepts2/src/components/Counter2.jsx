import React from 'react'
import UseCounter from '../hooks/UseCounter';

const Counter2 = () => {
     const {count,increment,decrement,reset} = UseCounter();
  return (
    <div>Counter2
        <h2>{count}</h2>
        <button onClick={increment}> +</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter2