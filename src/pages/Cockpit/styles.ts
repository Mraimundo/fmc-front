import styled from 'styled-components';
import background from 'assets/images/cockpit/background.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #052346;
`;

export const GeneralContent = styled.div`
  width: 100%;
  /*background: red;*/
  display: flex;
  justify-content: center;

  background: url(${background}) no-repeat center center;
  justify-content: center;
  background-size: 100%;

  > div {
    background: transparent;
    padding: 33px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 920px;
  flex-direction: column;
  background: transparent;
  padding: 30px 0;

  @media screen and (max-width: 720px) {
    padding: 40px 10px;
  }

  > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.bold};
    font-size: 24px;
    color: #34ffff;
  }

  @media screen and (max-width: 720px) {
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
  border-bottom: 1px solid #34ffff;
  margin: 0 0 35px 0;
`;
