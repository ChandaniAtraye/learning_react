import { React, useEffect,useState } from 'react'

const UseEffectUserListApi = () => {
    const [users,setUsers] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) =>{
            setUsers(data);
        });
    },[]);
  return (
    <div>UseEffectUserListApi
        <div className="container">
            <table className="table border border-primary">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) =>(
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                            <td>{u.website}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UseEffectUserListApi



