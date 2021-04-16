import styled from 'styled-components';
import { FONTS } from '../../../styles/font/globals';


export const SearchCannel = styled.div`
  width: 48%;
  position: relative;

  @media screen and (max-width: 320px) {
      width: 100%;
    }
    @media only screen and (max-width: 768px) {
      width: 48%;
      margin-bottom: 25px;
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

    @media screen and (width: 768px) {
      height: 348px;
    }
  }
 
`;

export const CoverText = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
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

  @media only screen and (max-width: 768px) {
    max-width: 300px;
    text-align: center;
  }

  @media only screen and (width: 320px) {
    text-align: left;
  }
`;

export const SearchParticipants = styled.div`
  position: absolute;
  max-width: 380px;
  bottom: 26px;
  left: 30%;

  @media only screen and (width: 768px) {
    max-width: 294px;
    left: 11%;
    bottom: 18px;
  }

  @media  screen and (width: 1024px) {
    max-width: 380px;
    left: 22%;
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

    @media screen and (max-width: 767px) {
      font-size: 13px;
    }

    &:hover {
      filter: brightness(0.7);
      color: #fff;
    }
  }
  @media screen and (max-width: 767px) {
      width: 100%;
      left: 0%;
      font-size: 13px;
      padding: 0 20px;
  }

`;






