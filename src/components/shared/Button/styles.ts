import styled from 'styled-components';
import { shade, lighten } from 'polished';

interface ContainerProps {
  buttonRole: 'primary' | 'secondary';
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ theme, buttonRole }) =>
    theme.button[buttonRole].backgroundColor};
  border-radius: ${({ theme, buttonRole }) =>
    theme.button[buttonRole].borderRadius};
  height: 56px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  color: ${({ theme, buttonRole }) => theme.button[buttonRole].fontColor};
  font-weight: 500;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-position: center;
  transition: background 0.5s;
  will-change: background-color;
  &:hover {
    background: ${({ theme, buttonRole }) =>
        shade(0.2, theme.button[buttonRole].backgroundColor)}
      radial-gradient(
        circle,
        transparent 1%,
        ${({ theme, buttonRole }) =>
            shade(0.2, theme.button[buttonRole].backgroundColor)}
          1%
      )
      center/15000%;
  }

  &:active {
    background-color: ${({ theme, buttonRole }) =>
      lighten(0.1, theme.button[buttonRole].backgroundColor)};
    background-size: 100%;
    transition: background 0s;
  }

  ._loading {
    svg {
      fill: ${({ theme, buttonRole }) => theme.button[buttonRole].fontColor};
    }
  }
`;
