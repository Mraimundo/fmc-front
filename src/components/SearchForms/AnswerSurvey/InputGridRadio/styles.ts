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
      font-size: 16px;
      font-family: ${FONTS.condensed}, sans-serif;
      color: #000;
      margin-bottom: 12px;
    }
`;

export const RadioContentGroup = styled.div`
  width: 40%;
  margin-top: 25px;
  color: #3B302A;

  .label1 {
    margin-left: 100px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        margin: 10px 0;
        width: 16px;
        height: 16px;
      }
    }
  }
`;

