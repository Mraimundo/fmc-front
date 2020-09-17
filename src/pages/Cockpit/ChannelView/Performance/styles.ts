import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 42px;

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 21px;
    color: #717070;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 0 10px 20px 0;
`;

export const Row = styled.div`
  /*display: flex;
  width: 100%;
  justify-content: space-around;*/

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

  & + div {
    margin-top: 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ._special {
    flex-direction: column;
    height: 64%;
    justify-content: space-between;
    border-left: 1px solid #eee;
    width: 84%;
    margin-left: 8%;
    padding-bottom: 10%;

    @media screen and (max-width: 500px) {
      border-bottom: 1px solid #eee;
      border-left: none;
    }

    span {
      padding-top: 20px;
    }
  }
`;

export const Title = styled.h5`
  font-family: ${({ theme }) => theme.font.fontFamily.bold};
  font-size: 16px;
  color: #2c2b2b;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-family: ${({ theme }) => theme.font.fontFamily.regular};
    font-size: 14px;
    text-align: center;
    color: #2c2b2b;
  }
`;
