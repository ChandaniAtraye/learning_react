import React, { useState } from 'react'

const UseStateInputExample = () => {
    const [name,setName] = useState("");

  return (
    <div className="container mt-5">
        <hr></hr>
        <label className="form-label">Enter Name </label>
        <input
        className="form-control"
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}/>
        <h2 className="text-success">Your Entered Name : {name} </h2>


    </div>
  )
}

export default UseStateInputExample