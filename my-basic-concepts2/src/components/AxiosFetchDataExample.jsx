import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosFetchDataExample = () => {
    const [users,setUsers] = useState([]);
    const [posts,setPosts] = useState([]);
    const [comments,setComments] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const userRes = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(userRes.data);
                const postRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(postRes.data);
                const commentRes = await axios.get("https://jsonplaceholder.typicode.com/comments");
                setComments(commentRes.data);
            }
            catch (error){
                console.log("Api error", error)
            }
        };
        fetchData();
    },[]);
  return (
    <div>
        <div className="container">
            <h3> User Name List</h3>
            <hr/>
            <ol>
                {users.map((u) =>(
                     <li key={u.id}>Name : {u.name} - Email : {u.email}</li>
                ))}
            </ol>
            <hr/>
            <ol>
                {posts.slice(0,50).map((p) =>(
                    <li key={p.id}>
                        <strong>{p.title}</strong>
                        <p>{p.body}</p>
                    </li>
                ))}
            </ol>
            <hr/>
            <ol>
                {comments.slice(0,10).map((c) =>(
                    <li key={c.id}>
                       <p>Name : {c.name}</p>
                        <p> Email : {c.email}</p>
                    </li>
                ))}
            </ol>

        </div>
    </div>
  )
}

export default AxiosFetchDataExample