import axios from 'axios';
import { formatDate, extractHourFromDate, getDayName } from 'util/datetime';
import { formatPoints } from 'util/points';
import { CityCoordinates, Weather } from 'state/modules/weather/types';
import { City, CityApi, CityCoordinatesApi, WeatherApi } from './interfaces';

export const getCitiesByName = async (containName: string): Promise<City[]> => {
  const headers = { Accept: 'application/json' };
  const api = axios.create({
    baseURL: `https://services.meteored.com/web/search/weather/v1/txt/br/pt-BR`,
    headers,
  });

  const {
    data: { hits: cities },
  } = await api.get<CityApi>(containName);

  return Array.from(new Map(cities.map(item => [item.nombre, item])).values())
    .sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
    .map(city => ({
      id: city.id,
      name: city.nombre,
    }));
};

export const getCityCoordinatesByName = async (
  name: string,
): Promise<CityCoordinates | null> => {
  const headers = { Accept: 'application/json' };
  const api = axios.create({
    baseURL: `https://api.openweathermap.org/geo/1.0`,
    headers,
  });
  const apiId = '0e0ce2ccddf6393714475b523de91f3b';

  const { data } = await api.get<CityCoordinatesApi[]>(
    `direct?q=${name},br&appid=${apiId}`,
  );
  if (data[0]) {
    return {
      name: data[0].name,
      lat: data[0].lat,
      lon: data[0].lon,
    };
  }

  return null;
};

export const getWeatherByCityCoordinates = async (
  cityCoordinates: CityCoordinates,
): Promise<Weather | null> => {
  const headers = { Accept: 'application/json' };
  const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    headers,
  });

  const apiId = '0e0ce2ccddf6393714475b523de91f3b';
  const coordinatesParams = `lat=${cityCoordinates.lat}&lon=${cityCoordinates.lon}`;
  const extraParams = `lang=pt_br&exclude=minutely,hourly&units=metric`;
  const request = `onecall?${coordinatesParams}&${extraParams}&appid=${apiId}`;

  const {
    data: { current, daily },
  } = await api.get<WeatherApi>(request);

  if (!current || !daily || daily.length === 0) {
    return null;
  }

  return {
    city: cityCoordinates,
    current: {
      date: formatDate(current.dt * 1000),
      sunrise: extractHourFromDate(current.sunrise * 1000),
      sunset: extractHourFromDate(current.sunset * 1000),
      dayName: getDayName(current.dt * 1000),
      feelsLike: formatPoints(current.feels_like, 0, 0),
      humidity: formatPoints(current.humidity, 0, 0),
      temperature: formatPoints(current.temp, 0, 0),
      windSpeed: formatPoints(current.wind_speed, 0, 0),
      weather: {
        description: current.weather[0]?.description ?? '',
        iconName: current.weather[0]?.icon ?? '',
      },
    },
    nextDays: daily
      .map(item => ({
        date: formatDate(item.dt * 1000),
        sunrise: extractHourFromDate(item.sunrise * 1000),
        sunset: extractHourFromDate(item.sunset * 1000),
        dayName: getDayName(item.dt * 1000),
        temperature: {
          min: formatPoints(item.temp.min, 0, 0),
          max: formatPoints(item.temp.max, 0, 0),
        },
        weather: {
          description: item.weather[0]?.description ?? '',
          iconName: item.weather[0]?.icon ?? '',
        },
      }))
      .slice(1),
  };
};
