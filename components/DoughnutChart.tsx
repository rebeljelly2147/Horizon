"use client";

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  accounts: { label: string; amount: number }[];
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    // labels: accounts.map(account => account.label),
    datasets: [
      {
        label: 'Banks',
        // data: accounts.map(account => account.amount),
        data: [300, 50, 100],
        backgroundColor: ['#0747b6 ', '#2265d8', '#2f91fa'],
      },
      ],
      labels : ['SBI', 'ICICI', 'HDFC']
  };

  return <Doughnut
    data={data}
    options={{
      cutout: '60%',
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position:'top',
        },
      },
    }}
  />;
};

export default DoughnutChart;
