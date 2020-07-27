import styled from 'styled-components';
import { FONTS } from 'styles/font/globals';

export const ContainerReseller = styled.div`
  align-items: center;
  background: #395389;
  color: ${({ theme }) => theme.font.color.secondary};
  display: flex;
`;

export const AccumulatedBalance = styled.div`
  flex: 4;
  padding: 0 15px;
  h2 {
    color: ${({ theme }) => theme.font.color.tertiary};
    font-size: 16px;
    font-family: ${FONTS.regular}, sans-serif;
    margin-left: 7px;
    strong {
      font-size: 28px;
      font-family: ${FONTS.regular}, sans-serif;
    }
  }
`;

export const BalanceBoxContainer = styled.div`
  display: flex;
`;

export const BalanceItem = styled.div`
  background: #fff;
  border-radius: 5px;
  color: #193b4e;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 7px;
  padding: 5px;

  .title {
    display: flex;
    font-size: 16px;
    justify-content: center;
    line-height: 20px;
    margin-top: 15px;
    min-height: 40px;
    text-align: center;
  }
  .value {
    display: flex;
    font-size: 28px;
    font-family: ${FONTS.regular}, sans-serif;
    justify-content: center;
    text-align: center;
  }
`;

export const CalltoActionContainer = styled.div`
  flex: 1.2;
`;

export const CalltoActionBox = styled.div`
  background: #fff;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
`;
