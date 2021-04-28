import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0 0 0;
`;

interface BoxProps {
  selected: boolean;
}

export const Box = styled.div<BoxProps>`
  position: relative;
  width: calc(100% / 6);
  height: 40px;
  border: 2px solid ${({ theme }) => theme.font.color.quartenary};
  opacity: 0.3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.1em;
  color: ${({ theme }) => theme.font.color.primary};

  & + div {
    margin-left: 7px;
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      opacity: 1;
      border: 2px solid ${theme.font.color.primary};
      &::before {
        border-right-color: ${theme.font.color.primary};
        border-top-color: ${theme.font.color.primary};
      }
    `}
`;
