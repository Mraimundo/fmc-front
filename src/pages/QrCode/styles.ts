import styled from 'styled-components';
import background from 'assets/images/background.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${background});
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 360px;
  padding: 20px;

  > a {
    text-align: center;
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    color: #fff;
  }
`;

export const StyledCenterText = styled.div`
  width: 100%;

  > h3,
  > p {
    text-align: center;
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    line-height: 1.3;
  }

  > p {
    margin-top: 20px;
  }
`;

export const Logo = styled.img`
  width: 80%;
`;

export const JuntosApp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  > a {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    > img {
      width: 100%;
      height: 44px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 100%;
  height: 150px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  svg {
    width: 70%;
  }
`;
