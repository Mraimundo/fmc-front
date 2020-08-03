import styled, { css } from 'styled-components';

import {
  HEADER_HEIGHT,
  HEADER_BACKGROUND_COLOR_DROPDOWN,
} from 'components/Header/constants';

export const MenuItem = styled.li`
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

  &:hover {
    background-color: #fff;
    color: ${({ theme }) => theme.font.color.primary};

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
    height: 35px;
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
    background-color: #11252b;
    margin: 0 1em;
  }
`;

interface MenuListProps {
  readonly subMenu: boolean;
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
`;
