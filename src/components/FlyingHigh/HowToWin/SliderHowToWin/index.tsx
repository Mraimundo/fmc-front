import React from 'react';
import { Settings } from 'react-slick';
import { ReactSVG } from 'react-svg';
import { HowToWinItem } from '../howToWinItems';

import { Dot, Slider, Item } from './styles';

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  customPaging: () => <Dot />,
  centerMode: true,
  centerPadding: '0px',
  arrows: false,
  adaptiveHeight: true,
};

interface SliderProps {
  items: HowToWinItem[];
}

const SliderHowParticipate: React.FC<SliderProps> = ({ items }) => {
  return (
    <Slider {...settings}>
      {items.map(item => (
        <Item key={item.picture}>
          <div>
            <ReactSVG src={item.picture} />
          </div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          {item.note && <span>{item.note}</span>}
        </Item>
      ))}
    </Slider>
  );
};

export default SliderHowParticipate;
