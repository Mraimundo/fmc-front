import styled from 'styled-components';

import { FONTS } from '../../../../../styles/font/globals';

export const Container = styled.div`
  width: 100%;

  h1 {
    font-size: 24px;
    color: #3B302A;
  }

`;

export const TypeCheckBoxContent = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;
    p {
      font-size: 14px;
      font-family: ${FONTS.condensed}, sans-serif;
      color: #000;
    }
`;

export const TypeCheckBoxContentGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  color: #3B302A;
  div {
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
        /* height: 40px; */

      input {
        margin: 10px 0;
        width: 16px;
        height: 16px;
      }
    }
  }
`;



