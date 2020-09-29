import React, { useCallback } from 'react';
import { CustomArrowProps, Settings } from 'react-slick';
import { ReactSVG } from 'react-svg';
import history from 'services/history';

import arrowLeft from 'assets/images/arrow-left.svg';
import arrowRight from 'assets/images/arrow-right.svg';

import { Banner } from 'state/modules/home/types';
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
  autoplay: true,
  nextArrow: <NextSlide />,
  prevArrow: <PrevSlide />,
  customPaging: () => <Dot />,
};

interface BannersProps {
  items: Banner[];
}
const Banners: React.FC<BannersProps> = ({ items }) => {
  const handleBannerClick = useCallback(({ linkType, url }: Banner) => {
    if (!url) return;
    if (linkType === 'internal') {
      history.push(url);
      return;
    }

    const linkClick = document.createElement('a');
    linkClick.href = url;
    linkClick.target = '_blank';
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, []);

  return (
    <div data-testid="banners">
      <Slider {...settings}>
        {items.map(item => (
          <Item key={item.title} onClick={() => handleBannerClick(item)}>
            <img src={item.picture} alt={item.title} title={item.title} />
          </Item>
        ))}
      </Slider>
    </div>
  );
};

export default Banners;
