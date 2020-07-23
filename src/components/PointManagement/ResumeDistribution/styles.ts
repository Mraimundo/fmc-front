import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const InputPointsToDistribute = styled.input`
  width: 100%;
  font-family: ${FONTS.bold};
  font-size: 1.3em;
  color: #193b4e;
  text-align: center;
  background-color: #efefef;
  outline: none;
  border: 1px solid #193b4e;
  height: 65px;
  border-radius: 6px;
  margin-top: 1em;

  &::placeholder {
    color: #193b4e;
  }
`;

export const Text = styled.h3`
  color: #193b4e;
  font-size: 1em;
`;

export const AvailableScoreText = styled(Text)`
  margin-top: 0.5em;
  font-family: ${FONTS.medium};
`;
