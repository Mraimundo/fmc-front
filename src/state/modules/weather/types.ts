export interface CityCoordinates {
  name: string;
  lat: number;
  lon: number;
}

export interface Weather {
  city: CityCoordinates;
  current: {
    date: string;
    dayName: string;
    sunrise: string;
    sunset: string;
    temperature: string;
    feelsLike: string;
    humidity: string;
    windSpeed: string;
    weather: {
      description: string;
      iconName: string;
    };
  };
  nextDays: {
    date: string;
    dayName: string;
    sunrise: string;
    sunset: string;
    temperature: {
      min: string;
      max: string;
    };
    weather: {
      description: string;
      iconName: string;
    };
  }[];
}
