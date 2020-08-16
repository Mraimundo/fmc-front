import styled, { css } from 'styled-components';

export const SubMenuStyle = css`
  width: 100%;
  height: auto;
  visibility: hidden;
  display: flex;
  flex-wrap: wrap;
  left: 0;
  z-index: 1;
  border: none;
  padding: 0;
  margin: 0;
`;

interface MobileMenuListProps {
  subMenu: boolean;
}
export const MobileMenuList = styled.ul<MobileMenuListProps>`
  z-index: 2;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  padding: 1.5em 1em 1em 1em;
  width: calc(100% - 4em);
  border-top: 1px solid #fff;
  margin: 0 2em;

  ${({ subMenu }) => subMenu && SubMenuStyle};
`;

export const MobileMenuItem = styled.li`
  height: 40px;
  min-height: 40px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1em;
  }

  a {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    text-decoration: none;
    font-size: 1.25em;

    svg {
      margin-left: 0.5em;
    }
  }

  &:hover {
    height: auto;

    > ul {
      visibility: visible;
      margin-left: 2em;
      border-left: 1px solid rgb(255 255 255 / 19%);
      margin: 1.5em 0 1em 2em;
      padding-left: 1em;
    }
  }
`;
