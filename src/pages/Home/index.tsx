import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Visible, Hidden } from 'react-grid-system';

import { PROFILES } from 'config/constants';
import { useAuth } from 'context/AuthContext';
import {
  fetchBanners,
  fetchHighlights,
  fetchShowcase,
} from 'state/modules/home/actions';
import {
  getBanners,
  getHighlights,
  getShowcaseProducts,
} from 'state/modules/home/selectors';
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
import { Link } from 'react-router-dom';
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
  const { participant } = useAuth();

  const [banners, highlights, products] = [
    useSelector(getBanners),
    useSelector(getHighlights),
    useSelector(getShowcaseProducts),
  ];

  useEffect(() => {
    if (!participant.id) return;

    dispatch(fetchBanners());
    dispatch(fetchHighlights());
    dispatch(fetchShowcase(participant.id));
  }, [dispatch, participant.id]);

  const isParticipant = participant.profile === PROFILES.participant;
  const showCatalog = !!participant.establishment.team_receives_points;

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
          {!isParticipant && (
            <>
              <PerformanceWrapper>
                <Title>Performance</Title>
                <Performance />
              </PerformanceWrapper>
              <MyPointsWrapper>
                <Title>Meus pontos</Title>
                <MyPoints isParticipant={isParticipant} />
              </MyPointsWrapper>
            </>
          )}
        </PerformanceMyPointsWrapper>
      </Wrapper>
      {isParticipant && showCatalog && (
        <ShowCaseWrapper>
          <Wrapper>
            <Title reverse>Vitrine de Prêmios</Title>
            <Showcase products={products} />
          </Wrapper>
        </ShowCaseWrapper>
      )}
    </HomeWrapper>
  );
};

export default Home;
