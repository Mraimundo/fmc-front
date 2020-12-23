import styled, { css } from 'styled-components';
import ContactBallon from 'components/Contact';
import { animated } from 'react-spring';
import { shade } from 'polished';
import { Button } from 'components/shared';
import background from 'assets/images/background.svg';
import DefaultModal from 'components/shared/Modal';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${background});
  padding: 70px 20px 0 20px;

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

    > div + div {
      margin-top: 8px;
    }

    h1 {
      margin-bottom: 24px;
    }

    input {
      &::placeholder {
        font-size: 14px;
        color: ${({ theme }) => theme.font.color.primary};
      }
    }

    button {
      height: 38px;
      width: auto;
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
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
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
  max-width: 325px;
  display: flex;
  width: 100%;

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
  flex: 1;

  & + li {
    margin-left: 20px;
  }

  background-color: ${({ theme }) => theme.tabMenu.inactiveBackgroundColor};
  transition: background-color 0.2s ease, color 0.2s ease;
  will-change: background-color, color;
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.tabMenu.activeBackgroundColor};
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

export const Contact = styled(ContactBallon)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ForgotPasswordButton = styled.button`
  color: ${({ theme }) => theme.font.color.tertiary};
  display: block;
  margin-top: 2px;
  margin-bottom: 20px;
  border: none;
  background: transparent;
  text-decoration: underline;

  transition: color 0.2s;
  will-change: color;
  &:hover {
    color: ${({ theme }) => shade(0.2, theme.font.color.tertiary)};
  }
`;

export const SingleSignOnButton = styled(Button)`
  width: 170px;
  height: 39px;
  color: ${({ theme }) => theme.font.color.tertiary};
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 30px;
`;

export const Modal = styled(DefaultModal)`
  padding-left: 0;
  @media screen and (max-width: 720px) {
    ._modalContainer {
      width: 98%;
      padding-right: 0;
    }
  }
`;

export const InlineLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

export const ContainerModal = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  padding: 20px 0 60px 0;
  margin: auto;
  @media (min-width: 768px) {
    width: 743px;
  }

  h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 24px;
  }

  p {
    margin-top: 18px;
    margin-bottom: 20px;
    font-size: 18px;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }

  button {
    width: auto;
    height: 40px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transform: translateX(-4px) translateY(4px);
  > button {
    border: none;
    background: transparent;
    svg path {
      fill: ${({ theme }) => theme.font.color.tertiary};
    }
  }
`;
