import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 520px;
  height: 50px;
  display: flex;
  border-radius: 8px;
  background: #efefef;
  margin: 0 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.font.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.font.color.primary};
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
    text-align: center;
  }

  span:first-of-type {
    font-size: 1.1em;
    color: ${({ theme }) => theme.font.color.primary};
  }

  span:last-of-type {
    font-size: 1em;
    color: #fff;
    background-color: ${({ theme }) => theme.font.color.primary};
    border-radius: 50%;
    min-width: 1.3rem;
    height: 1.3rem;
    padding: 1px 3px;
    margin-left: 5px;
  }

  &:first-child {
    border-radius: 8px 0px 0px 8px;
    border-left: 1px solid ${({ theme }) => theme.font.color.primary};
  }
  &:last-child {
    border-radius: 0px 8px 8px 0px;
    border-right: 1px solid ${({ theme }) => theme.font.color.primary};
  }

  &:nth-child(1n) {
    border-left: 1px solid ${({ theme }) => theme.font.color.primary};
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      background: ${theme.font.color.primary};

      span:first-of-type {
        color: #fff;
      }

      span:last-of-type {
        color: ${theme.font.color.primary};
        background-color: #fff;
      }
    `}
`;
