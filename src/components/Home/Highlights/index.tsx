import React from 'react';
import { Settings } from 'react-slick';

import { Highlight } from 'state/modules/home/types';

import { Slider } from './styles';
import Item from './Item';

const settings: Settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface HighlightsProps {
  items: Highlight[];
}
const Highlights: React.FC<HighlightsProps> = ({ items }) => {
  return (
    <div>
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.title}>
            <Item highlight={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Highlights;
