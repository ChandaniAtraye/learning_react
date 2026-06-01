import React, { useEffect, useState } from 'react'

const TodoCrud = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        setList(JSON.parse(localStorage.getItem("todo")) || []);
    }, []);
    const save = (data) => {
        setList(data);
        localStorage.setItem("todo", JSON.stringify(data));
    };
    const submit = () => {
        if (!task) return alert("Enter Task");

        if (edit != null) {
            list[edit] = task;
            save([...list]);
            setEdit(null);

        } else {
            save([...list, task]);

        }
        setTask("");
    }
    // delete single task
    const remove = (i) =>{
        const newList = list.filter((item,index) => {
            return index !== i;
        })
        save(newList);
    }
    const editTask = (i) =>{
        setTask(list[i]);
        setEdit(i);
    }
    const clearAll =() =>{
        if(confirm("Delete all")) {
            save([]);
        }
    };


    return (
        <div>
            <div className="container col-md-6 p-4 mt-5">
                <div className="card">
                    <h2 className='card-header'>Todo App (CRUD)</h2>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input
                                className='form-control'
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                placeholder='Enter task' />

                            <button className='btn btn-success' onClick={submit}>{edit !== null ? "Update" : "Add"}</button>


                        </div>
                        <ul className='list-group'>
                            {list.map((t, i) => (
                                <li key={i} className='list-group-item d-flex justify-content-between'>
                                    {t}
                                    <button onClick={() => editTask(i)} className='btn btn-warning'>Edit</button>
                                    <button onClick={() => remove(i)} className='btn btn-danger'>Delete</button>
                                </li>
                            ))}
                        </ul>
                        {list.length > 0 && (
                            <button className='btn btn-dark' onClick={clearAll}> Clear All </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoCrud