import styled from 'styled-components';

import { FONTS } from '../../../../styles/font/globals';

export const Container = styled.div`
  width: 100%;
  h1 {
    font-size: 24px;
    color: #3B302A;
  }

`;

export const RadioContent = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;

    p {
      font-size: 14px;
      font-family: ${FONTS.condensed}, sans-serif;
      color: #000;
      margin-bottom: 25px;
    }
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-top: 25px;
  color: #3B302A;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    label {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        margin: 0 15px;
        width: 16px;
        height: 16px;
      }
    }
  }      
`;





