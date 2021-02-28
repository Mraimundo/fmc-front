import styled from 'styled-components';
import { FONTS } from 'styles/font/globals';

export const Text = styled.p`
  background-color: #3b302a;
  font-size: 1.3em;
  font-family: ${FONTS.regular};
  width: 80%;
  padding: 2rem 2rem;
  text-align: center;

  @media (max-width: 600px) {
    width: 100%;
    text-align: left;
  }
`;
