import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryDetails = (props) => {
  return (
    <>
      <h1>{props.country.name}</h1>
      <p>capital {props.country.capital}</p>
      <p>population {props.country.population}</p>
      <h1>languages</h1>
      <ul>
        {props.country.languages.map((lang) => (
          <li>{lang.name}</li>
        ))}
      </ul>
      <img src={props.country.flag} width="200" alt="country flag" />
    </>
  );
};
const DisplayCountries = (props) => {
  //console.log(props);
  let len = props.countries.length;
  if (len <= 10 && len !== 1) {
    return (
      <>
        {props.countries.map((country, index) => {
          return (
            <>
              <p>{country.name}</p>{" "}
            </>
          );
        })}
      </>
    );
  } else if (len === 1) {
    return (
      <>
        <CountryDetails country={props.countries[0]} />
      </>
    );
  } else {
    return <p>Too many matches, specify another filter</p>;
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState("");
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  const handleChange = (event) => {
    setFilteredCountries(event.target.value);
  };
  let fCountries = countries.filter((country) => {
    let c1 = country.name.toLowerCase();
    let c2 = filteredCountries.toLowerCase();
    return c1.includes(c2);
  });

  return (
    <>
      <p>find countries</p>
      <input onChange={handleChange} value={filteredCountries} />
      <DisplayCountries countries={fCountries} />
    </>
  );
};

export default App;
