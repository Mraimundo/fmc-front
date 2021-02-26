import styled from 'styled-components';
import { FONTS } from 'styles/font/globals';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: #cdc5c2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  font-family: ${FONTS.medium};
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  min-height: 400px;
  width: 80%;
  color: #65554d;
  padding: 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 2rem 1rem;
  letter-spacing: 0.1em;
`;

export const FooterWrapper = styled.div`
  background-color: #efefef;
  width: 80%;
  footer {
    width: 100%;
  }
`;
