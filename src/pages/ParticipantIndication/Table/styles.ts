import styled from 'styled-components';
import { Table } from 'components/shared';

export const Container = styled(Table)`
  margin-top: 20px;
  > tbody tr {
    color: ${({ theme }) => theme.font.color.quartenary};
    font-size: 14px;
    td {
      text-align: center;
    }
  }
  > thead tr {
    text-align: center;
    th {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 16px;
    }
  }
`;
