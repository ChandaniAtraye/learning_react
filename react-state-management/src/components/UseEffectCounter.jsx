import  {React, useEffect, useState } from 'react'

const UseEffectCounter = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Runs on Every Render");
    }); // Every Render
    useEffect(()=>{
        console.log("count changes once",count);
    },[]); // runs only once
    useEffect(()=>{
        console.log("count changed",count);
    },[count]); // run when count updates
  return (
    <div>UseEffectCounter
        <div className="container">
            <h2>{count}</h2>
            <button onClick={()=>setCount(count + 1)}>Increase</button>
        </div>
    </div>
  )
}

export default UseEffectCounter