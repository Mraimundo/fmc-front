import styled from 'styled-components';

export const QuotationsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0.7em;

  &:before {
    content: 'Cotações:';
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }

  > li {
    &:first-child {
      border-right: 1px solid #fff;
    }

    margin-left: 0.5em;
    padding-right: 0.5em;
  }
`;

export const Value = styled.span`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;
