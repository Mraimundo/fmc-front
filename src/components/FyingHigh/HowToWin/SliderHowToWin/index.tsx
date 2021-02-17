import React from 'react';
import { /*CustomArrowProps,*/ Settings } from 'react-slick';
import { ReactSVG } from 'react-svg';

//import arrowLeft from 'assets/images/arrow-left--brown.svg';
//import arrowRight from 'assets/images/arrow-right--brown.svg';

import { /*Prev, Next,*/ Dot, Slider, Item } from './styles';

/*const PrevSlide = ({ onClick }: CustomArrowProps) => (
  <Prev onClick={onClick}>
    <ReactSVG src={arrowLeft} />
  </Prev>
);

const NextSlide = ({ onClick }: CustomArrowProps) => (
  <Next onClick={onClick}>
    <ReactSVG src={arrowRight} />
  </Next>
);*/

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  /*nextArrow: <NextSlide />,
  prevArrow: <PrevSlide />,*/
  customPaging: () => <Dot />,
  centerMode: true,
  centerPadding: '0px',
  arrows: false,
  adaptiveHeight: true,
};

interface SliderProps {
  items: {
    picture: string;
    title: string;
    text: string;
  }[];
}

const SliderHowParticipate: React.FC<SliderProps> = ({ items }) => {
  return (
    <Slider {...settings}>
      {items.map(item => (
        <Item key={item.picture}>
          <div><ReactSVG src={item.picture}/></div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </Item>
      ))}
    </Slider>
  );
};

export default SliderHowParticipate;
