import styled, { css } from 'styled-components';

interface ContainerProps {
  highlight: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;

  svg {
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1.1);
    }
  }

  ${({ highlight }) =>
    highlight &&
    css`
      svg path {
        fill: #e1dc1b;
        stroke: #e1dc1b;
      }
    `};
`;
