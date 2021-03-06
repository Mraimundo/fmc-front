import styled from 'styled-components';
import chevron from 'assets/images/extract/chevron.svg';

export const Container = styled.div`
  background: #efefef;
  padding: 10px;
  margin-bottom: 15px;
`;

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  color: ${({ theme }) => theme.font.color.primary};
  strong {
    display: block;
    font-size: 21px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
  .divider {
    flex: 1;
    border-bottom: 1px solid #444;
  }
  .text-right {
    text-align: right;
  }
  .chevron {
    background: url(${chevron}) no-repeat center center;
    width: 40px;
    height: 40px;
    &.open {
      transform: rotate(180deg);
    }
  }
`;

export const Content = styled.div`
  margin-right: 40px;
  margin-top: 20px;
  .content-row {
    margin-bottom: 10px;
  }
  .row-header {
    background: #fff;
    color: ${({ theme }) => theme.font.color.primary};
    display: flex;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    justify-content: space-between;
    padding: 10px;
  }
  .row-details {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    color: ${({ theme }) => theme.font.color.primary};
  }

  .special {
    opacity: 50%;
  }
`;
