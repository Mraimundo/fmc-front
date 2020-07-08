import styled, { css } from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

export const Item = styled.li`
  border-radius: 6px;
  border: 2px solid #193b4e;
  background-color: #fff;
  padding: 0 15px;
  color: #193b4e;
  font-weight: 600;
  cursor: pointer;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #abbcc6;
    color: #fff;
  }

  ${({ selected }: { selected: boolean }) =>
    !!selected &&
    css`
      background-color: #193b4e;
      color: #fff;
    `}
`;
