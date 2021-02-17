import styled from 'styled-components';
import { FONTS } from 'styles/font/globals';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #3B302A;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  font-family: ${FONTS.medium};
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EFEFEF;
  min-height: 400px;
  width: 80%;
  color: #65554D;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 2rem 1rem;
  letter-spacing: 0.10em;
`;
