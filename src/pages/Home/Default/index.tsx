import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Visible, Hidden } from 'react-grid-system';

import getParticipantAccessPi from 'services/showcase/getParticipantsToAccessPI';

import { PROFILES } from 'config/constants';
import { useAuth } from 'context/AuthContext';
import {
  fetchBillingPog,
  fetchPotentializers,
} from 'state/modules/goals/actions';
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
import { Props as IPerformance } from 'components/Home/Performance';
import {
  getBillingPog,
  getPotentializers,
} from 'state/modules/goals/selectors';
import CoinQuotation from 'components/Header/CoinQuotation';
import {
  Wrapper,
  ShowCaseWrapper,
  PerformanceMyPointsWrapper,
  PerformanceWrapper,
  MyPointsWrapper,
  HomeWrapper,
} from './styles';

const DefaultHome: React.FC = () => {
  const dispatch = useDispatch();
  const coinQuotations = useSelector(getCoinQuotations);
  const { participant, simulating } = useAuth();

  const [banners, highlights, products, billingPog, potentializers] = [
    useSelector(getBanners),
    useSelector(getHighlights),
    useSelector(getShowcaseProducts),
    useSelector(getBillingPog),
    useSelector(getPotentializers),
  ];

  useEffect(() => {
    if (!participant.id) return;

    dispatch(fetchBanners());
    dispatch(fetchHighlights());
    dispatch(fetchShowcase(participant.id));

    dispatch(fetchBillingPog());
    dispatch(fetchPotentializers());
  }, [dispatch, participant.id]);

  const isParticipant = participant.profile === PROFILES.participant;
  const showCatalog = !!participant.establishment.team_receives_points;

  const [realized, setRealized] = useState<IPerformance>({
    realized: {},
  } as IPerformance);

  const [harvestPoints, setHarvestPoints] = useState(0);

  useEffect(() => {
    getParticipantAccessPi().then(data => {
      const foundEstablishment = data.find(item => item.type === 'cnpj');
      setHarvestPoints(foundEstablishment?.points || 0);
    });
  }, []);

  useEffect(() => {
    if (!billingPog || !potentializers) return;
    setRealized({
      realized: {
        bilingPercent: billingPog.billing.percentage,
        pogPercent: billingPog.pog.percentage,
        premioPercent:
          potentializers.find(item => item.name.toLowerCase() === 'premio')
            ?.percentage || 0,
        heroPercent:
          potentializers.find(item => item.name.toLowerCase() === 'hero')
            ?.percentage || 0,
        talismanPercent:
          potentializers.find(item => item.name.toLowerCase() === 'talisman')
            ?.percentage || 0,
      },
    });
  }, [billingPog, potentializers]);

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
                <Performance realized={realized.realized} />
              </PerformanceWrapper>
              <MyPointsWrapper>
                <Title>Meus pontos</Title>
                <MyPoints
                  isParticipant={isParticipant}
                  points={harvestPoints}
                />
              </MyPointsWrapper>
            </>
          )}
        </PerformanceMyPointsWrapper>
      </Wrapper>
      {isParticipant && showCatalog && (
        <ShowCaseWrapper>
          <Wrapper>
            <Title reverse>Vitrine de Pr??mios </Title>
            <Showcase products={products} isSimulating={simulating} />
          </Wrapper>
        </ShowCaseWrapper>
      )}
    </HomeWrapper>
  );
};

export default DefaultHome;
