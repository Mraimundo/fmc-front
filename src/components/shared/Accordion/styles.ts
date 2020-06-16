import styled, { css } from 'styled-components';
import plus from 'assets/images/plus.svg';
import minus from 'assets/images/minus.svg';

interface ListProps {
  open: boolean;
  type: 'primary' | 'secondary';
}

export const Container = styled.div<ListProps>`
  border: 1px solid ${({ theme, type }) => theme.regulation[type].borderColor};
  transition: max-height 0.2s, min-height 0.2s;
  max-height: 65px;
  min-height: 40px;
  ${({ open }) =>
    open &&
    css`
      max-height: 300px;
      min-height: 300px;
    `}
`;

export const ListValuesTitle = styled.div<ListProps>`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: ${({ theme, type }) => theme.regulation[type].fontColor};
  padding: 5px;
  position: relative;
  min-height: 55px;

  > h3 {
    color: ${({ theme, type }) => theme.regulation[type].fontColor};
    margin-left: 95px;
  }

  &:after {
    transition: background 0.2s ease, transform 0.2s ease;
    content: '';
    mask: url(${({ open }) => (open ? minus : plus)});
    background-color: ${({ theme, open, type }) =>
      open
        ? theme.regulation[type].closeIconColor
        : theme.regulation[type].openIconColor};
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    position: absolute;
    left: 30px;
    background-repeat: no-repeat;
    width: 23px;
    height: 23px;
  }

  &:before {
    transition: background 0.2s ease-in;
    content: '';
    background-color: ${({ theme, open, type }) =>
      open
        ? theme.regulation[type].backgroundCloseIconColor
        : theme.regulation[type].backgroundOpenIconColor};
    width: 75px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    position: absolute;
  }
`;

export const ListValuesTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;
