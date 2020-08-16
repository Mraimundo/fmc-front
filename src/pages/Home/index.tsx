import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Visible, Hidden } from 'react-grid-system';

import { fetchBanners, fetchHighlights } from 'state/modules/home/actions';
import { getBanners, getHighlights } from 'state/modules/home/selectors';
import { getCoinQuotations } from 'state/modules/header/selectors';
import {
  Banners,
  Title,
  Highlights,
  Performance,
  MyPoints,
  Showcase,
} from 'components/Home';
import CoinQuotation from 'components/Header/CoinQuotation';
import {
  Wrapper,
  ShowCaseWrapper,
  PerformanceMyPointsWrapper,
  PerformanceWrapper,
  MyPointsWrapper,
  HomeWrapper,
} from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const coinQuotations = useSelector(getCoinQuotations);

  const [banners, highlights] = [
    useSelector(getBanners),
    useSelector(getHighlights),
  ];

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchHighlights());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <Visible xs sm>
        {!!coinQuotations && <CoinQuotation quotations={coinQuotations} />}
      </Visible>
      <Hidden xs sm>
        {!!banners && <Banners items={banners} />}
      </Hidden>
      <Wrapper>
        <Title>Destaques</Title>
        {!!highlights && <Highlights items={highlights} />}
        <PerformanceMyPointsWrapper>
          <PerformanceWrapper>
            <Title>Performance</Title>
            <Performance />
          </PerformanceWrapper>
          <MyPointsWrapper>
            <Title>Meus pontos</Title>
            <MyPoints />
          </MyPointsWrapper>
        </PerformanceMyPointsWrapper>
      </Wrapper>
      <ShowCaseWrapper>
        <Wrapper>
          <Title reverse>Vitrine de Prêmios</Title>
          <Showcase />
        </Wrapper>
      </ShowCaseWrapper>
    </HomeWrapper>
  );
};

export default Home;
