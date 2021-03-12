import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 33px;
  border-left-width: 1px;
  border-right-width: 1px;
  margin-top: 23px;

  p {
     margin-bottom: 15px;
      font-size: 16px;
      color: #000;
    }
 
  fieldset {
    display: inline-flex;
    height: 1rem;
    align-items: flex-end;
    width: 4rem;
    -webkit-appearance: none;
    width: 300px;
    justify-content: flex-end;
    color: black;
  }
`;



export const InputStarColumn = styled.div`
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
      font-size: 16px;
      color: #000;
    }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 15px;
  
`;

export const PickContainer = styled.div`
  display: flex;
  align-items: center;
  color: #65554D;

  div {
    display: flex;
    align-items: center;
    position: relative;

    label {
      margin: 0 20px;
      top: 50;

      svg {
        width: 26px;
        height: 26px;
      }

      input {
        display: none;
      }
    }
  }

  span {
    margin-right: 10px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: Regular;
    line-height: 24px;
  }
`;
