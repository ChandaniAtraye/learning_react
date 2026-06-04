import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CrudAxios = () => {
    const [users,setUsers] = useState([]);
    const [name,setName] = useState("");
    const[email,setEmail] = useState("");
    const [editId,setEditId] = useState(null);

    const API = "http://localhost:5001/users";
    //Read (Fetch all users)
    const fetchUsers = async () =>{
        try{
            const res = await axios.get(API);
            setUsers(res.data);
        } catch(err){
            console.log("Error fetching Users",err);
        }
    };
    useEffect(() =>{
        fetchUsers();
    },[]);

    const handleAdd = async () =>{
        if(!name || !email){
            alert("Please Enter All fields");
            return;
        }
        try{
            const maxId =
            users.length>0 ? Math.max(...users.map((u) => Number(u.id))) : 0;
            const newUser = {
            id:String(maxId + 1),
            name,
            email
            };
            await axios.post(API,newUser);
            setName("");
            setEmail("");
            fetchUsers();
            
        } catch(err){
            console.log("Error Adding User",err);
        }
    };

    const handleEdit = (user) =>{
        setEditId(user.id);
        setName(user.name);
        setEmail(user.email);
    }

    const handleUpdate = async () =>{
        console.log("Updating Id" , editId);

        try{
            await axios.put(`${API}/${editId}`,{
                id:editId,
                name,
                email
            });
            setEditId(null);
            setName("");
            setEmail("");
            fetchUsers();
        } catch(err){
            console.log("Error Updating user" ,err)
        }
    };

    const handleDelete = async(id) =>{
        try{
            await axios.delete(`${API}/${id}`);
            fetchUsers();
        } catch(err){
            console.log("Error updating user",err)
        }
    }
  return (
    <div>
        <div className="container">



            <h2 className='text-center mb-4'>CRUD Axios - using JSON db</h2>

            <div className="card shadow">
                <h4 className='m-2'>{editId ? "Update User" : "Add new User"}</h4>
                <div className="mb-3">
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <input
                    type='email'
                    className='form-control'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                {editId ? (
                    <button className='btn btn-warning' onClick={handleUpdate}>Update User</button> 
                ) : (
                    <button className='btn btn-primary' onClick={handleAdd}>Add User</button>
                )}
            </div> 



            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                           
                    </tr>
                </thead>
                <tbody>
                    {users.map((u,index) =>(
                        <tr key={u.id}>
                            <td>{index + 1}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>
                                <button className='btn btn-warning btn-sm m-2' onClick={() => handleEdit(u)}><i className='bi bi-pencil-square'></i></button>
                                <button className='btn btn-danger btn-sm m-2' onClick={() =>handleDelete(u.id)}><i className='bi bi-trash'></i></button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default CrudAxios