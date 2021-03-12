import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;


export const InputContent = styled.div`
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

export const InputGroupContent = styled.div`
  width: 70%;
  margin-top: 25px;

  .options{
    display: flex;
    align-items: center;
    margin-bottom: 10px;  
    div {
      width: 300px;
      display: flex;
      justify-content: space-between;

      align-items: center;
      margin-left: 100px;

      p {
        padding: 0 20px;
      }
    }
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  color: #65554D;
  margin-bottom: 15px;

    div {
      width: 280px;
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      label {
        margin: 0 20px;
        display: flex;
        flex-direction: column;
      }
    }
`;




