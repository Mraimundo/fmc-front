import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: block;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 384px);
  color: ${({ theme }) => theme.font.color.secondary};
  background: #fff;
`;

export const Content = styled.div`
  display: block; 
  padding-bottom: 40px;
  max-width: 1100px;
  width: 100%;
  margin: auto;

  > img {
    width: 100%;
  }
`;

export const PageTitle = styled.p`
  color: ${({ theme }) => theme.font.color.primary};
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 24px;
  padding-top: 40px;
  margin-bottom: 32px;
`;

export const ExtractLegend = styled.div`
  color: #000;
  font-family: ${({ theme }) => theme.font.fontFamily.medium};
  font-size: 12px;

  @media screen and (max-width: 500px) {
    padding: 20px;
  }
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


export const StatusContainer = styled.div`
  position: relative;
  padding: 12px;
  border-radius: 10px;
  background-size: 100% auto;
  background-position: center;
  width: 100%;

  background: linear-gradient(
    rgba(101, 85, 77, 0.17) 0%,
    rgba(255, 255, 255, 0.18) 47.78%,
    rgba(101, 85, 77, 0.09) 100%
  );
  color: ${({ theme }) => theme.font.color.primary};
`;

export const StatusContent = styled.div`
  position: relative;

  border: 1px dashed ${({ theme }) => theme.font.color.secondary};
  border-radius: 10px;
  padding: 24px;
  @media (min-width: 768px) {
    padding: 50px 24px;
  }
  a {
    text-decoration: none;
    color: #181818;
  }

  @media (max-width: 767px) {
    > * {
      margin-top: 20px;
    } 
  }
 

  @media (min-width: 1024px) {
    display: flex; 
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const StatusItem = styled.div`
  @media (min-width: 768px) {
    width: 30%
  }
`;
export const StatusTitle = styled.div`
    color: ${({ theme }) => theme.font.color.primary};
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 18px; 
`;
export const StatusBox = styled.div`
    padding: 12px 22px;
    border-radius: 0px;
    background: #fff;
    border: 1px dashed ${({ theme }) => theme.font.color.secondary};
    margin-top: 10px;
`;

 
export const StatusButton = styled.div`
    padding: 12px 22px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    display: block;
    background:  ${({ theme }) => theme.font.color.primary};
    margin-top: 10px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
`;

export const NFList = styled.div`
    padding: 12px 22px;
    background: #efefef;
    margin: 24px 0;
    color: ${({ theme }) => theme.font.color.primary};
     table {
      width: 100%;
      font-size: 14px;
      text-align: left;
      border-collapse: collapse;
    }
    th {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 14px;
      text-align: left;
      padding: 7px 10px;
    }
    td {
      background: #fff;
      padding: 7px 10px;
    }
`;
export const NFListInner = styled.div`
    padding: 12px 0; 
   
`;

 



