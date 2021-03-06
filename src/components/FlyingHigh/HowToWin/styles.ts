import styled from 'styled-components';
import { FONTS } from 'styles/font/globals';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  letter-spacing: 0.1em;
  width: 100%;
  color: #65554d;
  margin-bottom: 1rem;
`;

export const Mechanics = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    132deg,
    rgba(239, 239, 239, 1) 0%,
    rgba(254, 254, 255, 1) 25%,
    rgba(239, 239, 239, 1) 50%,
    rgba(254, 254, 255, 1) 75%,
    rgba(239, 239, 239, 1) 100%
  );
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
      color: #65554d;
      font-family: ${FONTS.bold};
      font-size: 1.5em;
      margin: 1em;
      text-align: justify;
    }
  }

  p {
    color: #3b302a;
    font-family: ${FONTS.italic};
    font-size: 1.1em;
  }
  span {
    color: #3b302a;
    font-family: ${FONTS.italic};
    font-size: 0.9em;
  }
`;

export const MechanicsMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(
    132deg,
    rgba(239, 239, 239, 1) 0%,
    rgba(254, 254, 255, 1) 25%,
    rgba(239, 239, 239, 1) 50%,
    rgba(254, 254, 255, 1) 75%,
    rgba(239, 239, 239, 1) 100%
  );
  padding: 2em;
`;

export const TextRegulationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #3b302a;
  //min-height: 500px;

  div {
    background-color: #efefef;
    width: 80%;
    margin: 3em 0;
    padding: 2em;
    height: 100%;
    overflow-y: scroll;
    height: 500px;

    h1,
    h4 {
      color: #3b302a;
      margin: 1rem 0;
      text-align: center;
    }

    p {
      color: #65554d;
      font-family: ${FONTS.regular};
      text-align: justify;
      margin: 1rem 0.5rem 0 0.5rem;
    }
  }

  table {
    width: 100%;
    color: #65554d;
    font-family: ${FONTS.regular};
    border: 1px solid #3b302a;
    border-collapse: collapse;

    th {
      font-family: ${FONTS.bold};
      text-align: center;
      background-color: #3b302a;
      color: #ffffff;
      border: 0;
      padding: 2px;
    }
    td {
      text-align: center;
      border: 1px solid #3b302a;
      padding: 2px;
    }
  }

  @media (max-width: 600px) {
    div {
      width: 90%;
      margin: 2em 0;
    }
  }
`;

export const Note = styled.div`
  width: 100%;
  padding: 0 3rem 2rem;
  text-align: center;
  background-color: #3b302a;

  p {
    font-size: 1em;
    font-family: ${FONTS.regular};
  }

  @media (max-width: 720px) {
    padding: 0 3rem 2rem;
  }
`;
