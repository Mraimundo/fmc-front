import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 384px);
  > div {
    min-height: calc(100vh - 384px);
    > div {
      min-height: calc(100vh -95px);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  background: #fff;
  padding: 40px 60px;

  > button {
    width: 250px;
    margin: 25px 0;
    height: 45px;
    align-self: center;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 20px;
  }
`;
