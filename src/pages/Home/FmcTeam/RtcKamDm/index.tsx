import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Visible, Hidden } from 'react-grid-system';

import { useAuth } from 'context/AuthContext';
import { fetchBanners, fetchHighlights } from 'state/modules/home/actions';
import { getBanners, getHighlights } from 'state/modules/home/selectors';
import { getCoinQuotations } from 'state/modules/header/selectors';
import { Item as BellCardItem } from 'components/Home/FmcTeam/BellsCard';
import {
  Banners,
  Title,
  Highlights,
  BellsCard,
  Ranking,
  MyBells,
} from 'components/Home';
import Performance, {
  Props as IPerformance,
} from 'components/Home/FmcTeam/Performance';
import CoinQuotation from 'components/Header/CoinQuotation';
import {
  Wrapper,
  PerformanceMyPointsWrapper,
  PerformanceWrapper,
  MyPointsWrapper,
  HomeWrapper,
  RankingWrapper,
} from './styles';

const DefaultHome: React.FC = () => {
  const dispatch = useDispatch();
  const coinQuotations = useSelector(getCoinQuotations);
  const { participant } = useAuth();

  const [banners, highlights] = [
    useSelector(getBanners),
    useSelector(getHighlights),
  ];

  useEffect(() => {
    if (!participant.id) return;

    dispatch(fetchBanners());
    dispatch(fetchHighlights());
  }, [dispatch, participant.id]);

  const [realized, setRealized] = useState<IPerformance>({
    realized: {
      bilingPercent: 0,
      pogPercent: 0,
      individualPogPercent: 0,
    },
  });

  useEffect(() => {
    setRealized({
      realized: {
        bilingPercent: 25, // ;billingPog.billing.percentage,
        pogPercent: 25, // billingPog.pog.percentage,
        individualPogPercent: 50,
      },
    });
  }, []);

  const items: BellCardItem[] = [
    {
      description: 'Desenvolvimento de produtos',
      goal: 5,
      reached: 5,
    },
    {
      description: 'Desenvolvimento de produtos',
      goal: 5,
      reached: 5,
    },
    {
      description: 'Desenvolvimento de produtos',
      goal: 5,
      reached: 2,
    },
    {
      description: 'Desenvolvimento de produtos',
      goal: 5,
      reached: 0,
    },
    {
      description: 'Desenvolvimento de produtos',
      goal: 5,
      reached: 0,
    },
  ];

  return (
    <HomeWrapper>
      <Visible xs sm>
        {!!coinQuotations && <CoinQuotation quotations={coinQuotations} />}
      </Visible>
      <Hidden sm>{!!banners && <Banners items={banners} />}</Hidden>
      <Wrapper>
        <PerformanceMyPointsWrapper>
          <PerformanceWrapper>
            <Title>Gestão</Title>
            {realized && <Performance realized={realized.realized} />}
          </PerformanceWrapper>
          <MyPointsWrapper>
            <Title>Estratégia</Title>
            <BellsCard items={items} />
          </MyPointsWrapper>
          <MyPointsWrapper>
            <Title>Engajamento</Title>
            <BellsCard items={items} />
          </MyPointsWrapper>
        </PerformanceMyPointsWrapper>

        <RankingWrapper>
          <PerformanceWrapper>
            <Title>Ranking</Title>
            <Ranking />
          </PerformanceWrapper>
          <PerformanceWrapper>
            <Title>Meus Sinos</Title>
            <MyBells />
          </PerformanceWrapper>
        </RankingWrapper>
        <Title>Destaques</Title>
        {!!highlights && <Highlights items={highlights} />}
      </Wrapper>
    </HomeWrapper>
  );
};

export default DefaultHome;
