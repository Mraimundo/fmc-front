import styled, { css } from 'styled-components';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const arrowStyle = css`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-20px);
  cursor: pointer;
  z-index: 1;

`;

export const Prev = styled.div`
  ${arrowStyle};
  left: -20px;
`;

export const Next = styled.div`
  ${arrowStyle};
  right: -20px;
`;

export const Dot = styled.div`
  text-decoration: none;

  &:before {
    content: '';
    width: 13px;
    height: 13px;
    background-color: transparent;
    border-radius: 50%;
    display: block;
    border: 1px solid #B1A9A5;
    cursor: pointer;
  }
`;

export const Slider = styled(Slick)`
  margin-top: 24px;
  img {
    width: 100%;
  }

  .slick-dots {
    bottom: -75px;

    .slick-active {
      ${Dot} {
        &:before {
          background-color: #B1A9A5;
        }
      }
    }
  }
`;

export const Item = styled.div`
  cursor: pointer;
`;
