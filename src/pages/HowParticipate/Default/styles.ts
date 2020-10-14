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
