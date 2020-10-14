import React, { useEffect, useState } from 'react';
import useDimensions from 'hooks/use-window-dimensions';
import getData, {
  HowParticipate as IHowParticipate,
} from 'services/participants/howParticipate';


import bannerDesktop from 'assets/images/fmcProdutor/howParticipate__banner--desktop.jpg';
import bannerMobile from 'assets/images/fmcProdutor/howParticipate__banner--mobile.jpg';

import Steps from './steps';

import { Container, Content, Banner, Actions, Title } from './styles';

const FmcProdutorHowParticipate: React.FC = () => {
  const [data, setData] = useState<IHowParticipate | null>(null);
  const { width } = useDimensions();

  useEffect(() => {
    getData().then(_data => {
      setData(_data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <Title> Como Participar </Title>
        <Banner
          src={width > 500 ? bannerDesktop : bannerMobile}
        />
        <Title>O Programa - Apresentação</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam incidunt officiis labore laborum, blanditiis qui asperiores iste culpa, natus perferendis odio? Perspiciatis a cum vel dicta dolor reprehenderit provident.
        </p>

        <Steps></Steps>
      </Content>
    </Container>
  );
};

export default FmcProdutorHowParticipate;
