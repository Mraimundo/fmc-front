import styled from 'styled-components';
import trophy from 'assets/images/trophy.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 176px;
  background: url(${trophy}) no-repeat center center;
  background-size: 100% 100%;
  justify-content: center;
  padding: 50px;
  box-shadow: 3px 3px 6px #00000029;
  border-radius: 10px;

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    color: #af8222;
    text-transform: uppercase;
  }

  > p {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 45px;
    color: #af8222;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1050px) {
    height: 140px;

    > span {
      font-size: 19px;
    }

    > p {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 120px;
    padding: 25px;

    > span {
      font-size: 16px;
    }

    > p {
      font-size: 26px;
    }
  }
`;
