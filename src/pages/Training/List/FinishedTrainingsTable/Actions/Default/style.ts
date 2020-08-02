import styled from 'styled-components';
import { shade, lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  font-size: 12px;
  color: ${({ theme }) => theme.font.color.tertiary};
  background: ${({ theme }) => theme.font.color.primary};
  transition: color 0.2s;
  text-decoration: none;
  border-radius: 10px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  width: 86px;
  height: 29px;

  background-position: center;
  transition: background 0.5s;
  &:hover {
    background: ${({ theme }) => shade(0.2, theme.font.color.primary)}
      radial-gradient(
        circle,
        transparent 1%,
        ${({ theme }) => shade(0.2, theme.font.color.primary)} 1%
      )
      center/15000%;
  }

  &:active {
    background-color: ${({ theme }) => lighten(0.1, theme.font.color.primary)};
    background-size: 100%;
    transition: background 0s;
  }
`;
