import styled from 'styled-components';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Slider = styled(Slick)`
  .slick-slide {
    margin-bottom: 1em;
    // margin-right: 0.6em;
  }

  .slick-track {
    display: flex;
    justify-content: flex-start;
    margin: 0;
  }
`;
