import styled from 'styled-components';

import { EstablishmentTypes } from 'config/constants';
import bgRevenda from 'assets/images/extract/bgRevenda.svg';
import bgCooperativa from 'assets/images/extract/bgCooperativa.svg';

interface ContainerProps {
  userType: EstablishmentTypes;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 25px;
  align-items: center;
  ${({ userType }) =>
    userType === EstablishmentTypes.Resale &&
    `background: #395389 url(${bgRevenda});
  `};
  ${({ userType }) =>
    userType === EstablishmentTypes.Cooperative &&
    `background: #325107 url(${bgCooperativa});
  `};
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.font.color.secondary};
  display: flex;
`;

export const AccumulatedBalance = styled.div`
  flex: 4;
  padding: 0 15px;
  h2 {
    color: ${({ theme }) => theme.font.color.tertiary};
    font-family: ${({ theme }) => theme.font.fontFamily.medium};
    font-size: 16px;
    margin-left: 7px;
    strong {
      font-size: 28px;
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
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
  color: ${({ theme }) => theme.font.color.primary};
  margin: 5px;
  padding: 5px;

  .title {
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.fontFamily.medium};
    line-height: 20px;
    margin-top: 15px;
    min-height: 40px;
    text-align: center;
  }
  .value {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 28px;
    text-align: center;
  }
`;

export const CalltoActionContainer = styled.div`
  flex: 1.4;
`;

export const CalltoActionBox = styled.div`
  background: ${({ theme }) => theme.layout.secondary.backgroundColor};
  border-radius: 5px;
  font-size: 14px;
  margin: 10px;
  min-height: 150px;

  span {
    display: block;
    text-align: center;
  }
  button {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 16px;
    height: 42px;
    max-width: 156px;
    margin: auto;
  }
  .available {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
    font-size: 14px;
    padding: 15px 22px;
    strong {
      display: block;
      font-size: 18px;
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
    }
  }
  .shared-actions {
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
    font-size: 14px;
    padding: 15px;

    > span {
      text-align: left;
    }
  }
`;
