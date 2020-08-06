import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 384px);
  color: ${({ theme }) => theme.font.color.secondary};
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 0 25px;

  @media screen and (max-width: 720px) {
    padding: 0 20px;
  }
`;

export const PageTitle = styled.p`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px;
  margin-top: 30px;
`;

export const ExtractLegend = styled.div`
  color: #000;
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 12px;
`;

export const ExtractEmpty = styled.div`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 24px;
  margin-top: 50px;
  text-align: center;
  button {
    max-width: 150px;
    margin: 30px auto;
  }
`;

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.button.primary.backgroundColor};
  border-radius: ${({ theme }) => theme.button.primary.borderRadius};
  padding: 10px 15px;
  color: ${({ theme }) => theme.button.primary.fontColor};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
`;
