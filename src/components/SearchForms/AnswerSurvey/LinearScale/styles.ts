import styled from 'styled-components';

import { FONTS } from '../../../../styles/font/globals';

export const Container = styled.div`
  width: 100%;
`;

export const InputControlScale = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;
    p {
      font-size: 14px;
      font-family: ${FONTS.condensed}, sans-serif;
      /* font-family: "HelveticaNeue-Condensed; */
      color: #000;
    }
`;

export const InputGroup = styled.div`
  width: 60%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 25px;
  padding: 20px;
  position: relative;

  label {
    display: flex;
    align-items:center;
    flex-direction: column;
    color: #65554D;
    font-size: 14px;
    font-family: Helvetica Neue;
    font-weight: Regular;
    /* line-height: 24px; */
    top: 50;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;

      /* i {
        width: 24px;
        height: 23px;
      } */
    }

    svg {
      margin-top: 14px;
      width: 26px;
      height: 26px;
      transition: all 0.2s ease-in-out;
    }

    input {
      display: none;
    }
  }
`;




