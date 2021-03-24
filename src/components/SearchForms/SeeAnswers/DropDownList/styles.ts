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

  option,
  select {
    padding: 0 10px;
    width: 299px;
    height: 40px;
  }

`;





