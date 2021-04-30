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
 
  fieldset {
    display: inline-flex;
    height: 0.1rem;
    align-items: flex-end;
    width: 4rem;
    -webkit-appearance: none;
    margin-top: 22px;

    width: 500px;
    justify-content: flex-end;
    color: black;

    /* span {
      label {
        margin-right: 20px;
      }
    } */
  }
`;



