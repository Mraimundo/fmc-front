import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { useDispatch, useSelector } from 'react-redux';
import { Visible, Hidden } from 'react-grid-system';
import openLinkIcon from 'assets/images/open-link-icon.svg';
import configIcon from 'assets/images/weather/config.svg';
import routeMap from 'routes/route-map';

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
import { fetchWeather, clearWeather } from 'state/modules/weather/actions';
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
import { getCityCoordinatesByName } from 'services/weather';
import CitySelect from 'components/Weather/Selects/Cities';
import WeatherWidget from 'components/Weather/Widget';
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
} from './styles';

const DefaultHome: React.FC = () => {
  const dispatch = useDispatch();
  const { participant } = useAuth();
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
  const [city, setCity] = useState<City | null>(null);

  useEffect(() => {
    if (!participant.id) return;

    dispatch(fetchBanners());
    dispatch(fetchHighlights());
    dispatch(fetchStrategies());
    dispatch(fetchEngagements());
    dispatch(fetchBells());
    dispatch(fetchRanking());
    dispatch(fetchPerformance());
    setCity({ id: 0, name: 'Londrina' });
    getCityCoordinatesByName('londrina').then(cityCoordinates => {
      if (cityCoordinates) dispatch(fetchWeather(cityCoordinates));
    });
  }, [dispatch, participant.id]);

  const handleCitySelect = useCallback(
    async (_city: City) => {
      setCity(_city);
      const cityCoordinates = await getCityCoordinatesByName(_city.name);
      if (!cityCoordinates) {
        dispatch(clearWeather());
        return;
      }

      dispatch(fetchWeather(cityCoordinates));
    },
    [dispatch],
  );

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
          <MyPointsWrapper>
            <Title>Estratégia</Title>
            <BellsCard items={strategies} />
          </MyPointsWrapper>
          <MyPointsWrapper marginTop>
            <Title>Engajamento</Title>
            <BellsCard items={engagements} />
          </MyPointsWrapper>
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
            <CitySelect value={city} setValue={handleCitySelect} />
          </CitySelectWrapper>
          {weather && <WeatherWidget weather={weather} />}
        </WeatherWrapper>
      </Wrapper>
    </HomeWrapper>
  );
};

export default DefaultHome;
