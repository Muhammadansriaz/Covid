import { useState, useEffect } from "react";
import { fetchData } from "../Api/Api";
import BarChart from '../Bar'
import PieChart from '../Pie'

import './Chart.css';


function Chart({ caseData, country,  }) {

    return (
        <div className='cntainer' >
            {country =='global' ? <PieChart caseData={caseData} country={country}/> : <BarChart caseData={caseData} country={country}/>}
        </div>
    );
}

export default Chart;

