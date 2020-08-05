import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const InputPointsToDistribute = styled.input`
  width: 100%;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 1.3em;
  color: ${({ theme }) => theme.font.color.primary};
  text-align: center;
  background-color: #efefef;
  outline: none;
  border: 1px solid ${({ theme }) => theme.font.color.primary};
  height: 65px;
  border-radius: 6px;
  margin-top: 1em;

  &::placeholder {
    color: ${({ theme }) => theme.font.color.primary};
  }
`;

export const Text = styled.h3`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 1em;
`;

export const AvailableScoreText = styled(Text)`
  margin-top: 0.5em;
  font-family: ${FONTS.medium};
`;
