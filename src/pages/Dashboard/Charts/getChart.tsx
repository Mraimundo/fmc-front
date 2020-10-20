import React, { useRef } from 'react';

import { FONTS } from 'styles/font/globals';
import { ChartData } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import { fakeFormatDollars } from 'util/points';

interface Props {
  labels: string[];
  firstDataBar: number[];
  secondDataBar: number[];
  thirdDataBar: number[];
  showLabel?: boolean;
  title?: string;
}

export default ({
  labels,
  firstDataBar,
  secondDataBar,
  thirdDataBar,
  showLabel = true,
  title,
}: Props): JSX.Element => {
  const Component: typeof HorizontalBar | typeof Bar = HorizontalBar;

  const result: ChartData = {
    labels,
    datasets: [
      {
        label: 'Meta',
        backgroundColor: '#CDD6E1',
        borderColor: 'rgba(4, 48, 103, 1)',
        borderWidth: 0,
        hoverBackgroundColor: '#CDD6E1',
        hoverBorderColor: 'rgba(4, 48, 103, 1)',
        data: firstDataBar,
        barThickness: 20,
      },
      {
        label: 'Realizado',
        backgroundColor: '#FF6565',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 0,
        hoverBackgroundColor: '#FF6565',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: secondDataBar,
        barThickness: 20,
      },
      {
        label: '',
        data: thirdDataBar,
        hidden: true,
        hideInLegendAndTooltip: true,
        showLine: false,
        fill: false,
        datalabels: { display: false },
        /* backgroundColor: 'transparent', */
      },
    ],
  };

  return (
    <HorizontalBar
      key={`MyKey-${labels.length}-${title}`}
      data={result}
      height={60 * labels.length + 100}
      redraw
      options={{
        responsive: true,
        title: { display: !!title, text: title },
        plugins: {
          ...ChartDataLabels,
          datalabels: {
            align: 'end',
            textAlign: 'end',
            color: 'rgba(0,0,0,0.55)',
            formatter: (value: string, context) => {
              if (!context.chart.data.datasets) return '';
              if (
                context.chart.data.datasets[context.datasetIndex].label ===
                'Realizado'
              ) {
                const uss = fakeFormatDollars(parseFloat(value), 0, 0);
                const tmp = (context.chart.data.datasets[2].data as string[])[
                  context.dataIndex
                ];
                const percent = `${fakeFormatDollars(parseFloat(tmp), 0, 0)}%`;
                return `${uss} (${percent})`;
              }
              return `${fakeFormatDollars(parseFloat(value), 0, 0)}`;
            },
          },
        },
        legend: {
          fullWidth: true,
          position: 'bottom',
          align: 'center',
          labels: { filter: item => !!item.text },
        },
        maintainAspectRatio: false,
        /* maintainAspectRatio: true, */
        scales: {
          xAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              display: showLabel,
              gridLines: {
                display: true,
                color: ['#bfbfbf'],
              },
              ticks: {
                fontSize: 10,
                fontFamily: FONTS.bold,
                callback: text => {
                  const splitText = text.toString().split(' ');
                  return `${splitText[0]}${splitText.length > 1 ? ' ...' : ''}`;
                },
              },
            },
          ],
        },
      }}
    />
  );
};
