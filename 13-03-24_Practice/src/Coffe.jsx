import { useState } from "react"

export default function Coffe()
{
    const [count,countfunc]=useState(0);
    const styling={
        border:"2px solid yellow",
        padding:'10px'
    }
    const handle=()=>
    {
      let counter=count+1;
      countfunc(counter);
    }
    return(<div style={styling}>
    <h1>Coffe count {count}</h1>
    <button onClick={handle}>Add</button>
    </div>)
}