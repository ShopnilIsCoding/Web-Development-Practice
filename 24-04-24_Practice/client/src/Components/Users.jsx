import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const data=useLoaderData()
    const [loaded,setLoaded]=useState(data);
    const handleDelete = (_id) => {
        fetch(`http://localhost:3000/users/${_id}`,
    {
        method: "DELETE"
    })
        .then(res=>res.json())
        .then(output=>{
            if(output.deletedCount>0)
            {
                setLoaded(loaded.filter(user=>user._id!==_id))
            }
        })
    }
    console.log(data);
    return (
        <div>
            <h1>{loaded.length}</h1>
            <ul>
                {loaded.map(user => (
                    <li key={user._id}>{user.name} : {user.email} <button onClick={()=>handleDelete(user._id)}>x</button></li>
                ))}
            </ul>
        </div>
    );
};

export default Users;