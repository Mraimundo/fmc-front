import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 50px;
  display: flex;
  border-radius: 5px;
  background: #efefef;
  margin: 0 1rem 0;
`;

interface ItemProps {
  selected: boolean;
}

export const Item = styled.div<ItemProps>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.2em;
    text-align: center;
    color: ${({ theme }) => theme.font.color.primary};
  }

  &:first-child {
    border-radius: 5px 0px 0px 5px;
  }
  &:last-child {
    border-radius: 0px 5px 5px 0px;
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      background: ${theme.font.color.primary};

      > span {
        color: #fff;
      }
    `}
`;
