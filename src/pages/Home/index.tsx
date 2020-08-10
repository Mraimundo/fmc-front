import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBanners, fetchHighlights } from 'state/modules/home/actions';
import { getBanners, getHighlights } from 'state/modules/home/selectors';
import {
  Banners,
  Title,
  Highlights,
  Performance,
  MyPoints,
  Showcase,
} from 'components/Home';
import {
  Wrapper,
  ShowCaseWrapper,
  PerformanceMyPointsWrapper,
  PerformanceWrapper,
  MyPointsWrapper,
} from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [banners, highlights] = [
    useSelector(getBanners),
    useSelector(getHighlights),
  ];

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchHighlights());
  }, [dispatch]);

  return (
    <div>
      {!!banners && <Banners items={banners} />}
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
    </div>
  );
};

export default Home;
