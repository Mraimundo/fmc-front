import styled from 'styled-components';

export const Container = styled.div`
  height: 26px;
  display: grid;
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 10px;
  width: calc(100% - 13px);
  grid-template-columns:
    4.75728155339806% 12.9126213592233% 13.9805825242718%
    14.6601941747573% 12.1359223300971% 10.4854368932039% 10.4854368932039%
    10.4854368932039% 10.0970873786408%;
`;

export const Container2 = styled.thead`
  tr {
    th {
      height: 26px;
      font-size: 10px;
      text-align: left;
      color: ${({ theme }) => theme.font.color.primary};
      vertical-align: bottom;
    }
  }
`;
