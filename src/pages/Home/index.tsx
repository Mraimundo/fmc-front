import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBanners } from 'state/modules/home/actions';
import { getBanners } from 'state/modules/home/selectors';
import { Banners, Title, Highlights } from 'components/Home';
import { Wrapper } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [banners] = [useSelector(getBanners)];

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  return (
    <div>
      {!!banners && <Banners items={banners} />}
      <Wrapper>
        <Title>Destaques</Title>
        <Highlights items={[]} />
        <Title>Performance</Title>
      </Wrapper>
    </div>
  );
};

export default Home;
