import { Weather } from 'state/modules/weather/types';

export const weather: Weather[] = [
  {
    city: {
      lat: 123,
      lon: 123,
      name: 'Ribeirão Preto',
    },
    current: {
      date: '07/02/2021',
      sunrise: '06:08',
      sunset: '19:09',
      dayName: 'Domingo',
      feelsLike: '25',
      humidity: '64',
      temperature: '24',
      windSpeed: '1',
      weather: {
        description: 'céu limpo',
        iconName: '01n',
      },
    },
    nextDays: [
      {
        date: '08/02/2021',
        sunrise: '06:08',
        sunset: '19:08',
        dayName: 'Segunda',
        temperature: {
          min: '13',
          max: '26',
        },
        weather: {
          description: 'céu limpo',
          iconName: '01d',
        },
      },
      {
        date: '09/02/2021',
        sunrise: '06:09',
        sunset: '19:08',
        dayName: 'Terça',
        temperature: {
          min: '14',
          max: '26',
        },
        weather: {
          description: 'céu limpo',
          iconName: '01d',
        },
      },
      {
        date: '10/02/2021',
        sunrise: '06:10',
        sunset: '19:07',
        dayName: 'Quarta',
        temperature: {
          min: '15',
          max: '27',
        },
        weather: {
          description: 'nuvens dispersas',
          iconName: '03d',
        },
      },
      {
        date: '11/02/2021',
        sunrise: '06:10',
        sunset: '19:07',
        dayName: 'Quinta',
        temperature: {
          min: '17',
          max: '26',
        },
        weather: {
          description: 'chuva moderada',
          iconName: '10d',
        },
      },
      {
        date: '12/02/2021',
        sunrise: '06:11',
        sunset: '19:06',
        dayName: 'Sexta',
        temperature: {
          min: '17',
          max: '25',
        },
        weather: {
          description: 'chuva leve',
          iconName: '10d',
        },
      },
      {
        date: '13/02/2021',
        sunrise: '06:11',
        sunset: '19:05',
        dayName: 'Sábado',
        temperature: {
          min: '18',
          max: '23',
        },
        weather: {
          description: 'chuva moderada',
          iconName: '10d',
        },
      },
      {
        date: '14/02/2021',
        sunrise: '06:12',
        sunset: '19:05',
        dayName: 'Domingo',
        temperature: {
          min: '18',
          max: '27',
        },
        weather: {
          description: 'chuva leve',
          iconName: '10d',
        },
      },
    ],
  },
];
