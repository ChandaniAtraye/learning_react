import React, {useEffect, useState } from 'react'

const TodoArrayLocalStorage = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem("tasks"));
        if(saved){
            setTasks(saved);
        }
    },[]);
    const addTask = () => {
        const newTasks = [...tasks,task];
        setTasks(newTasks);
        localStorage.setItem("tasks",JSON.stringify(newTasks));
        setTask("");

    };
    return (
        <div>
            <div className="container text-danger border-rounded p-4 col-md-6 ">
                <h1> TODO array List - Local Storage</h1>
                <input className='form-control'
                value={task}
                onChange={(e)=> setTask(e.target.value)}/>

                <button className='btn btn-primary' onClick={addTask}>Add</button>

                <ul>
                    {tasks.map((t,i) =>(
                        <li key={i}>{t}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoArrayLocalStorage