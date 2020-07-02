import styled, { css } from 'styled-components';

interface ContainerProps {
  opened: boolean;
}
export const Container = styled.li<ContainerProps>`
  cursor: pointer;

  > span {
    &:hover {
      text-decoration: underline;
    }
  }

  > ul {
    margin-left: 10px;
    max-height: 0;
    visibility: hidden;
    margin-top: 5px;
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
