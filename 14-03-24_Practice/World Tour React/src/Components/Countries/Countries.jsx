import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    const [Countries,SetCountries]=useState([]);
    useEffect(()=>
    {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>SetCountries(data));
    },[])
    return (
        <div>
            <h3>Countries : {Countries.length}</h3>
        </div>
    );
};

export default Countries;