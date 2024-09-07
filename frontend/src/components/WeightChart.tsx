import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';

import rawData from '../data/data.json';

// Register required components from Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

// Transform data to fit Chart.js
const labels = rawData.map(entry => entry.date);
const weights = rawData.map(entry => entry.weight);

const data = {
  labels: labels, // x-axis labels
  datasets: [{
    label: 'Weight Over Time',
    data: weights, // y-axis values
    borderColor: 'rgba(75, 192, 192, 1)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderWidth: 2,
    fill: false, // Ensures only the line is visible, not the area under it
  }]
};

const WeightChart: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <Line data={data} />
    </div>
  );
}

export default WeightChart;
