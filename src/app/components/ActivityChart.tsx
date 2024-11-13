'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ChartOptions } from 'chart.js';
import { FC } from 'react';

// Register chart.js modules
ChartJS.register(BarElement, CategoryScale, LinearScale);

const ActivityChart: FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Activity',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true, // Ensure chart is responsive
    maintainAspectRatio: false, // Allow chart to fill container
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        // Example to control bar scaling width (this can be adjusted based on your needs)
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '500px' }}> {/* Increase height for better visibility */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
