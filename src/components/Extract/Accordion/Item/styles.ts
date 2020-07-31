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
  justify-content: space-between;
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
  .content-row {
    margin-bottom: 10px;
  }
  .row-header {
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  .row-details {
    display: flex;
    justify-content: space-between;
  }
`;
