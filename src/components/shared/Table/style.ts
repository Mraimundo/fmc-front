import styled from 'styled-components';
import { Table as ResponsiveTable } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

interface TableProps {
  tableRole: 'primary' | 'secondary';
}

export const Table = styled(ResponsiveTable)<TableProps>`
  border-collapse: collapse;
  font-size: 0.75em;
  margin-bottom: 1.5em;

  thead tr {
    background-color: ${({ theme, tableRole }) =>
      theme.table[tableRole].thead.tr.backgroundColor};
    color: ${({ theme, tableRole }) => theme.table[tableRole].thead.tr.color};
    height: 40px;
    height: 55px;
    text-align: left;

    th {
      padding-left: 20px;
      height: 55px;
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
    }
  }

  tbody tr {
    border-top: ${({ theme, tableRole }) =>
        theme.table[tableRole].tbody.tr.borderWidth}
      solid
      ${({ theme, tableRole }) => theme.table[tableRole].tbody.tr.borderColor};
    height: 50px;
    color: ${({ theme, tableRole }) => theme.table[tableRole].tbody.tr.color};

    td {
      padding-left: 20px;
      background-color: ${({ theme, tableRole }) =>
        theme.table[tableRole].tbody.td.backgroundColor};
    }
  }

  @media screen and (max-width: 640px) {
    tbody tr {
      height: auto;
      border: none !important;

      td {
        padding: 5px;
      }
    }
  }
`;

export const SingleLineWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #707070;
  height: 50px;

  > div,
  > svg {
    margin-right: 10px;
  }
`;
