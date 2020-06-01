import styled from 'styled-components';
import { shade } from 'polished';

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

  transition: background-color 0.2s;
  will-change: background-color;
  &:hover {
    background: ${({ theme, buttonRole }) =>
      shade(0.2, theme.button[buttonRole].backgroundColor)};
  }

  ._loading {
    svg {
      fill: ${({ theme, buttonRole }) => theme.button[buttonRole].fontColor};
    }
  }
`;
