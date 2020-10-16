import React, { useEffect, useState } from 'react';
import useDimensions from 'hooks/use-window-dimensions';
import getData, {
  HowParticipate as IHowParticipate,
} from 'services/participants/howParticipate';

import { SliderHowParticipate } from 'components/HowParticipate';

import {
  Container,
  Content,
  Banner,
  Title,
  LinkRegulamento,
  Button,
  StepsContainer,
  StepsContent,
  StepsTitle,
} from './styles';

const FmcProdutorHowParticipate: React.FC = () => {
  const [data, setData] = useState<IHowParticipate | null>(null);
  const { width } = useDimensions();
  useEffect(() => {
    getData().then(_data => {
      setData(_data);
    });
  }, []);

  let slideItemsArr: { picture: string }[] = [];
  data?.slider.split(',').forEach((prop, index) => {
    slideItemsArr.push({ picture: prop });
  });

  return (
    <Container>
      <Content>
        <img
          src={width > 500 ? data?.pictureUrl : data?.mobilePictureUrl}
          alt={data?.description}
        />

        <StepsContainer>
          <StepsContent>
            <StepsTitle>Veja como é fácil participar</StepsTitle>
            <SliderHowParticipate items={slideItemsArr} />
          </StepsContent>
        </StepsContainer>

        <LinkRegulamento>
          {data?.links.map(item => (
            <div key={item.target}>
              <a href={item.target}>
                {' '}
                <Button> {item.label} </Button>{' '}
              </a>
            </div>
          ))}
        </LinkRegulamento>
      </Content>
    </Container>
  );
};

export default FmcProdutorHowParticipate;
