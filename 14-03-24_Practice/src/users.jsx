import { useEffect } from "react";
import { useState } from "react"
import Person from "./Person";

export default function Users()
{
    const [user,setuser]=useState([]);
    useEffect(()=>
    {
        const url='https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setuser(data));
    },[])
    
    return(<>
        <h1>Users :{user.length}</h1>
        
            {user.map((person,index)=>
            { 
                return <Person key={index} person={person}></Person>
            })}
        


        </>
    )
}