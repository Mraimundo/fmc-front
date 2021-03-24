import styled from 'styled-components';

import { FONTS } from '../../../../styles/font/globals';


export const Container = styled.div`
  width: 100%;
  
  h1 {
    font-size: 24px;
    color: #3B302A;
  }
`;

export const MultiLinearContent = styled.div`
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

export const Box = styled.div`
  width: 60%;
  margin-top: 25px;
  color: #3B302A;
  
  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40px;
      color: #65554D;
      font-size: 14px;
      top: 50;

      input {
        display: none;
      }
    }
  }
`;

