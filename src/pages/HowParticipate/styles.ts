import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 40px;
  max-width: 1100px;
  width: 100%;

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
    border: 1px solid ${({ theme }) => theme.howParticipate.button.borderColor};
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
    background-color: ${({ theme }) =>
      theme.howParticipate.button.backgroundColor};
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

export const StepsContainer = styled.div`
  position: relative;
  margin: 0 auto 110px auto;
  width: 100%;
`;

export const StepsContent = styled.div`
  border: 1px dashed ${({ theme }) => theme.font.color.secondary};
  border-radius: 10px;
  padding: 18px 24px;
  @media (min-width: 768px) {
    padding: 30px 24px;
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

export const Text = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.font.color.primary};
  font-size: 16px;
  margin: 20px auto;
  strong {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
  }
  p {
    margin-bottom: 12px;
  }
`;
