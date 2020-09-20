import styled from 'styled-components';
import background from 'assets/images/products/background.svg';
import mobileBackground from 'assets/images/products/mobile-background2.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #f7f7f7;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #f7f7f7;
  padding: 40px 60px;

  @media screen and (max-width: 500px) {
    padding: 40px 10px;
  }
`;

export const Header = styled.div`
  > ${Content} {
    background: transparent;
    position: relative;

    > h3 {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 24px;
      color: ${({ theme }) => theme.font.color.primary};
    }

    > span {
      font-family: ${({ theme }) => theme.font.fontFamily.bold};
      font-size: 18px;
      color: ${({ theme }) => theme.font.color.primary};
      margin-top: 6px;
    }

    @media screen and (max-width: 500px) {
      padding: 20px 10px;

      > h3 {
        font-size: 21px;
        width: 100%;
        text-align: center;
      }

      > span {
        font-size: 14px;
        padding: 0 20px;
      }
    }
  }

  display: flex;
  width: 100%;
  height: 489px;
  background: url(${background}) no-repeat center center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    background: url(${mobileBackground}) no-repeat center center;
    background-size: 100%;
    justify-content: center;
    height: 498px;
  }
`;

export const NotFound = styled.span`
  width: 100%;
  text-align: center;
  margin: 25px 0;
  color: ${({ theme }) => theme.font.color.quartenary};
  font-size: 18px;
`;
