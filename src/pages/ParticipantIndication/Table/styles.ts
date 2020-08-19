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
      font-size: 16px;
    }
  }

  @media screen and (max-width: 640px) {
    td._customWidth {
      width: 100%;
      padding: 5px !important;
    }
  }
`;
