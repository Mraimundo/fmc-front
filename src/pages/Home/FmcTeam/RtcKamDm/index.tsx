import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { useDispatch, useSelector } from 'react-redux';
import { Visible, Hidden } from 'react-grid-system';
import openLinkIcon from 'assets/images/open-link-icon.svg';
import configIcon from 'assets/images/weather/config.svg';
import routeMap from 'routes/route-map';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';

import { useAuth } from 'context/AuthContext';
import {
  fetchBanners,
  fetchHighlights,
  fetchStrategies,
  fetchEngagements,
  fetchBells,
  fetchRanking,
  fetchPerformance,
} from 'state/modules/home/actions';
import { fetchWeather } from 'state/modules/weather/actions';
import {
  getBanners,
  getHighlights,
  getStrategies,
  getEngagements,
  getBells,
  getRanking,
  getPerformance,
} from 'state/modules/home/selectors';
import { getWeather } from 'state/modules/weather/selectors';
import { getCoinQuotations } from 'state/modules/header/selectors';
import {
  Banners,
  Title,
  Highlights,
  BellsCard,
  Ranking,
  MyBells,
} from 'components/Home';
import Performance from 'components/Home/FmcTeam/Performance';
import CoinQuotation from 'components/Header/CoinQuotation';

import { City } from 'services/weather/interfaces';
import {
  getCityCoordinatesByName,
  loadCities,
  removeCity,
  saveCity,
} from 'services/weather';
import CitySelect from 'components/Weather/Selects/Cities';
import WeatherWidget from 'components/Weather/Widget';
import { useToast } from 'context/ToastContext';
import { CityCoordinates } from 'state/modules/weather/types';
import {
  Wrapper,
  PerformanceMyPointsWrapper,
  PerformanceWrapper,
  MyPointsWrapper,
  HomeWrapper,
  RankingWrapper,
  CompletePerformanceWrapper,
  WeatherWrapper,
  WeatherTitle,
  CitySelectWrapper,
  Img,
  StyledWrapper,
  WeatherWidgetWrapper,
  RemoveActionWrapper,
} from './styles';

const DefaultHome: React.FC = () => {
  const dispatch = useDispatch();
  const { participant } = useAuth();
  const { addToast } = useToast();
  const coinQuotations = useSelector(getCoinQuotations);

  const [
    banners,
    highlights,
    strategies,
    engagements,
    bells,
    ranking,
    performance,
  ] = [
    useSelector(getBanners),
    useSelector(getHighlights),
    useSelector(getStrategies),
    useSelector(getEngagements),
    useSelector(getBells),
    useSelector(getRanking),
    useSelector(getPerformance),
  ];

  const weather = useSelector(getWeather);
  const [citySelect, setCitySelect] = useState<City | null>(null);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    if (!participant.id) return;

    dispatch(fetchBanners());
    dispatch(fetchHighlights());
    dispatch(fetchStrategies());
    dispatch(fetchEngagements());
    dispatch(fetchBells());
    dispatch(fetchRanking());
    dispatch(fetchPerformance());
    loadCities().then(data => {
      setCities(
        data
          .filter(item => item.id)
          .map(item => ({
            id: item.id as number,
            name: item.name,
          })),
      );
    });
  }, [dispatch, participant.id]);

  const handleCitySelect = useCallback(
    async (_city: City) => {
      if (cities.length >= 2) {
        addToast({ title: 'Por favor exclua uma cidade antes de continuar' });
        setTimeout(() => {
          setCitySelect(null);
        }, 1500);
        return;
      }

      setCitySelect(_city);

      setCities(oldCities => [
        ...oldCities.filter(item => item.name !== _city.name),
        _city,
      ]);

      saveCity({ name: _city.name, lat: -1, lon: -1 });

      setTimeout(() => {
        setCitySelect(null);
      }, 3000);
    },
    [cities, addToast],
  );

  useEffect(() => {
    const load = async () => {
      const citiesCoordinates = await Promise.all(
        cities.map(async city => {
          const cityCoordinates = await getCityCoordinatesByName(city.name);
          return cityCoordinates as CityCoordinates;
        }),
      );

      dispatch(fetchWeather(citiesCoordinates.filter(item => item?.name)));
    };

    load();
  }, [dispatch, cities]);

  const handleRemoveCity = useCallback((cityName: string) => {
    setCities(oldCities => {
      const internalCity = oldCities.find(item => item.name === cityName);
      if (internalCity) {
        removeCity(internalCity.id);
      }
      return oldCities.filter(item => item.name !== cityName);
    });
  }, []);

  const [showCitySelection, setShowCitySelection] = useState(false);

  return (
    <HomeWrapper>
      <Visible xs sm>
        {!!coinQuotations && <CoinQuotation quotations={coinQuotations} />}
      </Visible>
      <Hidden xs sm>
        {!!banners && <Banners items={banners} />}
      </Hidden>
      <Wrapper>
        <PerformanceMyPointsWrapper>
          <PerformanceWrapper>
            <Title>Gestão</Title>
            {performance && <Performance realized={performance} />}
          </PerformanceWrapper>
          <StyledWrapper>
            <MyPointsWrapper>
              <Title>Estratégia</Title>
              <BellsCard items={strategies} />
            </MyPointsWrapper>
            <MyPointsWrapper marginTop>
              <Title>Engajamento</Title>
              <BellsCard items={engagements} />
            </MyPointsWrapper>
          </StyledWrapper>
        </PerformanceMyPointsWrapper>

        <CompletePerformanceWrapper>
          <Link to={routeMap.home}>
            CONFIRA SEU DESEMPENHO COMPLETO
            <ReactSVG src={openLinkIcon} />
          </Link>
        </CompletePerformanceWrapper>
        <RankingWrapper>
          <PerformanceWrapper>
            <Title>Ranking</Title>
            {ranking && <Ranking ranking={ranking} />}
          </PerformanceWrapper>
          <PerformanceWrapper>
            <Title>Meus Sinos</Title>
            <MyBells bells={bells} />
          </PerformanceWrapper>
        </RankingWrapper>
        <Title>Destaques</Title>
        {!!highlights && <Highlights items={highlights} />}
        <WeatherWrapper>
          <WeatherTitle>
            Clima
            <Img
              src={configIcon}
              alt="Configuração do Clima"
              onClick={() => setShowCitySelection(e => !e)}
            />
          </WeatherTitle>
          <CitySelectWrapper show={showCitySelection}>
            <h3>Você pode escolher até duas cidades</h3>
            <CitySelect
              value={citySelect}
              setValue={handleCitySelect}
              placeholder="Escolha uma cidade para adicionar"
            />
          </CitySelectWrapper>
          {weather.map(item => (
            <WeatherWidgetWrapper>
              <WeatherWidget weather={item} />
              <RemoveActionWrapper show={showCitySelection}>
                <ReactSVG
                  src={deleteIcon}
                  onClick={() => handleRemoveCity(item.city.name)}
                />
              </RemoveActionWrapper>
            </WeatherWidgetWrapper>
          ))}
        </WeatherWrapper>
      </Wrapper>
    </HomeWrapper>
  );
};

export default DefaultHome;
