import { useEffect, useState } from 'react';
import './Country.css'
import PropTypes from 'prop-types';
const Country = ({country,another}) => {
   // console.log(country);
    //let isvisited = false;
    const[Time,setTime]=useState("");
    const[visited,setVisited]=useState(false);
    const Visited=()=>
    {
       // isvisited=!isvisited;
        setVisited(!visited);
        console.log(!visited);
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            const countryTime = new Date();
            const utcOffset = country.timezones[0].replace("UTC", "").split(":");
            const hours = parseInt(utcOffset[0], 10);
            const minutes = parseInt(utcOffset[1], 10);
            countryTime.setUTCHours(countryTime.getUTCHours() + hours-6);
            countryTime.setUTCMinutes(countryTime.getUTCMinutes() + minutes);
            setTime(countryTime.toLocaleTimeString());
        }, 1000);// (1 second)
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className='country'>
            <img style={{borderRadius:'20px'}} width={'100%'} height={'250px'} src={country.flags.png} alt="" />
            <p>Name : {country.name.common}</p>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p style={{color:'limegreen'}}>Currrent Local Time : <span style={{fontWeight:'700',color:'white'}}>{Time}</span></p>
            <button onClick={() => { Visited(); another(country.name.common,visited,country.flags.png); }} type="submit" style={visited?{backgroundColor:'greenyellow',color:'black'}:{backgroundColor:'red'}}>{visited?'Visited':'Not Visited'}</button>
            </div>
        </div>
    );
};


Country.propTypes=
{
    country:PropTypes.object.isRequired,
    another:PropTypes.func.isRequired
}
export default Country;