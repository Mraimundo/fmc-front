import styled, { css } from 'styled-components';
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
  padding: 25px 0;

  width: 100%;
  max-width: 400px;

  form {
    margin: 10px 0;
    width: 100%;
    max-width: 300px;
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
      margin-top: 6px;
      font-size: 12px;

      transition: color 0.2s;
      will-change: color;
      &:hover {
        color: ${({ theme }) => shade(0.3, theme.link.fontColor)};
      }
    }

    button {
      height: 40px;
      width: 180px;
      margin-left: 50%;
      transform: translateX(-50%);
      text-transform: uppercase;
    }

    ._inputContainer {
      height: 40px;
      width: 100%;
    }

    & + h3 {
      margin-top: 25px;
    }
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.font.color.primary};
  width: 100%;
  max-width: 300px;
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 15px 0;
`;

interface ItemListProps {
  active: boolean;
}

export const ItemList = styled.li<ItemListProps>`
  display: inline;
  color: ${({ theme }) => theme.font.color.primary};
  cursor: pointer;
  padding: 8px 20px;
  font-size: 14px;

  & + li {
    margin-left: 20px;
  }

  background-color: ${({ theme }) => theme.menu.inactiveBackgroundColor};
  transition: background-color 0.2s ease;
  will-change: background-color;
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.menu.activeBackgroundColor};
    `}
`;
