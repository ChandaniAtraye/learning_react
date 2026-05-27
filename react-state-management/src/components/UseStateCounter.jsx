import { useState } from "react"

const UseStateCounter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prev => Math.min(prev + 1, 10));
    };
    const handleDecrement = () => {
        setCount(prev => Math.max(prev - 1, 0));
    };

    return (
        <>

            <div className="container mt-5">
                <div className="text-danger">UseStateCounter</div>
                <h2>Counter :{count}</h2>
                {/* <button className="btn btn-primary m-2" onClick={()=> setCount(count + 1)}>+</button>
                <button className="btn btn-primary m-2" onClick={()=> setCount(count - 1)}>-</button> */}
                <button className="btn btn-primary m-2" onClick={handleIncrement}>+</button>
                <button className="btn btn-primary m-2" onClick={handleDecrement}>-</button>
            </div>

        </>
    )
}

export default UseStateCounter