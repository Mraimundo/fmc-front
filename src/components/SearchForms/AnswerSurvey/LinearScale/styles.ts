import styled from 'styled-components';

import { FONTS } from '../../../../styles/font/globals';


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 40px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;

  p {
      font-size: 14px;
      font-family: ${FONTS.condensed}, sans-serif;
      color: #000;
    }
 
  div {
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    fieldset {
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-appearance: none;

      width: 50px;
      justify-content: center;
      color: black;

      legend {
        margin-left: 20px;
      }
    }
  }
`;



