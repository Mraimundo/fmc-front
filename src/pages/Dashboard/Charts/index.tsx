import React from 'react';

import { Bar, HorizontalBar } from 'react-chartjs-2';
import Chart from 'react-google-charts';
import { ChartData } from 'chart.js';
import { FONTS } from 'styles/font/globals';
import { Container } from './styles';

const Charts: React.FC = () => {

  const data = [
    ['Year', 'View', { role: 'annotation' }, 'View2', { role: 'annotation' }],
    ['2010', 10, 'teste', 15, 'teste2'],
    ['2011', 12, 'teste', 15, 'teste2'],
    ['2012', 7, 'teste', -4, 'teste2'],
  ];

  /* const Test: ChartData = {
    datasets,
  };
*/
  const data2: ChartData = {
    labels: [
      'AGROAMAZONIA',
      'LEMEFERTIL',
      'TERRA FORTE',
      'DOMENE & SILVESTRE',
      'UNICERES CATANDUVA',
    ],
    datasets: [
      {
        label: 'Meta',
        backgroundColor: 'rgba(4, 48, 103, 0.2)',
        borderColor: 'rgba(4, 48, 103, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(4, 48, 103, 0.4)',
        hoverBorderColor: 'rgba(4, 48, 103, 1)',
        data: [50, 40, 35, 50, 40],
      },
      {
        label: 'Realizado ',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56],
        fill: true,
      },
    ],
  };
  return (
    <Container>
      <h2>Charts</h2>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={{ colors: ['green', 'blue'] }}
      />
      <HorizontalBar
        data={data2}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [{ ticks: { fontSize: 8, fontFamily: FONTS.bold } }],
          },
        }}
      />
    </Container>
  );
};

export default Charts;
