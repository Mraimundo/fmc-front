import styled from 'styled-components';
import { FONTS } from 'styles/font/globals';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const Title = styled.h2`
  margin: 2rem 0 0 0;
  padding: 2rem 0;
  text-align: center;
  letter-spacing: 0.10em;
  background-color: #65554D;
  width: 100%;
`;

export const MobileTitle = styled.h2`
  text-align: center;
  letter-spacing: 0.10em;
  width: 100%;
  color: #3B302A;
  margin-bottom: 1rem;
`;

export const Mechanics = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(132deg, rgba(239,239,239,1) 0%, rgba(254,254,255,1) 50%, rgba(239,239,239,1) 100%);
  padding: 2em;
  flex-wrap: wrap;

  div {
    margin: 0.5em 1em;
    max-width: 350px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      height: 150px;
      max-width: 350px;
    }
    h4 {
      color: #65554D;
      font-family: ${FONTS.bold};
      font-size: 1.5em;
      margin: 1em;
      text-align: justify;
    }
  }

  p {
    color: #3B302A;
    font-family: ${FONTS.italic};
    font-size: 1em;
  }
`;

export const MechanicsMobile = styled.div`
  display: flex;
  flex-direction: column;
  /*justify-content: center;
  align-items: center;*/
  width: 100%;
  background: linear-gradient(132deg, rgba(239,239,239,1) 0%, rgba(254,254,255,1) 50%, rgba(239,239,239,1) 100%);
  padding: 2em;
`;

export const TextRegulationWrapper = styled.div`
  display:flex;
  justify-content: center;
  width: 100%;
  background-color: #65554D;
  min-height: 500px;

  div {
    background-color: #EFEFEF;
    width: 80%;
    margin: 3em 0;
    padding: 2em;

    h1 {
      color: #3B302A;
      margin: 2rem 0;
      text-align: center;
    }

    p {
      color: #65554D;
      font-family: ${FONTS.regular};
      text-align: justify;
      margin: 1rem 0.5rem 0 0.5rem;

    }
  }
`;
