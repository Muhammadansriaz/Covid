import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../Images/covidlogo.png";
import { fetchContriesData } from "../Api/Api";

const Header = ({ handleCountryChange }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      setCountriesData(await fetchContriesData());
    }
    fetchCountries();
  }, []);

  return (
    <div className="header">
      <div className="title">
        
        <h1>C</h1>
        <img src={logo} alt="O" />
        <h1>VID_19</h1>
      </div>
      <div className="select">
        <select
          variant="outlined"
          className="country-select"
          defaultValue=""
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="global">Global</option>
          {countriesData.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
