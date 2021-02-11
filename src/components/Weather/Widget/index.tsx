import React from 'react';
import { Weather } from 'state/modules/weather/types';

import sunriseIcon from 'assets/images/weather/sunrise.svg';
import sunsetIcon from 'assets/images/weather/sunset.svg';
import windIcon from 'assets/images/weather/wind.svg';
import humidityIcon from 'assets/images/weather/humidity.svg';

import {
  Container,
  CityWrapper,
  NextDaysWrapper,
  ResumeWrapper,
  Separator,
} from './styles';

interface Props {
  weather: Weather;
}

const Widget: React.FC<Props> = ({ weather }) => {
  return (
    <Container>
      <CityWrapper>
        <h3>{weather.city.name}</h3>
        <img
          src={`/images/weather/${weather.current.weather.iconName}.png`}
          alt={`Ícone para ${weather.current.weather.description}`}
        />
        <div>
          <span>{weather.current.date}</span>
          <span>{weather.current.dayName}</span>
          <h3>{weather.current.temperature}º</h3>
          <span>Sensação {weather.current.feelsLike}º</span>
        </div>
      </CityWrapper>
      <Separator />
      <NextDaysWrapper>
        {weather.nextDays.map(item => (
          <div key={item.date}>
            <img
              src={`/images/weather/${item.weather.iconName}.png`}
              alt={`Ícone para ${item.weather.description}`}
            />
            <div>
              <h3>Max:</h3>
              <h3>
                {item.temperature.max}
                <span>º</span>
              </h3>
            </div>
            <div>
              <h3>Min:</h3>
              <h3>
                {item.temperature.min}
                <span>º</span>
              </h3>
            </div>
            <span>{item.dayName}</span>
          </div>
        ))}
      </NextDaysWrapper>
      <Separator />
      <ResumeWrapper>
        <div>
          <img src={sunriseIcon} alt="Ícone para nascer do sol" />
          <span>{`${weather.current.sunrise}`}</span>
        </div>
        <div>
          <img src={windIcon} alt="Ícone para velocidade do vento" />
          <span>{`${weather.current.windSpeed} km/h`}</span>
        </div>
        <div>
          <img src={sunsetIcon} alt="Ícone para por do sol" />
          <span>{`${weather.current.sunset}`}</span>
        </div>
        <div>
          <img
            style={{ height: 16 }}
            src={humidityIcon}
            alt="Ícone para humidade"
          />
          <span>{`${weather.current.humidity}%`}</span>
        </div>
      </ResumeWrapper>
    </Container>
  );
};

export default Widget;
