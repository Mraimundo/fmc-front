import React, { useEffect, useState } from 'react';

import getLuckyNumber from 'services/flying-high/getLuckyNumber';

import flyingHighImage from 'assets/images/flying-high/flyinghigh-home-banner.png';
import flyingHighImageMobile from 'assets/images/flying-high/flyinghigh-home-banner-mobile.png';
import {
  Container,
  BannerWrapper,
  LuckyNumberWrapper,
  LuckyNumber,
  UpperEllipse,
  LowerEllipse,
  Title,
  SeeMoreWrapper,
  SeeMore,
  ImgWrapper,
  MobileImgWrapper,
} from './styles';

const FlyingHigh: React.FC = () => {
  const [luckyNumber, setLuckyNumber] = useState('');

  useEffect(() => {
    const fetchLuckyNumber = async () => {
      const num = await getLuckyNumber();
      setLuckyNumber(num);
    };
    fetchLuckyNumber();
  }, []);

  return (
    <Container>
      <BannerWrapper>
        <ImgWrapper>
          <img src={flyingHighImage} alt="Juntos Voamos Mais Alto" />
        </ImgWrapper>
        <MobileImgWrapper>
          <img src={flyingHighImageMobile} alt="Juntos Voamos Mais Alto" />
        </MobileImgWrapper>
      </BannerWrapper>
      <LuckyNumberWrapper>
        <Title>
          <h3>PARABÉNS</h3>
          <p>Você já está concorrendo ao drone.</p>
        </Title>
        <LuckyNumber>
          <h3>SEU N°: {luckyNumber}</h3>
          <p>Sorteio 23/06/2021 pela loteria federal</p>
        </LuckyNumber>
        <SeeMoreWrapper>
          <SeeMore>
            <a href="/">Veja mais</a>
          </SeeMore>
        </SeeMoreWrapper>
        <UpperEllipse />
        <LowerEllipse />
      </LuckyNumberWrapper>
    </Container>
  );
};

export default FlyingHigh;
