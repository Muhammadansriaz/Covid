import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }
    try {
        const  data  = await axios.get(changeableUrl);

        const requiredData = {
            confirmed: data.data.confirmed,
            recovered: data.data.recovered,
            deaths: data.data.deaths,
        }
        return requiredData;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const dailyDataStats = data.map((data) => ({
            confirmed: data.confirmed.total,
            deaths: data.deaths.total,
            date: data.reportDate,
            recovered: data.recovered.total
        }))
        console.log(dailyDataStats);
        return dailyDataStats;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchContriesData = async () => {
    try {
        const { data : {countries} } = await axios.get(`${url}/countries`);

        const countriesList = countries.map((country) => country.name);
        
        return countriesList;


    }
    catch (err) {
        console.log(err);
    }
}