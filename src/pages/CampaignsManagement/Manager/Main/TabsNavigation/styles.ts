import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1027px;
`;

interface BoxProps {
  selected: boolean;
}
export const Box = styled.div<BoxProps>`
  position: relative;
  width: calc(100% / 6);
  height: 87px;
  border: 2px solid ${({ theme }) => theme.font.color.quartenary};
  opacity: 0.15;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  color: ${({ theme }) => theme.font.color.primary};
  text-transform: uppercase;

  & + div {
    margin-left: 7px;
    border-left-color: transparent;
  }

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid ${({ theme }) => theme.font.color.quartenary};
    top: 50%;
    transform: translateY(-50%) rotateZ(45deg);
    right: -9px;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 17px;
    border-right: 2px solid #fff;
    top: 50%;
    right: -2px;
    transform: translateY(-50%);
  }

  &:last-child {
    &::after {
      display: none;
    }

    &::before {
      display: none;
    }
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      opacity: 1;
      border: 2px solid ${theme.font.color.primary};
      &::before {
        border-right-color: ${theme.font.color.primary};
        border-top-color: ${theme.font.color.primary};
      }
    `}
`;
