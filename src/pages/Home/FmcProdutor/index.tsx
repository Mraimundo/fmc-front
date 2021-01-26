import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Visible, Hidden } from 'react-grid-system';

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
import { Banners, Title, Highlights, Showcase, AddNF } from 'components/Home';
import CoinQuotation from 'components/Header/CoinQuotation';
import { Wrapper, ShowCaseWrapper, HomeWrapper } from './styles';

const FmcProdutorHome: React.FC = () => {
  const dispatch = useDispatch();
  const coinQuotations = useSelector(getCoinQuotations);
  const { participant, simulating } = useAuth();

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

  return (
    <HomeWrapper>
      <Visible xs sm>
        {!!coinQuotations && <CoinQuotation quotations={coinQuotations} />}
      </Visible>
      <Hidden xs sm>
        {!!banners && <Banners items={banners} />}
      </Hidden>
      <Wrapper>
        <AddNF />
      </Wrapper>
      <Wrapper>
        <Title>Destaques </Title>
        {!!highlights && <Highlights items={highlights} />}
      </Wrapper>
      <ShowCaseWrapper>
        <Wrapper>
          <Title reverse>Vitrine de Prêmios </Title>
          <Showcase products={products} isSimulating={simulating} />
        </Wrapper>
      </ShowCaseWrapper>
    </HomeWrapper>
  );
};

export default FmcProdutorHome;
