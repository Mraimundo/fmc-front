import styled, { css } from 'styled-components';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FONTS } from 'styles/font/globals';

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
  margin-top: 1.5rem;

  &:before {
    content: '';
    width: 13px;
    height: 13px;
    background-color: transparent;
    border-radius: 50%;
    display: block;
    border: 1px solid #b1a9a5;
    cursor: pointer;
  }
`;

export const Slider = styled(Slick)`
  //max-width: 300px;
  //width: 100%;
  //height: 400px;
  margin-bottom: 1rem;

  /*svg {
    max-width: 350px;
    width: 100%;
  }*/

  .slick-dots {
    bottom: -5px;

    .slick-active {
      ${Dot} {
        &:before {
          background-color: #b1a9a5;
        }
      }
    }
  }
`;

export const Item = styled.div`
  cursor: pointer;
  //margin: 0 2rem;
  //margin-left: 3rem;
  width: 360px;
  //display: flex;
  /*justify-items: center;
  align-items: center;*/

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  svg {
    height: 150px;
    width: 350px;
  }

  h4 {
    color: #65554d;
    font-family: ${FONTS.bold};
    font-size: 1.5em;
    margin: 1em;
    text-align: center;
  }

  p {
    color: #3b302a;
    font-family: ${FONTS.italic};
    font-size: 1em;
  }

  span {
    color: #3b302a;
    font-family: ${FONTS.italic};
    font-size: 0.8em;
  }
`;
