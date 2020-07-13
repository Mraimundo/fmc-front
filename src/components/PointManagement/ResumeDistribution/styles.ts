import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const InputPointsToDistribute = styled.input`
  width: 100%;
  font-family: ${FONTS.bold};
  font-size: 1.5em;
  color: #193b4e;
  text-align: center;
  background-color: #efefef;
  outline: none;
  border: 1px solid #193b4e;
  height: 60px;
  border-radius: 6px;

  &::placeholder {
    color: #193b4e;
  }
`;
