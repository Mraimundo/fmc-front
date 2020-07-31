import styled from 'styled-components';
import headerBackground from 'assets/images/extract/headerBackground.svg';

export const ContainerReseller = styled.div`
  margin-top: 25px;
  align-items: center;
  background: #395389 url(${headerBackground}) no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.font.color.secondary};
  display: flex;
`;

export const AccumulatedBalance = styled.div`
  flex: 4;
  padding: 0 15px;
  h2 {
    color: ${({ theme }) => theme.font.color.tertiary};
    font-size: 16px;
    margin-left: 7px;
    strong {
      font-size: 28px;
    }
  }
`;

export const BalanceBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px;
`;

export const BalanceItem = styled.div`
  background: ${({ theme }) => theme.layout.secondary.backgroundColor};
  border-radius: 5px;
  color: #193b4e;

  margin: 5px;
  padding: 5px;

  .title {
    font-size: 16px;
    line-height: 20px;
    margin-top: 15px;
    min-height: 40px;
    text-align: center;
  }
  .value {
    font-size: 28px;
    text-align: center;
  }
`;

export const CalltoActionContainer = styled.div`
  flex: 1.5;
`;

export const CalltoActionBox = styled.div`
  background: ${({ theme }) => theme.layout.secondary.backgroundColor};
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  strong {
    display: block;
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
  span {
    display: block;
    text-align: center;
  }
  button {
    height: 42px;
    max-width: 156px;
    margin: auto;
  }
  p {
    font-size: 14px;
    padding: 15px 10px;
  }
`;
