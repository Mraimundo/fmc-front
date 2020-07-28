import styled from 'styled-components';
import { Table } from 'components/shared';

export const Container = styled(Table)`
  margin-top: 20px;
  > thead > tr {
    background: transparent;
    color: ${({ theme }) => theme.font.color.primary};
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }

  > tbody > tr {
    color: ${({ theme }) => theme.font.color.quartenary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 14px;
  }

  ._customWidth {
    width: 94px;
    padding-left: 6px;
  }

  ._customWidthDate {
    width: 130px;
  }

  ._customWidthStatus {
    padding-right: 15px;
  }
`;
