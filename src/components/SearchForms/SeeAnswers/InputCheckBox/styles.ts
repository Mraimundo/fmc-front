import styled from 'styled-components';

import { FONTS } from '../../../../styles/font/globals';


export const Container = styled.div`
  width: 100%;
`;

export const CheckBoxContent = styled.div`
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

export const CheckBoxGroup = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;

  align-items:center;
  
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #65554D;

    input {
      margin: 0 20px;
    }

    span {
      /* width: 207px;
      font-size: 16px; */
      font-family: Arial, Helvetica, sans-serif;
      font-weight: Regular;
      line-height: 24px;
    }

  }
`;



