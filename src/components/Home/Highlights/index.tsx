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
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  lazyLoad: 'ondemand',
  variableWidth: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
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
          <div key={item.id}>
            <Item highlight={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Highlights;
