import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: ${FONTS.bold};
  justify-content: center;
  color: #193f4e;
  font-size: 0.9em;
  margin-bottom: 2em;
  cursor: pointer;
  transition: color 150ms ease;

  &:hover {
    color: #a4b0b7;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    margin-right: 5px;
  }
`;
