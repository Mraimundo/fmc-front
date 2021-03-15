import React from 'react';
import { ReactSVG } from 'react-svg';

import useDimensions from 'hooks/use-window-dimensions';
import RegulationContent from './RegulationContent';
import {
  Container,
  Title,
  Mechanics,
  TextRegulationWrapper,
  // MobileTitle,
  MechanicsMobile,
  Note,
} from './styles';

import SliderHowToWin from './SliderHowToWin';
import items from './howToWinItems';

const HowToWin: React.FC = () => {
  const { width } = useDimensions();

  return (
    <Container>
      {width >= 600 && (
        <>
          <Mechanics>
            <Title>Como eu ganho nos JUNTOS FMC - Produtor?</Title>
            {items.map(item => (
              <div key={item.picture}>
                <div>
                  <ReactSVG src={item.picture} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                {!!item.note && <span>{item.note}</span>}
              </div>
            ))}
          </Mechanics>
        </>
      )}

      {width < 600 && (
        <>
          <MechanicsMobile>
            <Title>Como eu ganho nos JUNTOS FMC - Produtor?</Title>
            <SliderHowToWin items={items} />
          </MechanicsMobile>
        </>
      )}

      <TextRegulationWrapper>
        <div>
          <RegulationContent />
        </div>
      </TextRegulationWrapper>
      <Note>
        <p>
          Participação válida de 15/03/2021 a 16/05/2021. Certificado de
          Autorização SECAP/ME Nº 01.011798/2021.
        </p>
        <p>
          Consulte o regulamento com as condições de participação, premiação e o
          certificado no site www.juntosfmc.com.br/voandoalto.
        </p>
      </Note>
    </Container>
  );
};

export default HowToWin;
