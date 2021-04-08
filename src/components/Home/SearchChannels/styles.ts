import styled from 'styled-components';
import { FONTS } from '../../../styles/font/globals';


export const SearchCannel = styled.div`
  width: 48%;
  position: relative;

  @media screen and (max-width: 320px) {
      width: 100%;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      margin-bottom: 25px;
    }
`;

export const Cover = styled.div`
  position: relative;

  img {
   width: 100%;
   height: 347px;
    object-fit: cover;
    border-radius: 10px;
    transition: filter 150ms ease;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 14%);

    @media screen and (max-width: 480px) {
      height: 120px;
    }
    @media screen and (max-width: 767px) {
      height: 260px;
    }

    @media screen and (max-width: 320px) {
      height: 244px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CoverText = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
`;

export const Title = styled.h2`
  font-family: ${FONTS.bold};
  font-size: 1.3em;
  color: #65554D;
  margin-bottom: 0.3em;
`;

export const Description = styled.p`
  width: 100%;
  max-width: 500px;
  font-family: ${FONTS.regular};
  font-size: 14px;
  color: #65554D;

  @media screen and (max-width: 767px) {
    max-width: 300px;
  }
`;

export const SearchParticipants = styled.div`
  position: absolute;
  width: 100%;
  max-width: 328px;
  bottom: 26px;
  left: 29%;
  right: 29%;

  @media screen and (max-width: 767px) {
    bottom: 18px;
  }
  

  a {
    width:100%;
    height: 36px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3B302A;
    color: #fff;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;

    cursor: pointer;
    padding: 20px;

    border: none;
    transition: all 0.5s;

    &:hover {
      filter: brightness(0.7);
      color: #fff;
    }
  }
  @media screen and (max-width: 767px) {
    left: 20px;
  }

`;






