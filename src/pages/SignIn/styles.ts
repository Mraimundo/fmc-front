import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgba(4, 36, 44, 1) 0%,
    rgba(56, 77, 85, 1) 100%
  );

  padding: 70px 20px;

  > img {
    width: 100%;
    max-width: 500px;
  }

  @media screen and (min-width: 1367px) {
    > img {
      width: auto;
      max-width: none;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 35px 20px;
  }
`;

export const Content = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 0 25px 0;

  width: 100%;
  max-width: 230px;

  form {
    margin: 0 0 10px 0;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${({ theme }) => theme.font.color.tertiary};
      display: block;
      margin-top: 6px;
      font-size: 12px;

      transition: color 0.2s;
      will-change: color;
      &:hover {
        color: ${({ theme }) => shade(0.2, theme.font.color.tertiary)};
      }
    }

    input {
      &::placeholder {
        font-size: 14px;
        color: ${({ theme }) => theme.font.color.primary};
      }
    }

    button {
      height: 38px;
      width: 160px;
      text-transform: uppercase;
      font-size: 12px;
    }

    ._inputContainer {
      height: 32px;
      margin-top: 12px;
      ._iconContainer svg {
        width: 16px;
      }
    }

    & + h3 {
      margin-top: 25px;
    }
  }

  @media screen and (min-width: 1367px) {
    max-width: 325px;

    form {
      ._inputContainer {
        height: 44px;
        ._iconContainer svg {
          width: 20px;
        }
      }

      a {
        font-size: 16px;
      }

      button {
        height: 48px;
        width: 217px;
        font-size: 16px;
      }

      & + h3 {
        margin-top: 45px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    form {
      ._inputContainer {
        height: 44px;
        ._iconContainer svg {
          width: 20px;
        }
      }
      button {
        height: 48px;
        width: 100%;
        font-size: 16px;
      }
      a {
        font-size: 16px;
      }
    }
    max-width: none;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.font.color.tertiary};
  width: 100%;
  @media screen and (min-width: 1367px) {
    font-size: 24px;
    margin-top: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 15px 0;

  @media screen and (max-width: 500px) {
    display: flex;
    width: 100%;
  }
`;

interface ItemListProps {
  active: boolean;
}

export const ItemList = styled.li<ItemListProps>`
  display: inline;
  color: ${({ theme }) => theme.font.color.tertiary};
  cursor: pointer;
  padding: 8px 20px;
  font-size: 14px;

  & + li {
    margin-left: 20px;
  }

  background-color: ${({ theme }) => theme.menu.inactiveBackgroundColor};
  transition: background-color 0.2s ease, color 0.2s ease;
  will-change: background-color, color;
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.menu.activeBackgroundColor};
    `}

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        color: ${({ theme }) => shade(0.3, theme.font.color.tertiary)};
      }
    `}

  @media screen and (min-width: 1367px) {
    font-size: 18px;
    padding: 8px 40px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    width: 100%;
  }
`;

export const contentAnimation = {
  from: { marginRight: '-250px', marginTop: '250px', opacity: 0 },
  to: { marginRight: '0', marginTop: '0', opacity: 1 },
};

export const logoAnimation = {
  from: { marginTop: '-250px', opacity: 0 },
  to: { marginTop: '0', opacity: 1 },
};
