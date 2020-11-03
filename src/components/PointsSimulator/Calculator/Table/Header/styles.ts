import styled from 'styled-components';

export const Container = styled.thead`
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
