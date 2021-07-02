import "./App.css";
import Header from "./Header/Header";
import CovidStat from "./Covid stat/CovidStat";
import { fetchData } from "./Api/Api";
import { useState, useEffect } from "react";
import Chart from './Chart/Chart'

function App() {
  const [caseData, setCaseData] = useState({
    confirmed: { value: 0 },
    recovered: { value: 0 },
    deaths: { value: 0 },
  });

  const [country, setCountry] = useState("");

  useEffect(() => {
    async function dataFetched() {
      const fetchedData = await fetchData();

      setCaseData(fetchedData);
      setCountry("global");
    }
    dataFetched();
  }, []);

  async function handleCountryChange(country) {
    const fetchedDataGlobal = await fetchData();

    if (country === "global") {
      setCaseData(fetchedDataGlobal);
      setCountry("global");
    } else {
      const fetchedData = await fetchData(country);
      setCaseData(fetchedData);
      setCountry(fetchedData);
    }
  }

  return (
    <div className="App">
      <Header handleCountryChange={handleCountryChange} />
      <div className="section">
        <CovidStat data={caseData} />
      </div>
      <div className = 'chart_container'>

        <Chart caseData={caseData} country={country}/>
      </div>
    </div>
  );
}

export default App;
