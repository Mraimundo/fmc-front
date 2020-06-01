import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  width: 100%;
  max-width: 460px;

  form {
    margin: 20px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${({ theme }) => theme.link.fontColor};
      display: block;
      margin-top: 24px;

      transition: color 0.2s;
      will-change: color;
      &:hover {
        color: ${({ theme }) => shade(0.2, theme.link.fontColor)};
      }
    }

    button {
      height: 40px;
      width: 180px;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    ._inputContainer {
      height: 40px;
      width: 100%;
    }
  }

  > button {
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    border: none;
    background: transparent;

    svg {
      margin-left: 6px;
      margin-right: 6px;
      margin-top: 2px;
    }
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #808285;
`;
