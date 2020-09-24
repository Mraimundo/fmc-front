import styled from 'styled-components';
import background from 'assets/images/cockpit/new-background.jpg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #f7f7f7;
`;

export const Test = styled.div`
  width: 100%;
  background: red;
  display: flex;
  justify-content: center;

  /*background: url(${background}) no-repeat center center;*/
  justify-content: center;
  background-size: 100%;

  > div {
    background: transparent;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 920px;
  flex-direction: column;
  background: #f7f7f7;
  padding: 40px 0;

  @media screen and (max-width: 500px) {
    padding: 40px 10px;
  }

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 24px;
    color: #2c2b2b;
  }

  @media screen and (max-width: 500px) {
    padding: 10px;

    > h3 {
      width: 100%;
      text-align: center;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  border-bottom: 1px solid #2c2b2b;
  margin: 45px 0 35px 0;
`;
