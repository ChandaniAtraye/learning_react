import React, { useEffect, useState } from 'react'

const SessionDemo = () => {
    const [name,setName] = useState("");

    useEffect(()=>{
        const savedName = sessionStorage.getItem("student");
        if(savedName) setName(savedName);
    },[]);
    const saveName = () => {
        if(!name) return alert("Enter Name");
        sessionStorage.setItem("student",name);
        alert("Saved In session Storage");
    };
    const clearName = () =>{
        sessionStorage.removeItem("student");
        setName("");

    }

  return (
    <div>SessionDemo
        <div className="container col-md-6 mt-5">
            <div className="card shadow">
                <div className="card-header bg-success text-white text-center ">
                    <h4>Session Storage Demo</h4>
                </div>
                <div className="card-body">
                    <input
                    className='form-control mb-3'
                    placeholder='Enter Student Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={saveName} className='btn btn-primary m-2'>Save</button>
                    <button onClick={clearName} className='btn btn-danger'>Remove</button>

                    <h5 className='mt-3'>Stored Name : {name}</h5>
                    <hr/>
                    <p>
                        Refresh Page - Data Stays <br></br>
                        Close Tab - Data Deleted
                    </p>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default SessionDemo