import React from 'react';

import bannerImage from 'assets/images/flying-high/flying-high-promo.png';
import { Container, ImageWrapper } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <img src={bannerImage} alt="Juntos Voamos Mais Alto" />
      </ImageWrapper>
    </Container>
  );
};

export default Banner;
