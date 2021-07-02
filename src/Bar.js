import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Bar.css'


const BarChart = ({ caseData, country,  }) => {

    
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
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
    return (
        <div className = "barbox">
             <Bar height = {300} width = {250} data={data} options={options} options={{ maintainAspectRatio: false }} />
        </div>
    )
}

export default BarChart
