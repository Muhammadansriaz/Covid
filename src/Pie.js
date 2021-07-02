import React from 'react';
import { Pie } from 'react-chartjs-2';
import './Pie.css'

const PieChart = ({ caseData, country,  }) => {
    const data = {
        labels:  ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            data: [caseData.confirmed.value, caseData.recovered.value, caseData.deaths.value],
            backgroundColor: [
              '#f09819',
              '#5ab331',
              'rgb(165 0 0)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
    return (
      <div  className = 'piebox'>
        <Pie data={data} width = {400} height = {400} options={{ maintainAspectRatio: false }}/>

      </div>
       
       
    )
}

export default PieChart
