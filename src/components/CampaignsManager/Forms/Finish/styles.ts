import styled, { css } from 'styled-components';
import { lighten, opacify } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  > .extraPadding {
    padding: 0 40px;
    > h4 {
      color: ${({ theme }) => theme.font.color.primary};
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 21px;
      margin-bottom: 12px;
      margin-top: 35px;
    }
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
  side: 'left' | 'right';
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
    side === 'right' &&
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

export const Actions = styled.div`
  display: flex;
  margin-top: 35px;
`;

interface ButtonProps {
  selected: boolean;
}

export const Button = styled.button<ButtonProps>`
  text-transform: uppercase;
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 14px;
  height: 49px;
  border-radius: 7px;
  min-width: 136px;
  padding: 0 30px;
  border: 1px dashed ${({ theme }) => opacify(0.5, theme.font.color.primary)};
  position: relative;

  background: transparent;
  & + button {
    margin-left: 8px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;

    ${({ selected }) =>
      selected &&
      css`
        &:after {
          content: 'Aguarde...';
          position: absolute;
          left: 50%;
          top: 32px;
          transform: translateX(-50%);
          font-size: 11px;
          opacity: 0.7;
        }
      `}
  }
`;
