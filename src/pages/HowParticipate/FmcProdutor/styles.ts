import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.font.color.primary};
`;

export const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 33px 46px;

  > img {
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 720px) {
    width: 100%;
    > div {
      width: 100%;

      a {
        width: 100%;
        height: 50px;
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    > div a {
      height: 44px;
    }
  }

  > div {
    border: 1px solid #e63027;
    padding: 4px;
    border-radius: 6px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 282px;
    height: 58px;
    border-radius: 6px;
    background-color: #e63027;
    text-decoration: none;
    text-transform: uppercase;

    font-size: 19px;
    color: #fff;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};

    & + a {
      margin-left: 20px;
    }
  }
`;


export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 18px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.font.color.primary};
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StepsTitle = styled.h1`
    text-transform: uppercase;
    font-size: 18px;
    line-height: 1.2;
    text-align: center;
    font-family: ${({ theme }) => theme.font.fontFamily.condensed};
    @media (min-width: 768px) {
      font-size: 36px;
    }
    @media (min-width: 1024px) {
      margin: auto 20px;
    }
`;

export const StepsContainer = styled.div`
  position: relative;
  padding: 12px;
  border-radius: 10px;
  background-size: 100% auto;
  background-position: center;
  margin: 45px auto;
  background: linear-gradient(
    rgba(101, 85, 77, 0.17) 0%,
    rgba(255, 255, 255, 0.18) 47.78%,
    rgba(101, 85, 77, 0.09) 100%
  );
  color: ${({ theme }) => theme.font.color.primary};
`;

export const StepsContent = styled.div`
    border: 1px dashed ${({ theme }) => theme.font.color.secondary};
    border-radius: 10px;
    padding: 18px 24px;
    @media (min-width: 768px) {
      padding: 20px 24px;
    }
`;



export const StepsList = styled.ul`
    @media (min-width: 768px) {
      display:flex;
      flex-flow: row nowrap;
      justify-content: space-around;
    }
`;
export const Banner = styled.img`
    display: block;
    margin-bottom: 16px;
    width: 100%;
    @media (min-width: 768px) {
      margin-bottom: 32px;
    }
`;


export const LinkRegulamento = styled.div`
    display: block;
    margin: 60px auto;
    text-align:center;
`;

export const Button = styled.div`
    width: 265px;
    color: #fff;
    display: inline-block;
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    background-color: ${({ theme }) => theme.font.color.tertiary};
    padding: 12px 8px;
    font-size:16px;
`;

export const StepsListItem = styled.li`
    text-align: center;
    margin-bottom: 8px;
    display: block;
    img {
      height: 150px;
      margin-bottom: 8px;
    }
    h3  {
      font-family: ${({ theme }) => theme.font.fontFamily.condensed};
      font-size: 21px;
      margin-bottom: 4px;
      @media (min-width: 768px) {
        font-size: 24px;
        margin-bottom: 12px;
      }
    }
    p {
      font-size: 12px;
      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
    @media (min-width: 768px) {
      width: 30%;
    }
`;

