import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h1 {
    font-size: 24px;
    color: #3B302A;
  }

`;

export const FormControlStar = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;
    p {
      font-size: 14px;
      color: #000;
    }
`;

export const FormGroup = styled.div`
  width: 60%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 20px;

  div {
    display: flex;
    align-items:center;
    flex-direction: column;
    color: #65554D;

    span {
      font-size: 18px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: Regular;
      line-height: 24px;
    }

    svg {
      margin-top: 10px;
      width: 26px;
      height: 26px;
    }
  }
`;




