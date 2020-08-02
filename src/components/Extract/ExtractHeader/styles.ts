import styled from 'styled-components';
import bgRevenda from 'assets/images/extract/bgRevenda.svg';
import bgCooperativa from 'assets/images/extract/bgCooperativa.svg';
import { EstablishmentType } from 'state/modules/point-management/common/types';

interface ContainerProps {
  userType: EstablishmentType;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 25px;
  align-items: center;
  background: #395389 url(${bgRevenda});
  ${({ userType }) =>
    userType === 'Revenda' &&
    `
    background: #395389 url(${bgRevenda});
  `};
  ${({ userType }) =>
    userType === 'Cooperativa' &&
    `
    background: #395389 url(${bgCooperativa});
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
