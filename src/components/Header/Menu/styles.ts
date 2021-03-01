import styled, { css } from 'styled-components';

import {
  HEADER_HEIGHT,
  HEADER_BACKGROUND_COLOR_DROPDOWN,
} from 'components/Header/constants';

interface MenuItemProps {
  selectedMenu: boolean;
}
export const MenuItem = styled.li<MenuItemProps>`
  position: relative;
  color: #fff;
  text-transform: uppercase;
  padding: 0.5em 0.75em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.fontFamily.regular};
  transition: color 250ms ease, background-color 150ms ease;
  width: max-content;

  &:not(:last-child) {
    margin-right: 3px;
  }

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;

    svg {
      margin-left: 0.5em;
    }
  }

  ${({ selectedMenu }) =>
    selectedMenu &&
    css`
      background-color: #fff;

      a {
        color: ${({ theme }) => theme.font.color.primary};
      }
    `}

  &:hover {
    background-color: #fff;

    a {
      color: ${({ theme }) => theme.font.color.primary};
    }

    > ul {
      visibility: visible;

      > li {
        color: ${({ theme }) => theme.font.color.primary};
        background-color: ${HEADER_BACKGROUND_COLOR_DROPDOWN};

        &:hover {
          background-color: #fff;
        }
      }
    }
  }
`;

export const SubMenuStyle = css`
  width: 100%;
  height: auto;
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: ${HEADER_HEIGHT};
  left: 0;
  box-shadow: 3px 5px 6px rgb(0 0 0 / 10%);
  z-index: 1;

  > li {
    width: 100%;
    height: auto;
    min-height: 35px;
    color: transparent;
    background-color: transparent;
    text-transform: initial;
    margin-right: initial !important;
    font-family: ${({ theme }) => theme.font.fontFamily.medium};
  }

  &:before {
    content: '';
    width: calc(100% - 2em);
    height: 1px;
    position: absolute;
    top: -1px;
    left: 0;
    background-color: ${({ theme }) => theme.font.color.primary};
    margin: 0 1em;
  }
`;

interface MenuListProps {
  readonly subMenu: boolean;
  readonly width: number;
}
export const MenuList = styled.ul<MenuListProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 0.9em;

  ${({ subMenu }) => subMenu && SubMenuStyle};
  ${({ subMenu, width }) =>
    subMenu &&
    css`
      ul {
        left: ${width}px;
        top: 0;

        &:before {
          display: none;
        }
      }
    `}
`;
