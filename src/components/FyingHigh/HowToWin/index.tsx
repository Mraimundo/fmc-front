import React from 'react';
import { ReactSVG } from 'react-svg';

import useDimensions from 'hooks/use-window-dimensions';
import ReceiptsImage from 'assets/images/flying-high/receitpts.svg';
import AppurationImage from 'assets/images/flying-high/appuration.svg';
import RescuesImage from 'assets/images/flying-high/rescues.svg';
import {
  Container,
  Title,
  Mechanics,
  TextRegulationWrapper,
  // MobileTitle,
  MechanicsMobile,
} from './styles';

import SliderHowToWin from './SliderHowToWin';

const items = [
  {
    picture: ReceiptsImage,
    title: 'Upload de Notas Fiscais',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac eros odio. Sed sollicitudin a libero varius porttitor. Aliquam sit amet erat quis ipsum luctus.</p>',
  },
  {
    picture: AppurationImage,
    title: 'Apuração dos dados',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac eros odio. Sed sollicitudin a libero varius porttitor. Aliquam sit amet erat quis ipsum luctus.</p>',
  },
  {
    picture: RescuesImage,
    title: 'Pontos para resgate',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac eros odio. Sed sollicitudin a libero varius porttitor. Aliquam sit amet erat quis ipsum luctus.</p>',
  },
];

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
          <h1>Promoção Juntos Voamos Mais Alto</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sollicitudin cursus ornare. Donec condimentum arcu eget ullamcorper
            elementum. Nullam auctor felis neque, nec luctus purus fermentum at.
            Vestibulum venenatis non mi a laoreet. Integer sit amet laoreet
            lectus. Vivamus aliquet, mi porta consequat volutpat, ligula turpis
            ultricies libero, sed feugiat arcu felis id magna. Cras lobortis
            sapien in arcu suscipit, eu pulvinar odio feugiat. Duis eu nisl
            blandit, finibus nunc tincidunt, luctus arcu. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Maecenas erat ex, pulvinar non ligula vel, rhoncus blandit elit.
            Nullam tempor purus vel urna egestas venenatis. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse vulputate viverra
            condimentum. Nulla rutrum aliquet diam. Donec commodo libero a
            pharetra tempus.
          </p>
          <p>
            Cras blandit enim eget justo malesuada volutpat. Nulla ex quam,
            faucibus et dolor aliquet, gravida efficitur libero. Fusce semper
            lacus et placerat gravida. Duis eleifend cursus felis, ac ultrices
            odio accumsan sed. Praesent tempus in diam eu viverra. Vivamus eros
            turpis, molestie ut mattis ac, imperdiet quis quam. Nunc at sem
            egestas, dapibus nulla pellentesque, ultricies ex. Maecenas est
            tellus, ornare non accumsan ac, ultrices blandit metus. Mauris
            pulvinar rhoncus elit a iaculis. In placerat, nibh sed suscipit
            lacinia, est justo consectetur quam, quis suscipit risus velit ac
            ante. Vivamus id magna eu ante cursus feugiat in sed odio.
          </p>
          <p>
            Phasellus lobortis dui non quam eleifend consequat. Suspendisse
            tempus libero ac suscipit ornare. Cras ut dignissim nibh. Cras a
            cursus turpis, vitae aliquet lectus. Nullam tincidunt sem ut enim
            auctor, vitae volutpat ligula pharetra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras in molestie nunc, a euismod urna.
            Nulla id aliquam lacus, ac egestas quam. Cras tempus, odio id varius
            molestie, mauris elit ultrices urna, at lacinia libero elit eu
            lorem. Donec dictum ullamcorper neque, congue porta risus tincidunt
            id.
          </p>
        </div>
      </TextRegulationWrapper>
    </Container>
  );
};

export default HowToWin;
