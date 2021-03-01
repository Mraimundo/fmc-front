import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 40px auto;
  h1 {
    font-size: 24px;
    color: #3B302A;
    font-style: normal;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 450px;

    p {
      font-size: 18px;
      font-family: Arial, Helvetica, sans-serif;
      color: #000;
    }
  }
`;

export const CardContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;

  > button {
    width: 265px;
    height: 36px;
    margin: 25px 0;
    align-self: center;
    border-radius: 0;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    font-family:  Helvetica, sans-serif;
    line-height: 28px;
    color: #3B302A;
    margin-bottom: 15px;
  }
`;

export const CardContentFooter = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;

  > button {
    width: 265px;
    height: 36px;
    margin: 25px 0;
    align-self: center;
    border-radius: 0;
  }

  > h2 {
    font-size: 24px;
    font-weight: bold;
    font-family:  Helvetica, sans-serif;
    line-height: 28px;
    color: #3B302A;
    margin-bottom: 15px;
  }
`;


