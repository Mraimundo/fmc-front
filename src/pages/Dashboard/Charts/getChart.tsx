import React, { useRef } from 'react';

import { FONTS } from 'styles/font/globals';
import { ChartData, ChartColor } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import { fakeFormatDollars } from 'util/points';

interface Props {
  labels: string[];
  /* firstDataBar: number[];
  secondDataBar: number[];
  thirdDataBar: number[]; */
  showLabel?: boolean;
  title?: string;
  datasets: {
    data: number[];
    label?: string;
    visible?: boolean;
    backgroundColor?: ChartColor;
    borderColor?: ChartColor;
    borderWidth?: number;
  }[];
}

export default ({
  labels,
  /* firstDataBar,
  secondDataBar,
  thirdDataBar, */
  datasets,
  showLabel = true,
  title,
}: Props): JSX.Element => {
  const Component: typeof HorizontalBar | typeof Bar = HorizontalBar;

  const result: ChartData = {
    labels,
    datasets: datasets.map(item => ({
      ...item,
      barThickness: 20,
      datalabels: { display: item.visible },
      hidden: item.visible,
      hoverBackgroundColor: item.backgroundColor,
      hoverBorderColor: item.borderColor,
    })) /* [
      {
        label: 'Meta',
        backgroundColor: '#CDD6E1',
        borderColor: '#2464A3',
        borderWidth: 1,
        hoverBackgroundColor: '#CDD6E1',
        hoverBorderColor: '#2464A3',
        data: firstDataBar,
        barThickness: 20,
      },
      {
        label: 'Realizado',
        backgroundColor: '#FF6565',
        borderColor: '#A32B2B',
        borderWidth: 1,
        hoverBackgroundColor: '#FF6565',
        hoverBorderColor: '#A32B2B',
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
        /* backgroundColor: 'transparent', * /
      },
    ] */,
  };

  return (
    <Component
      key={`MyKey-${labels.length}-${title}`}
      data={result}
      /* height={60 * labels.length + 100} */
      redraw
      options={{
        responsive: true,
        title: {
          display: !!title,
          text: title,
          fontFamily: FONTS.bold,
          fontSize: 20,
          padding: 20,
        },
        plugins: {
          ...ChartDataLabels,
          datalabels: {
            align: 'end',
            anchor: 'end',
            color: 'rgba(0,0,0,0.55)',
            font: { family: FONTS.bold },
            formatter: (value: string, context) => {
              if (!context.chart.data.datasets) return '';
              if (
                context.chart.data.datasets[context.datasetIndex].label ===
                'Realizado'
              ) {
                const uss = fakeFormatDollars(parseFloat(value) / 1000, 0, 0);
                const tmp = (context.chart.data.datasets[2].data as string[])[
                  context.dataIndex
                ];
                const percent = `${fakeFormatDollars(parseFloat(tmp), 0, 0)}%`;
                return `${uss} (${percent})`;
              }
              return `${fakeFormatDollars(parseFloat(value) / 1000, 0, 0)}`;
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
              display: true,
              ticks: {
                beginAtZero: true,
                callback: value =>
                  fakeFormatDollars(parseFloat(value.toString()) / 1000, 0, 0),
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
