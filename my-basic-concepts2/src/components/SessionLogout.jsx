import React, { useEffect, useState } from 'react'

const SessionLogout = () => {
    const [user,setUser] = useState("");
    const [timeLeft, setTimeLeft] = useState(120);

    useEffect(() =>{
        const savedUser = sessionStorage.getItem("user");
        const savedTime = sessionStorage.getItem("time");

        if(savedUser && savedTime){
            setUser(savedUser);
            setTimeLeft(Number(savedTime));
        }
    },[]);
    useEffect(() =>{
        if(!user) return;
        if(timeLeft === 0){
            logout();
            return;
        }
        const timer = setInterval(() =>{
            setTimeLeft((prev) =>{
                sessionStorage.setItem("time",prev-1);
                return prev-1;
            });
        },1000);
        return () => clearInterval(timer);

    },[user,timeLeft]);
    const login = () => {
        if(!user) return alert("Enter Name");

        sessionStorage.setItem("user",user);
        sessionStorage.setItem("time",120);
        setTimeLeft(120);
    }
    const logout = () => {
        sessionStorage.clear();
        setUser("");
        setTimeLeft(120);
        alert("Session Expired ! Logout");
    };
  return (
    <div>SessionLogout
        <div className="container col-md-6 mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white text-center">
                    <h4>Auto Logout Using Session Storage</h4>
                </div>
                <div className="card-body text-center">
                    {!sessionStorage.getItem("user") ? (
                        <>
                        <input
                        className ='form-control mb-2'
                        placeholder='Enter User name'
                        onChange={(e) => setUser(e.target.value)}
                        />
                        <button className='btn btn-success' onClick={login}>Login</button>
                        </>
                    ) : (
                        <>
                        <h5>Welcome : {sessionStorage.getItem("user")}</h5>
                        <h6 className ='text-danger'>{timeLeft}s</h6>
                        <button className='btn btn-danger' onClick={logout}>Logout</button>
                        </>
            
                    )}
                     <hr/>
                    <p>
                        Refresh Page - Data Stays /continues <br></br>
                        Close Tab - Data Deleted / destroyed
                        after 2 min auto logout
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SessionLogout