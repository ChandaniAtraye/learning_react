import axios from 'axios';
import React, { useState } from 'react'

const AxiosExampleCreateNewUser = () => {
    const [name,setName] = useState("");

    const handleSubmit = async () =>{
        try{
            const res = await axios.post("https://jsonplaceholder.typicode.com/users",{
                name:name,
            });
            console.log("User Created" , res.data);
        }catch(err){
            console.log("Error api" ,err);
        }
    };
  return (
    <div>
        <div className="container col-md-6 mt-3 border border-dark">
            <label className='form-label'>Enter Name</label>
            <input
            className='form-control w-50 '
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}/> <br/>
            <button onClick={handleSubmit} className='mb-2'>Create User</button>

        </div>
    </div>
  )
}

export default AxiosExampleCreateNewUser