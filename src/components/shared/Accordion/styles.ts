import styled, { css } from 'styled-components';
import plus from 'assets/images/plus.svg';
import minus from 'assets/images/minus.svg';

interface ListProps {
  open: boolean;
  type: 'primary' | 'secondary';
}

export const Container = styled.div<ListProps>`
  border: 1px solid ${({ theme, type }) => theme.accordion[type].borderColor};
  transition: max-height 0.2s, min-height 0.2s;
  max-height: 79px;
  min-height: 79px;
  ${({ open }) =>
    open &&
    css`
      max-height: 407px;
      min-height: 407px;
    `}
`;

export const ListValuesTitle = styled.div<ListProps>`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  /*color: $ { ({ theme, type }) => theme.regulation[type].fontColor};*/
  padding: 5px;
  position: relative;
  min-height: 79px;

  > h3 {
    color: ${({ theme, type }) => theme.accordion[type].fontColor};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    margin-left: 130px;
  }

  &:after {
    transition: background 0.2s ease, transform 0.2s ease;
    content: '';
    mask: url(${({ open }) => (open ? minus : plus)});
    background-color: ${({ theme, open, type }) =>
      open
        ? theme.accordion[type].closeIconColor
        : theme.accordion[type].openIconColor};
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    position: absolute;
    left: 45px;
    top: 26px;
    background-repeat: no-repeat;
    width: 23px;
    height: 23px;
  }

  &:before {
    transition: background 0.2s ease-in;
    content: '';
    background-color: ${({ theme, open, type }) =>
      open
        ? theme.accordion[type].backgroundCloseIconColor
        : theme.accordion[type].backgroundOpenIconColor};
    width: 105px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    position: absolute;
    top: 4px;
  }
`;

export const ListValuesTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;
