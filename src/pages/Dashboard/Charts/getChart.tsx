import React from 'react';

import { FONTS } from 'styles/font/globals';
import { ChartData, ChartColor } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import { fakeFormatDollars } from 'util/points';

interface Props {
  labels: string[];
  showLabel?: boolean;
  title?: string;
  divideValueBy?: number;
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
  datasets,
  showLabel = true,
  title,
  divideValueBy = 1,
}: Props): JSX.Element => {
  const Component: typeof HorizontalBar | typeof Bar = HorizontalBar;

  const result: ChartData = {
    labels,
    datasets: datasets.map(item => ({
      ...item,
      barThickness: 20,
      datalabels: { display: item.visible },
      hidden: item.visible === false,
      hoverBackgroundColor: item.backgroundColor,
      hoverBorderColor: item.borderColor,
      hideInLegendAndTooltip: item.visible === false,
    })),
  };

  return (
    <Component
      key={`MyKey-${labels.length}-${title}`}
      data={result}
      height={70 * labels.length + 120}
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
                const uss = fakeFormatDollars(
                  parseFloat(value) / divideValueBy,
                  0,
                  0,
                );
                const tmp = (context.chart.data.datasets[2].data as string[])[
                  context.dataIndex
                ];
                const percent = `${fakeFormatDollars(parseFloat(tmp), 0, 0)}%`;
                return `${uss} (${percent})`;
              }
              return `${fakeFormatDollars(
                parseFloat(value) / divideValueBy,
                0,
                0,
              )}`;
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
