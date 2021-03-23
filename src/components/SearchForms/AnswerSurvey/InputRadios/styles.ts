import styled from 'styled-components';

import { FONTS } from '../../../../styles/font/globals';

export const Container = styled.div`
  width: 100%;
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
  display: flex;
  flex-direction: column;
  label {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #000;
      margin-bottom: 15px;

      input {
      margin: 0 20px;
      margin-right: 12;
      color: #3B302A;
    }
  }     
       
`;





