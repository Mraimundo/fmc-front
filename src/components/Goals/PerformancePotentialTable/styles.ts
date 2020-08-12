import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  width: 70%;
  margin-bottom: 2em;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1px;
  height: 40px;
  color: #000000;
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  background-color: #efefef;
  padding: 0 1em;
  padding: 0 1em;
  font-size: 0.9em;
`;
