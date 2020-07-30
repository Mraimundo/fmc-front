import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 12px;

  /*&::-webkit-scrollbar-track {
    background-color: #fff;
  }*/
  padding-right: 12px;
  /*&::-webkit-scrollbar {
    width: 12px;
  }*/
  /*&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #dbded6;
  }*/

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'p r';
  margin-top: 8px;
`;

interface MessageBoxProps {
  type: 'r' | 'p';
}
export const MessageBox = styled.div<MessageBoxProps>`
  background-color: #dbded6;
  padding: 14px;
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
    margin: 5px 0%;
  }

  > a {
    color: ${({ theme }) => theme.font.color.quartenary};
    align-self: flex-end;
    font-size: 14px;
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
    border: 19px solid #dbded6;
    border-left: 30px solid transparent;
    border-bottom: 12px solid transparent;
  }

  grid-area: p;
  ${({ type }) =>
    type === 'r' &&
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
