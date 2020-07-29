import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  > h4 {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    margin-bottom: 12px;
    margin-top: 35px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  max-width: 532px;
  height: 180px;
  border: 1px solid ${({ theme }) => theme.font.color.primary};
  padding: 20px;
`;

export const Content = styled.div`
  display: grid;
  margin-top: 8px;
  & + div {
    margin-top: 16px;
  }
`;

interface MessageBoxProps {
  side: 'l' | 'r';
}
export const MessageBox = styled.div<MessageBoxProps>`
  background-color: ${({ theme }) => lighten(0.75, theme.font.color.primary)};
  padding: 20px;
  position: relative;
  margin-left: 28px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  span {
    display: block;
    width: 100%;
    font-size: 15px;
    color: ${({ theme }) => theme.font.color.secondary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }

  p {
    width: 100%;
    font-size: 15px;
    color: ${({ theme }) => theme.font.color.secondary};
    margin: 10px 0%;
  }

  &:after {
    content: '';
  }

  &:before {
    content: '';
    position: absolute;
    border-radius: 8px 0 0 0;
    top: 0;
    left: -36px;
    border: 19px solid ${({ theme }) => lighten(0.75, theme.font.color.primary)};
    border-left: 30px solid transparent;
    border-bottom: 12px solid transparent;
  }

  grid-area: p;
  ${({ side }) =>
    side === 'r' &&
    css`
      grid-area: r;
      margin-left: 0;
      margin-right: 28px;

      p {
        text-align: right;
      }

      span {
        text-align: right;
      }

      &:before {
        transform: rotateY(180deg);
        left: auto;
        right: -36px;
      }
    `};
`;
