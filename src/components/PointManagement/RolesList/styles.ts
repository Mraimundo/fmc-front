import styled, { css } from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const Item = styled.li`
  border-radius: 6px;
  border: 1.2px solid ${({ theme }) => theme.font.color.primary};
  background-color: #fff;
  padding: 0 15px;
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${FONTS.medium};
  cursor: pointer;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 5px 0;
  transition: background-color 150ms ease, color 150ms ease;
  font-size: 0.9em;

  &:hover {
    background-color: ${({ theme }) => theme.font.color.primary};
    color: #fff;
  }

  ${({ selected }: { selected: boolean }) =>
    !!selected &&
    css`
      background-color: ${({ theme }) => theme.font.color.primary};
      color: #fff;
    `}
`;
