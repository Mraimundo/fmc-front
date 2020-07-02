import styled, { css } from 'styled-components';

interface ContainerProps {
  opened: boolean;
}
export const Container = styled.li<ContainerProps>`
  cursor: pointer;

  > ul {
    margin-left: 10px;
    max-height: 0;
    visibility: hidden;
  }

  ${({ opened }) =>
    opened &&
    css`
      > ul {
        max-height: 50px;
        visibility: visible;
      }
    `};
`;
