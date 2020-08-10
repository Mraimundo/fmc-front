import styled from 'styled-components';
import { Table } from 'components/shared';

export const Container = styled(Table)`
  margin-top: 20px;
  > thead > tr {
    background: transparent;
    color: #193f4e;
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }

  ._customWidth {
    width: 94px;
    padding-left: 0;
  }

  @media screen and (max-width: 720px) {
    td._customWidth {
      width: 100%;
      padding: 5px !important;
      a {
        margin-bottom: 0px;
        width: 100%;
      }
    }
  }
`;
