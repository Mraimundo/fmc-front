import styled from 'styled-components';
import { Table } from 'components/shared';

export const Container = styled(Table)`
  margin-top: 20px;
  > tbody tr {
    color: ${({ theme }) => theme.font.color.quartenary};
  }
  > thead tr {
    /*text-align: center;*/
  }
`;
