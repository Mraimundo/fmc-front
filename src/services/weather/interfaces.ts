export interface City {
  id: number;
  name: string;
}

export interface CityApi {
  hits: {
    nombre: string;
    id: number;
    lang: 'pt';
    url: string;
    jerarquia: string[]; // State, country, continent ex.:['Paraná', 'Brasil', 'South America'];
    pais: number;
    index: boolean;
    bandera: string; // I have no idea how to use it '🇧🇷';
    puntuacion: number;
    clicks: number;
    nivel: number;
  }[];
}

export interface CityCoordinatesApi {
  name: string;
  lat: number;
  lon: number;
}

export interface WeatherApi {
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    humidity: number;
    wind_speed: number;
    weather: {
      description: string;
      icon: string;
    }[];
  };
  daily: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: {
      min: number;
      max: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }[];
}
