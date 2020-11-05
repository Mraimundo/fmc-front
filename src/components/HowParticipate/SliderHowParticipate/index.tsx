import React from 'react';
import { CustomArrowProps, Settings } from 'react-slick';
import { ReactSVG } from 'react-svg';

import arrowLeft from 'assets/images/arrow-left--brown.svg';
import arrowRight from 'assets/images/arrow-right--brown.svg';

import { Prev, Next, Dot, Slider, Item } from './styles';

const PrevSlide = ({ onClick }: CustomArrowProps) => (
  <Prev onClick={onClick}>
    <ReactSVG src={arrowLeft} />
  </Prev>
);

const NextSlide = ({ onClick }: CustomArrowProps) => (
  <Next onClick={onClick}>
    <ReactSVG src={arrowRight} />
  </Next>
);

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow: <NextSlide />,
  prevArrow: <PrevSlide />,
  customPaging: () => <Dot />,
};

interface SliderProps {
  items: {
    picture: string;
  }[];
}

const SliderHowParticipate: React.FC<SliderProps> = ({ items }) => {
  return (
    <div data-testid="banners">
      <Slider {...settings}>
        {items.map(item => (
          <Item key={item.picture}>
            <img src={item.picture} alt="Imagem rotativa" />
          </Item>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHowParticipate;
