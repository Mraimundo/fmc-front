import React from 'react';
import { CustomArrowProps, Settings } from 'react-slick';
import { ReactSVG } from 'react-svg';

import arrowLeft from 'assets/images/arrow-left.svg';
import arrowRight from 'assets/images/arrow-right.svg';

import { Banner } from 'state/modules/home/types';
import { Prev, Next, Dot, Slider } from './styles';

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
  nextArrow: <NextSlide />,
  prevArrow: <PrevSlide />,
  customPaging: () => <Dot />,
};

interface BannersProps {
  items: Banner[];
}
const Banners: React.FC<BannersProps> = ({ items }) => {
  return (
    <div data-testid="banners">
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.title}>
            <img src={item.picture} alt={item.title} title={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banners;
