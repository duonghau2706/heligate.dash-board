import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, SubTitle } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, SubTitle);

const DoughnutChart = ({ data, options }) => {
  return (
    <Doughnut data={data} options={options} style={{width: '40%', height: '40%', marginLeft: 20}}/>
  )
}

export default DoughnutChart;
