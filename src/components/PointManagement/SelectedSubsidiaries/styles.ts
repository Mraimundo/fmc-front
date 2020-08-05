import styled from 'styled-components';

import { FONTS } from 'styles/font/globals';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 23px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    margin: 1em 0 1.5em;
  }
`;

export const SubsidiaryItem = styled.li`
  background-color: #fff;
  padding: 0.3em 1em;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.font.color.primary};
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${FONTS.medium};
  margin-right: 0.3em;
  margin-bottom: 0.3em;
  font-size: 0.9em;
  transition: background-color 150ms ease, color 150ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.font.color.primary};
    color: #fff;
  }
`;
