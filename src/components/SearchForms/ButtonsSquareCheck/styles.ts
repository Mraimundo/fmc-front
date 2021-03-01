import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h1 {
    font-size: 24px;
    color: #3B302A;
  }

`;


export const FormSquare = styled.div`
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

export const FormGroupSquare = styled.div`
  width: 40%;
  margin-top: 25px;
  transform: translateX(250px);
  
  div {
    display: flex;
    align-items:center;
    justify-content: space-around; 
    color: #65554D;

    span {
      width: 207px;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: Regular;
      line-height: 24px;
    }

    strong {
      /* margin-left: 10px; */
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;



