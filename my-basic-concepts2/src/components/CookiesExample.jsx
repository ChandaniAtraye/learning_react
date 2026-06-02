import React, { useEffect, useState } from 'react'

const CookiesExample = () => {
    const [name,setName] = useState("");
    const [input,setInput] = useState("");

    useEffect(() =>{
        const savedName = getCookie("student");
        if(savedName){
            setName(savedName);
        }
    },[]);

    const setCookie =() =>{
        if(!input){
            alert("Enter Name");
            return;
        }
        document.cookie =`student=${input};max-age=60; path=/`;
        setName(input);
        setInput("");
    }
    const getCookie = (key) =>{
        const cookies = document.cookie.split("; ");
        for(let c of cookies){
            const[k,v] = c.split("=");
            if(k===key) return v;
        }
        return "";
    };
    const deleteCookie = () =>{
        document.cookie =`student=; max-age=0; path=/`;
        setName("");
        console.log(document.cookie); //check remaining cookie
        
    }
  return (
    <div>
        <div className="container mt-5 col-md-6">
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter Student Name' />
            <br></br>
            <hr/>
            <button className='m-2' onClick={setCookie}>Set Cookie</button>
            <button className='m-2' onClick={deleteCookie}>Delete Cookie</button>
            <hr/>
            <h3>Stored Cookie Value</h3>
            <p>{name ? name : "No cookie Found"}</p>

            <p>Refresh Page - Cookie Stays</p>
            <p>Closer Browser - Cookie Stays</p>
            <p>Delete / Expire - Cookie Removed</p>
        </div>


    </div>
  )
}

export default CookiesExample