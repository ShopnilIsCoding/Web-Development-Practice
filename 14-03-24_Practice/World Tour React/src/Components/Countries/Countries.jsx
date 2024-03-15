import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import Visited from "../country/Visited";
import "./Countries.css";

const Countries = () => {
  const [Countries, SetCountries] = useState([]);
  const [Name, setname] = useState([]);
  const [Img, setimg] = useState([]);
  const anotherFunction = (name, visited, img) => {
    //console.log("Another function",name);
    if (visited) {
      setname(Name.filter((item) => item !== name));
      setimg(Img.filter((item) => item !== img));

      return;
    }
    if (Name.includes(name) || Img.includes(img)) return;
    setname([...Name, name]);
    setimg([...Img, img]);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => SetCountries(data));
  }, []);
  return (
    <div>
      <div className="floating">
      <h3><span style={{color:'rebeccapurple'}}>Total Countries : </span>{Countries.length} <span style={{color:'green'}}>Total Visited : </span>{Name.length}</h3>
      <div className="flex">
        {Img.map((img, index) => (
          <Visited key={index} Name={Name[index]} img={img} />
        ))}
      </div>
      </div>

      <div className="countryContainer">
        {Countries.map((country) => (
          <Country
            country={country}
            key={country.cca2}
            another={anotherFunction}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
